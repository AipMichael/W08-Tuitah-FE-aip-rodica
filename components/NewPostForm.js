import { useEffect, useState } from "react";

const NewPostForm = () => {
  const initialData = {
    body: "",
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
    await fetch("https://tutuitah.herokuapp.com/tuits", {
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
  };

  useEffect(() => {
    setIsDisabled(postData.body === "");
  }, [postData.body]);

  return (
    <div className={formContainer}>
      <h2 className={formContainerText}>We accept your stories!</h2>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className={formContainerForm}
      >
        <div className="form-container_body form-line">
          <label htmlFor="body" className={formContainerLabel}>
            Your post:
          </label>
          <textarea
            className={formContainerInput}
            id="body"
            placeholder="Enter your post"
            value={postData.body}
            onChange={changePostData}
            maxLength="200"
          />
        </div>
        <button
          type="submit"
          className={formContainerButton}
          disabled={isDisabled}
        >
          Tuit me!
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
