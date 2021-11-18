import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const NewPostForm = () => {
  const initialData = {
    text: "",
    date: new Date(),
    likes: 0,
  };

  const [postData, setPostData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const changePostData = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };

  const createPost = async (newPost) => {
    await fetch("https://tutuitah.herokuapp.com/tuits/create", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    createPost(postData);
    setPostData(initialData);
  };

  useEffect(() => {
    setIsDisabled(postData.text === "");
  }, [postData.text]);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formContainerText}>We accept your stories!</h2>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className={styles.formContainerForm}
      >
        <div className={styles.formContainerDiv}>
          <label htmlFor="text" className={styles.formContainerLabel}>
            Your post:
          </label>
          <textarea
            className={styles.formContainerInput}
            id="text"
            placeholder="Enter your post"
            value={postData.text}
            onChange={changePostData}
            maxLength="200"
          />
        </div>
        <button
          type="submit"
          className={styles.formContainerButton}
          disabled={isDisabled}
        >
          Tuit me!
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
