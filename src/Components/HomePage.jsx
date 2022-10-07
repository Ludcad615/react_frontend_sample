import { useState, useEffect } from "react";
import { fetchPosts, fetchUsers } from "../Utils/fetch";
import mergePostDataToUserData from "../Utils/merge";
import PostWall from "./PostWall";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
    fetchPosts().then((data) => setPosts(data));
  }, []);

  const mergedData = mergePostDataToUserData(users, posts);

  return (
    <div>
      <PostWall postData={mergedData} />
    </div>
  );
};

export default HomePage;
