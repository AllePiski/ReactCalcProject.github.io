import Post from "./Post";
import classes from "./Post.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const AuthorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={AuthorChangeHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}
