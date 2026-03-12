import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { capitalize } from "../../utils/stringUtils";
import { useComments } from "../../context/CommentContext";

export default function CommentInput({
  parentId = null,
  onCancel,
  onSubmit,
  autoFocus = false,
  scrollRef,
}) {
  const { token, user: currentUser } = useAuth();
  const { createComment } = useComments();
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  // Auto-focus only if autoFocus=true
  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  // Auto-expand height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  if (!token) return null;

  const handleSubmit = async () => {
    if (!text.trim()) return;

    const newComment = await createComment(text, parentId); // returns new comment object
    setText("");

    // Scroll to new comment if scrollRef exists
    if (scrollRef) {
      const yOffset = -140; // adjust this to match your header height
      const y =
        scrollRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (onSubmit) onSubmit(newComment?.id); // pass new comment id if needed
    if (onCancel) onCancel();
  };

  return (
    <div className="flex gap-2 mt-5">
      {/* Avatar */}
      {currentUser?.avatar_blob ? (
        <img
          src={currentUser.avatar_blob}
          alt={currentUser.first_name}
          className="object-cover w-8 h-8 rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-gradient-to-br from-emerald-600 to-teal-500">
          {capitalize(currentUser?.first_name?.[0] || "U")}
        </div>
      )}

      {/* Textarea + button */}
      <div className="flex flex-col flex-1 gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder={parentId ? "Write a reply..." : "Write a comment..."}
        />
        {text.trim() && (
          <button
            onClick={handleSubmit}
            className="self-end px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700"
          >
            {parentId ? "Reply" : "Post"}
          </button>
        )}
      </div>
    </div>
  );
}
