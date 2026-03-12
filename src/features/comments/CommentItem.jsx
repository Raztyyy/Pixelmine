import { useState, useEffect, useRef } from "react";
import { capitalize, capitalizeWords } from "../../utils/stringUtils";
import { formatDateReadable } from "../../utils/dateUtils";
import { useComments } from "../../context/CommentContext";
import CommentInput from "./CommentInput";
import UpvoteButton from "./UpvoteButton";

export default function CommentItem({
  comment,
  currentUser,
  confirmDelete,
  depth = 0,
  maxDepth = 2,
  openReplyId,
  setOpenReplyId,
  openReplies,
  setOpenReplies,
  commentRefs,
}) {
  const { vote, upvotes, editComment } = useComments();
  const [editingComment, setEditingComment] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showFull, setShowFull] = useState(false);

  const menuRefs = useRef({});
  const commentRef = useRef(null);
  const textareaRef = useRef(null);
  const MAX_LENGTH = 380;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [editingContent]);

  useEffect(() => {
    if (commentRef.current && commentRefs) {
      commentRefs.current[comment.id] = commentRef.current;
    }
    return () => {
      if (commentRefs && commentRefs.current) {
        delete commentRefs.current[comment.id];
      }
    };
  }, [comment.id, commentRefs]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedInside = Object.values(menuRefs.current).some((ref) =>
        ref?.contains(e.target)
      );
      if (!clickedInside) setOpenMenuId(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSaveEdit = async () => {
    if (!editingContent.trim()) return;
    try {
      await editComment(comment.id, editingContent);
      setEditingComment(null);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleReplyInput = () => {
    setOpenReplyId(openReplyId === comment.id ? null : comment.id);
    setOpenReplies((prev) => ({ ...prev, [comment.id]: true }));
  };

  const toggleReplies = () =>
    setOpenReplies((prev) => ({ ...prev, [comment.id]: !prev[comment.id] }));

  const countNestedReplies = (comment) => {
    if (!comment.replies || comment.replies.length === 0) return 0;
    return comment.replies.reduce(
      (total, r) => total + 1 + countNestedReplies(r),
      0
    );
  };

  const displayedContent =
    !showFull && comment.content.length > MAX_LENGTH
      ? comment.content.slice(0, MAX_LENGTH) + "..."
      : comment.content;

  return (
    <div
      className="py-4 bg-white dark:bg-transparent rounded-xl sm:p-4"
      ref={commentRef}
    >
      <div className="flex items-start gap-3">
        {comment.avatar_blob ? (
          <img
            src={comment.avatar_blob}
            alt={`${comment.first_name} ${comment.last_name}`}
            className="object-cover w-10 h-10 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 dark:from-emerald-500 dark:to-teal-400">
            {capitalize(comment.first_name?.[0] || "U")}
          </div>
        )}

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-0 sm:gap-2 sm:flex-row sm:items-center">
              {/* Mobile view */}
              <div className="flex items-center justify-between sm:hidden">
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {capitalizeWords(
                    `${comment.first_name} ${comment.last_name}`
                  )}
                </span>
                <button
                  onClick={() =>
                    setOpenMenuId(openMenuId === comment.id ? null : comment.id)
                  }
                  className="p-1 ml-2 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800"
                >
                  ⋯
                </button>
              </div>

              {/* Tablet & Desktop view */}
              <span className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block">
                {capitalizeWords(`${comment.first_name} ${comment.last_name}`)}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-400">
                {formatDateReadable(comment.created_at, "full")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <UpvoteButton
                commentId={comment.id}
                upvotes={upvotes}
                onVote={vote}
              />

              {currentUser && comment.user_id === currentUser?.id && (
                <div
                  className="relative inline-block"
                  ref={(el) => (menuRefs.current[`menu-${comment.id}`] = el)}
                >
                  <button
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === comment.id ? null : comment.id
                      )
                    }
                    className="hidden p-1 ml-2 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800 sm:block"
                  >
                    ⋯
                  </button>
                  {openMenuId === comment.id && (
                    <div className="absolute right-0 z-10 mt-1 overflow-hidden bg-white border shadow-lg dark:bg-stone-700 dark:border-stone-600 w-28 rounded-xl">
                      <button
                        onClick={() => {
                          setEditingComment(comment.id);
                          setEditingContent(comment.content);
                          setOpenMenuId(null);
                        }}
                        className="w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDelete(comment.id)}
                        className="w-full px-3 py-2 text-sm text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Comment Content */}
          {editingComment === comment.id ? (
            <div className="flex flex-col gap-5 mt-2">
              <textarea
                ref={textareaRef}
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="w-full p-2 overflow-hidden border resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-stone-700 dark:border-stone-600 dark:text-gray-200 dark:focus:ring-emerald-400"
                rows={1}
              />
              <div className="flex self-end gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="px-8 py-3 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-400 dark:hover:from-emerald-600 dark:hover:to-teal-500"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingComment(null)}
                  className="px-8 py-3 text-gray-700 border rounded-xl hover:bg-gray-50 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-800 break-words whitespace-pre-wrap dark:text-gray-200">
              {displayedContent}{" "}
              {comment.content.length > MAX_LENGTH && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="mt-1 text-sm text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  {showFull ? "Read less" : "Read more"}
                </button>
              )}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
            {currentUser && depth < maxDepth && (
              <button onClick={toggleReplyInput} className="hover:underline">
                Reply
              </button>
            )}

            {comment.replies?.length > 0 && (
              <button onClick={toggleReplies} className="hover:underline">
                {openReplies[comment.id]
                  ? "Hide replies"
                  : `Show replies (${countNestedReplies(comment)})`}
              </button>
            )}
          </div>

          {/* Replies */}
          {openReplies[comment.id] &&
            depth < maxDepth &&
            comment.replies.map((r) => (
              <CommentItem
                key={r.id}
                comment={r}
                currentUser={currentUser}
                confirmDelete={confirmDelete}
                depth={depth + 1}
                maxDepth={maxDepth}
                openReplyId={openReplyId}
                setOpenReplyId={setOpenReplyId}
                openReplies={openReplies}
                setOpenReplies={setOpenReplies}
                commentRefs={commentRefs}
              />
            ))}

          {/* Reply Input */}
          {depth < maxDepth && openReplyId === comment.id && (
            <CommentInput
              parentId={comment.id}
              autoFocus={true}
              scrollRef={commentRefs.current[comment.id]}
              onSubmit={() => {
                setOpenReplyId(comment.id);
                setOpenReplies((prev) => ({ ...prev, [comment.id]: true }));
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
