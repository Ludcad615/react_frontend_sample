export const fetchUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then((r) =>
    r.json()
  );
};

export const fetchPosts = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts").then((r) =>
    r.json()
  );
};

export const fetchUserPost = async (id) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  ).then((r) => r.json());
};

export const fetchAUser = async (id) => {
  return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (r) => r.json()
  );
};
// Created a function to fetch users
