import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isVisible={isModalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
