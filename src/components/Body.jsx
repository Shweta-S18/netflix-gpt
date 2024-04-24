import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { useEffect } from "react";
const Body = () => {
    const dispatch = useDispatch();
   
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element : <Browse/>
        }
    ]);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          // Sign In
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
               
            } else {
              // signed out
              dispatch(removeUser());
            }
          });
    },[]) 

    return(
    <div>
       <RouterProvider router={appRouter} />
    </div>
    )
}
export default Body