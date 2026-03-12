const API_URL = import.meta.env.VITE_API_URL;

// Fetch comments (with has_voted)
export const fetchComments = async (token) => {
  const headers = { Accept: "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}/api/di-comments`, { headers });

  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
};

export const postComment = async (token, content, parent_id) => {
  const res = await fetch(`${API_URL}/api/di-comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content, parent_id }),
  });

  if (!res.ok) throw new Error("Failed to post comment");

  return res.json();
};

// Toggle upvote
export const toggleUpvote = async (token, id) => {
  const res = await fetch(`${API_URL}/api/comments/upvote/toggle/${id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to toggle upvote");
  return res.json(); // returns { upvoted: boolean, upvotes: number }
};

export const editComment = async (token, id, content) => {
  const res = await fetch(`${API_URL}/api/di-comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) throw new Error("Failed to edit comment");

  return res.json();
};
