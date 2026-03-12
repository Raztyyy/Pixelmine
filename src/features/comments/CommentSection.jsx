import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useComments } from "../../context/CommentContext";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import DeleteModal from "./DeleteModal.jsx";
import Dropdown from "../../ui/Dropdown.jsx";

export default function CommentSection() {
  const { token, user: currentUser } = useAuth();
  const { comments, loading, vote, upvotes, refresh } = useComments();

  const [visibleCount, setVisibleCount] = useState(5);
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    commentId: null,
  });
  const [openReplies, setOpenReplies] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null); // null = no search yet
  const [sortOption, setSortOption] = useState("recent"); // "recent" or "upvoted"

  const API_URL = import.meta.env.VITE_API_URL;

  const confirmDelete = (id) => setDeleteModal({ open: true, commentId: id });
  const closeDeleteModal = () =>
    setDeleteModal({ open: false, commentId: null });

  const deleteComment = async () => {
    const id = deleteModal.commentId;
    if (!id) return;
    try {
      const res = await fetch(`${API_URL}/api/di-comments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete comment");
      closeDeleteModal();
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = filterComments(comments, searchTerm);
    setSearchResults(filtered);
    setVisibleCount(5); // reset visible count for new search
  };

  const filterComments = (commentsList, term) => {
    if (!term.trim()) return commentsList;

    return commentsList
      .map((comment) => {
        const matches =
          comment.content.toLowerCase().includes(term.toLowerCase()) ||
          `${comment.first_name} ${comment.last_name}`
            .toLowerCase()
            .includes(term.toLowerCase());

        const filteredReplies = comment.replies
          ? filterComments(comment.replies, term)
          : [];

        if (matches || filteredReplies.length > 0) {
          return { ...comment, replies: filteredReplies };
        }
        return null;
      })
      .filter(Boolean);
  };

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "oldest", label: "Oldest" },
    { value: "upvoted", label: "Most Upvoted" },
  ];

  const sortComments = (commentsList) => {
    const sorted = [...commentsList];

    sorted.forEach((c) => {
      if (c.replies?.length) {
        c.replies = sortComments(c.replies); // sort nested replies recursively
      }
    });

    if (sortOption === "upvoted") {
      // sort descending by upvote count
      sorted.sort(
        (a, b) => (upvotes[b.id]?.count ?? 0) - (upvotes[a.id]?.count ?? 0)
      );
    } else if (sortOption === "recent") {
      // most recent first
      sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortOption === "oldest") {
      // oldest first
      sorted.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }

    return sorted;
  };

  // Recursively count comments and all nested replies
  const countAllComments = (commentsList) => {
    return commentsList.reduce((total, comment) => {
      const repliesCount = comment.replies
        ? countAllComments(comment.replies)
        : 0;
      return total + 1 + repliesCount; // +1 for the comment itself
    }, 0);
  };

  // Usage
  const filteredComments = searchResults ?? comments; // search results if any
  const displayedComments = sortComments(filteredComments);
  const totalComments = countAllComments(displayedComments);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-8 h-8 border-4 rounded-full border-emerald-700 border-t-transparent animate-spin"></div>
        <p className="mt-2 text-sm text-gray-500">Loading comments...</p>
      </div>
    );

  return (
    <div className="mt-10">
      <DeleteModal
        open={deleteModal.open}
        onClose={closeDeleteModal}
        onConfirm={deleteComment}
      />

      {/* Only show search & sort if there are comments */}
      {token && comments.length > 0 && (
        <div className="mb-4">
          <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Search comments or users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700"
            >
              Search
            </button>
          </form>
          <div className="flex flex-col gap-2">
            Sort by:
            <Dropdown
              options={sortOptions}
              value={sortOption}
              onChange={setSortOption}
              placeholder="Sort comments"
            />
          </div>
        </div>
      )}

      {/* Comment header */}
      <h2 className="my-5 text-lg font-medium">
        {displayedComments.length === 0
          ? "No comments yet"
          : `Comments (${totalComments})`}
      </h2>

      {/* No comments message */}
      {displayedComments.length === 0 ? (
        <p className="mt-4 mb-10 text-left text-gray-500">
          {searchTerm
            ? "No matching results. Try different keywords."
            : "Be the first to comment!"}
        </p>
      ) : (
        displayedComments
          .slice(0, visibleCount)
          .map((c) => (
            <CommentItem
              key={c.id}
              comment={c}
              currentUser={currentUser}
              fetchComments={refresh}
              confirmDelete={confirmDelete}
            />
          ))
      )}

      {/* Show more only if top-level items exceed visibleCount */}
      {token && displayedComments.length > visibleCount && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="w-full mb-10 px-5 py-3.5 text-sm font-semibold text-emerald-600 border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 transition"
          >
            See more
          </button>
        </div>
      )}

      {/* New comment input */}
      {token ? (
        <CommentInput parentId={null} />
      ) : (
        <p className="mt-4 text-sm text-gray-500">
          <Link to="/login" className="underline hover:text-gray-700">
            Login
          </Link>{" "}
          to leave a comment and access full content.
        </p>
      )}
    </div>
  );
}
