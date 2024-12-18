import { useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../assets/svg/googleIcon.svg";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import PathConstants from "../routes/PathConstants";

function OAuth() {
  const navigate = useNavigate();

  const onGoogleIconClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          role: "user",
          timestamp: serverTimestamp(),
        });
      }

      const userData = docSnap.exists() ? docSnap.data() : { role: "user" };

      // Navigate based on the user's role
      if (userData.role === "admin") {
        navigate(PathConstants.ADMIN); // Navigate to admin-specific route
      } else {
        navigate(PathConstants.USER); // Navigate to user-specific route
      }
    } catch (error) {
      toast.error("Can't Login with Google");
      console.log(error);
    }
  };

  return (
    <button
      className="w-12 h-12 p-3 bg-white border-blue-600 rounded-full shadow-md hover:bg-gray-50"
      onClick={onGoogleIconClick}
    >
      <img src={googleIcon} alt="google" className="hover:" />
    </button>
  );
}
export default OAuth;
