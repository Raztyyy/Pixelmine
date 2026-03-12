// UpvoteButton.jsx
import React from "react";

export default function UpvoteButton({ commentId, upvotes, onVote }) {
  const voteData = upvotes[commentId] || { count: 0, hasVoted: false };
  return (
    <button
      onClick={() => onVote(commentId)}
      className={`px-2 py-1 text-sm rounded-xl transition ${
        voteData.hasVoted
          ? "text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      ↑ {voteData.count}
    </button>
  );
}
