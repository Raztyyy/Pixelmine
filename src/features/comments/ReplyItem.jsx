import { useComments } from "../../context/CommentContext";
import { capitalize, capitalizeWords } from "../../utils/stringUtils";

function ReplyItem({ reply }) {
  const { vote, upvotes } = useComments();

  return (
    <div className="pl-4 mt-2 border-l-2 border-gray-200">
      <div className="flex items-start gap-3">
        {reply.avatar_blob ? (
          <img
            src={reply.avatar_blob}
            alt={`${reply.first_name} ${reply.last_name}`}
            className="object-cover w-8 h-8 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-gradient-to-br from-emerald-600 to-teal-500">
            {capitalize(reply.first_name?.[0] || "U")}
          </div>
        )}

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">
              {capitalizeWords(`${reply.first_name} ${reply.last_name}`)}
            </span>
            <button
              onClick={() => vote(reply.id)}
              className={`px-2 py-1 text-sm rounded-xl transition ${
                upvotes[reply.id]?.hasVoted
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ↑ {upvotes[reply.id]?.count || 0}
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-800 break-words whitespace-pre-wrap">
            {reply.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
