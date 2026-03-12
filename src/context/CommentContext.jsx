import { createContext, useContext, useState, useEffect } from "react";
import * as commentService from "../services/commentService";
import { useAuth } from "./AuthContext";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const { token, user: currentUser } = useAuth();

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
      const newComment = await commentService.postComment(
        token,
        content,
        parent_id
      );

      const fullComment = {
        ...newComment,
        user_id: currentUser.id, // ← add this
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        avatar_blob: currentUser.avatar_blob,
        replies: [],
      };

      setComments((prev) => {
        if (!parent_id) {
          return [fullComment, ...prev]; // use fullComment here too
        }

        const addReply = (comments) =>
          comments.map((c) => {
            if (c.id === parent_id) {
              return {
                ...c,
                replies: [...(c.replies || []), fullComment],
              };
            }
            if (c.replies) {
              return { ...c, replies: addReply(c.replies) };
            }
            return c;
          });

        return addReply(prev);
      });
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

      setComments((prev) => {
        const updateComment = (comments) =>
          comments.map((c) => {
            // Edit
            if (c.id === id) {
              return {
                ...c,
                content: newContent,
                updated_at: new Date().toISOString(), // optional
              };
            }
            if (c.replies) {
              return { ...c, replies: updateComment(c.replies) };
            }
            return c;
          });

        return updateComment(prev);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeComment = (id) => {
    const remove = (comments) =>
      comments
        .filter((c) => c.id !== id)
        .map((c) => ({
          ...c,
          replies: c.replies ? remove(c.replies) : [],
        }));

    setComments((prev) => remove(prev));
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
        removeComment,
        refresh: fetchComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComments = () => useContext(CommentContext);
