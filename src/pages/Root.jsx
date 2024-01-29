import { signOut } from "firebase/auth";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Root = ({ login, setLogin }) => {
  const navigate = useNavigate();

  const signUserOut = (e) => {
    e.preventDefault();
    signOut(auth).then((result) => {
      localStorage.clear();
      setLogin(false);
      navigate("/login");
    });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[orange] px-10 h-[10vh] text-xl font-medium">
        <Link to="/">CodeWords</Link>
        <nav className="flex justify-between items-center gap-14">
          <Link to="/">Home</Link>
          {!login ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/createpost">Create Post</Link>
              <button onClick={signUserOut}>Logout</button>
            </>
          )}
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
