import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
const Login = ({ setLogin }) => {
  const navigate = useNavigate();

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((e) => {
      localStorage.setItem("login", true);
      setLogin(true);
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form className="w-fit flex flex-col items-center border-solid border-2 p-10">
        <h1 className="mt-10 text-xl">Signin with Google to continue..</h1>
        <button
          onClick={signInWithGoogle}
          className="bg-[orange] px-4 py-2 rounded-lg mt-4"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
