import { useState, useEffect, useRef } from "react";
import { capitalize, capitalizeWords } from "../../utils/stringUtils";
import { formatDateReadable } from "../../utils/dateUtils";
import { useComments } from "../../context/CommentContext";
import CommentInput from "./CommentInput";
import UpvoteButton from "./UpvoteButton";

export default function CommentItem({
  comment,
  currentUser,
  fetchComments,
  confirmDelete,
  depth = 0, // add depth
  maxDepth = 2, // max nested levels
}) {
  const { vote, upvotes, createComment, editComment } = useComments();

  const [editingComment, setEditingComment] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [openReplyInput, setOpenReplyInput] = useState({});
  const [openReplies, setOpenReplies] = useState({});
  const [openMenuId, setOpenMenuId] = useState(null);

  const menuRefs = useRef({});

  // Auto resize of text area
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px"; // adjust to content
    }
  }, [editingContent]);

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
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleReplyInput = () =>
    setOpenReplyInput((prev) => ({ ...prev, [comment.id]: !prev[comment.id] }));

  const toggleReplies = () =>
    setOpenReplies((prev) => ({ ...prev, [comment.id]: !prev[comment.id] }));

  const countNestedReplies = (comment) => {
    if (!comment.replies || comment.replies.length === 0) return 0;
    return comment.replies.reduce(
      (total, r) => total + 1 + countNestedReplies(r),
      0
    );
  };

  return (
    <div className="py-4 bg-white">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        {comment.avatar_blob ? (
          <img
            src={comment.avatar_blob}
            alt={`${comment.first_name} ${comment.last_name}`}
            className="object-cover w-10 h-10 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-emerald-600 to-teal-500">
            {capitalize(comment.first_name?.[0] || "U")}
          </div>
        )}

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
              <span className="font-medium text-gray-900">
                {capitalizeWords(`${comment.first_name} ${comment.last_name}`)}
              </span>
              <span className="text-xs text-gray-400">
                {formatDateReadable(comment.created_at, "full")}
              </span>
            </div>

            {/* Upvote + Menu */}
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
                    className="p-1 ml-2 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100"
                  >
                    ⋯
                  </button>
                  {openMenuId === comment.id && (
                    <div className="absolute right-0 z-10 mt-1 overflow-hidden bg-white border shadow-lg w-28 rounded-xl">
                      <button
                        onClick={() => {
                          setEditingComment(comment.id);
                          setEditingContent(comment.content);
                          setOpenMenuId(null);
                        }}
                        className="w-full px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDelete(comment.id)}
                        className="w-full px-3 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Comment Content / Edit */}
          {editingComment === comment.id ? (
            <div className="flex flex-col gap-5 mt-2">
              <textarea
                ref={textareaRef}
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="w-full p-2 overflow-hidden border resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={1} // initial height, will auto-expand
              />
              <div className="flex self-end gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="px-8 py-3 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingComment(null)}
                  className="px-8 py-3 text-gray-700 border rounded-xl hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-800 break-words whitespace-pre-wrap">
              {comment.content}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
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
                fetchComments={fetchComments}
                confirmDelete={confirmDelete}
                depth={depth + 1} // increment depth
                maxDepth={maxDepth} // pass maxDepth down
              />
            ))}

          {/* Reply Input */}
          {openReplyInput[comment.id] && (
            <CommentInput
              parentId={comment.id}
              onCancel={() =>
                setOpenReplyInput((prev) => ({ ...prev, [comment.id]: false }))
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
