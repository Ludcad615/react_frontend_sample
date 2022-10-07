import Post from "./Post";

const PostWall = ({ postData, ...otherProps }) => {
  const { usersName } = otherProps;
  return (
    <div>
      {usersName ? <h1>{usersName}</h1> : null}
      {postData.map((data) => {
        const { id, body, title, name } = data;
        return (
          <Post
            key={id}
            id={id}
            name={name ? name : null}
            body={body}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default PostWall;
