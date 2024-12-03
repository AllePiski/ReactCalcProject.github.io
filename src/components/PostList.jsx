import Post from "./Post";
import classes from "./Post.module.css";
import NewPost from "./NewPost";

export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author={"qewr"} body={"qwer"} />
        <Post author={"yy"} body={"qwyyyer"} />
      </ul>
    </>
  );
}
