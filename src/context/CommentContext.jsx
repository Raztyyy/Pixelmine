import { createContext, useContext, useState, useEffect } from "react";
import * as commentService from "../services/commentService";
import { useAuth } from "./AuthContext";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const { token } = useAuth();

  const [comments, setComments] = useState([]);
  const [upvotes, setUpvotes] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch all comments
  const fetchComments = async () => {
    setLoading(true);
    try {
      const data = await commentService.fetchComments(token);
      setComments(data);

      // Build upvotes map for comments and replies
      const votes = {};
      data.forEach((c) => {
        votes[c.id] = { count: c.upvotes, hasVoted: c.has_voted };
        c.replies?.forEach((r) => {
          votes[r.id] = { count: r.upvotes, hasVoted: r.has_voted };
        });
      });
      setUpvotes(votes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Run fetch after token is ready
  useEffect(() => {
    // if (token) fetchComments();
    fetchComments();
  }, [token]);

  // Toggle upvote
  const vote = async (commentId) => {
    if (!token) return;
    try {
      const data = await commentService.toggleUpvote(token, commentId);
      setUpvotes((prev) => ({
        ...prev,
        [commentId]: { count: data.upvotes, hasVoted: data.upvoted },
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // Create a new comment or reply
  const createComment = async (content, parent_id = null) => {
    if (!token) return;
    try {
      await commentService.postComment(token, content, parent_id);
      fetchComments(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  // Edit existing comment
  const editComment = async (id, newContent) => {
    if (!newContent) return;
    setLoading(true);
    try {
      await commentService.editComment(token, id, newContent);
      await fetchComments(); // refresh
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        upvotes,
        loading,
        vote,
        createComment,
        editComment,
        refresh: fetchComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComments = () => useContext(CommentContext);
