import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPost, fetchAUser } from "../Utils/fetch";
import PostWall from "./PostWall";

const UserPostPage = () => {
  const { id } = useParams();
  const [userPostData, setUserPostData] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchUserPost(id).then((data) => setUserPostData(data));
    fetchAUser(id).then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <PostWall postData={userPostData} usersName={user.name} />
    </div>
  );
};

export default UserPostPage;
