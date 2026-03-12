import { useState, useEffect, useRef } from "react";
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
  const [openReplyId, setOpenReplyId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [sortOption, setSortOption] = useState("recent");

  const API_URL = import.meta.env.VITE_API_URL;

  const commentRefs = useRef({});
  const commentsContainerRef = useRef(null);

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
    setVisibleCount(5);
  };

  const filterComments = (commentsList, term) => {
    if (!term.trim()) return commentsList;
    return commentsList
      .map((comment) => {
        const matchesComment =
          comment.content.toLowerCase().includes(term.toLowerCase()) ||
          `${comment.first_name} ${comment.last_name}`
            .toLowerCase()
            .includes(term.toLowerCase());

        const filteredReplies = comment.replies
          ? filterComments(comment.replies, term)
          : [];

        const termNumber = parseInt(term, 10);
        const matchesUpvotes =
          !isNaN(termNumber) && (comment.upvotes ?? 0) >= termNumber;

        if (matchesComment || filteredReplies.length > 0 || matchesUpvotes) {
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

  const getTotalUpvotes = (comment) =>
    (upvotes[comment.id]?.count ?? 0) +
    (comment.replies?.reduce((sum, r) => sum + getTotalUpvotes(r), 0) ?? 0);

  const sortComments = (commentsList) => {
    const sorted = [...commentsList];
    sorted.forEach((c) => {
      if (c.replies?.length) c.replies = sortComments(c.replies);
    });
    if (sortOption === "upvoted") {
      sorted.sort((a, b) => getTotalUpvotes(b) - getTotalUpvotes(a));
    } else if (sortOption === "recent") {
      sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortOption === "oldest") {
      sorted.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
    return sorted;
  };

  const countAllComments = (commentsList) =>
    commentsList.reduce((total, comment) => {
      const repliesCount = comment.replies
        ? countAllComments(comment.replies)
        : 0;
      return total + 1 + repliesCount;
    }, 0);

  const filteredComments = searchResults ?? comments;
  const displayedComments = sortComments(filteredComments);
  const totalComments = countAllComments(displayedComments);

  const prevTopLevelCount = useRef(comments.length);
  useEffect(() => {
    if (
      comments.length > prevTopLevelCount.current &&
      commentsContainerRef.current
    ) {
      commentsContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    prevTopLevelCount.current = comments.length;
  }, [comments]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-8 h-8 border-4 rounded-full border-emerald-700 border-t-transparent animate-spin dark:border-emerald-400 dark:border-t-transparent"></div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
          Loading comments...
        </p>
      </div>
    );

  return (
    <div className="mt-10">
      <DeleteModal
        open={deleteModal.open}
        onClose={closeDeleteModal}
        onConfirm={deleteComment}
      />

      {token && comments.length > 0 && (
        <div className="flex flex-col flex-1 gap-6">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col flex-1 gap-2 sm:flex-row"
          >
            <input
              type="text"
              placeholder="Search comments or users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="px-5 py-3 text-sm font-semibold text-white sm:py-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-400 dark:hover:from-emerald-600 dark:hover:to-teal-500"
            >
              Search
            </button>
          </form>
          <div className="flex flex-col gap-2 ">
            <span className="font-medium text-gray-700 text-md dark:text-white">
              Sort by:
            </span>
            <Dropdown
              options={sortOptions}
              value={sortOption}
              onChange={setSortOption}
              placeholder="Sort comments"
            />
          </div>
        </div>
      )}

      <h2 className="my-5 text-lg font-medium text-gray-900 dark:text-gray-100">
        {searchResults === null
          ? comments.length === 0
            ? "No comments yet"
            : `Comments (${totalComments})`
          : filteredComments.length === 0
          ? "No results"
          : `Comments (${totalComments})`}
      </h2>

      <div ref={commentsContainerRef} className="flex flex-col gap-4 ">
        {displayedComments.length === 0
          ? searchResults === null
            ? comments.length === 0 && (
                <p className="mt-4 mb-10 text-left text-gray-500 dark:text-gray-400">
                  Be the first to comment!
                </p>
              )
            : filteredComments.length === 0 && (
                <p className="mt-4 mb-10 text-left text-gray-500 dark:text-gray-400">
                  No matching results. Try different keywords.
                </p>
              )
          : displayedComments
              .slice(0, visibleCount)
              .map((c) => (
                <CommentItem
                  key={c.id}
                  comment={c}
                  currentUser={currentUser}
                  confirmDelete={confirmDelete}
                  openReplyId={openReplyId}
                  setOpenReplyId={setOpenReplyId}
                  openReplies={openReplies}
                  setOpenReplies={setOpenReplies}
                  commentRefs={commentRefs}
                />
              ))}
      </div>

      {token && displayedComments.length > visibleCount && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="w-full  mb-10 px-5 py-3.5 text-sm font-semibold text-emerald-600 border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-gray-800 transition"
          >
            See more
          </button>
        </div>
      )}

      {token ? (
        <CommentInput
          parentId={null}
          scrollRef={commentsContainerRef.current}
        />
      ) : (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <Link
            to="/login"
            className="underline hover:text-gray-700 dark:hover:text-gray-200"
          >
            Login
          </Link>{" "}
          to leave a comment and access full content.
        </p>
      )}
    </div>
  );
}
