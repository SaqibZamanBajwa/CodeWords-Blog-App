import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ login }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");
  const createPost = async (e) => {
    e.preventDefault();
    // the addDoc function takes two parameters
    // first is the reference of the collection of our firestore db,
    // second is the data that we want to add in the collection.
    // i.e: each collection will have a title, postText and an author.
    // the author will've two things (name and the id)
    // we can get the current user name and id using the "auth.currenUser.displayName" and "auth.currentUser.uid" methods respectively.

    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <form className="bg-[#f39e00] rounded-xl w-1/3 text-white p-4 flex flex-col gap-2">
        <h3 className="text-center text-[26px] line font-bold">
          Create A Post
        </h3>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="">
            Title:
          </label>
          <input
            className="text-black p-2 rounded-sm"
            type="text"
            name="title"
            id="userTitle"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              console.log(title);
            }}
            placeholder="Title..."
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="">
            Post:
          </label>
          <textarea
            className="text-black p-2 rounded-sm"
            name="postText"
            id="userPostText"
            value={postText}
            onChange={(event) => {
              setPostText(event.target.value);
              console.log(postText);
            }}
            cols="30"
            rows="10"
            placeholder="Post..."
          ></textarea>
        </div>
        <button
          onClick={createPost}
          className="w-[100%] bg-white text-black py-1 rounded-sm"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
