import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { CiTrash } from "react-icons/ci";

const Home = () => {
  const [postsList, setPostsList] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <main className="min-h-screen py-20 px-10 flex justify-center items-center bg-[yellow]">
      <div className="w-3/4  flex gap-4 flex-wrap">
        {postsList.map((post) => {
          return (
            <div className="w-[32%] h-80 bg-[#f7f7f7] border-2 border-black rounded-lg px-4 py-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <CiTrash className="text-2xl cursor-pointer text-red-600" />
              </div>
              <hr />
              <p className="overflow-hidden">{post.postText}</p>

              <hr />

              <div className="flex justify-between items-center">
                <h3 className="font-bold">@{post.author.name}</h3>
                <p className="text-sm">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
