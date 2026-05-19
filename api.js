const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (userId) => {
  const url = userId
    ? `${API_URL}?userId=${userId}`
    : API_URL;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const createPost = async (post) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export const updatePost = async (post) => {
  const response = await fetch(
    `${API_URL}/${post.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }
  );

  return response.json();
};

export const patchPost = async ({
  id,
  title,
}) => {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    }
  );

  return response.json();
};

export const deletePost = async (id) => {
  await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  return id;
};