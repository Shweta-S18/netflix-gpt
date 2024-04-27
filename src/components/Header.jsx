import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
  
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Sign In
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
           navigate("/browse")
        } else {
          // signed out
          dispatch(removeUser());
          navigate("/")
        }
      });

      //unscribe when component unmounts
      return () => unsubscribe();
},[]) 


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="w-44"
        src={LOGO}
        alt="netflix_logo"
      />

    {user && (
      <div className="flex items-center gap-2">
       <img src={user?.photoURL} alt="user-img" className="w-10 h-10" />
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>
      ) }
    </div>
  );
};

export default Header;
