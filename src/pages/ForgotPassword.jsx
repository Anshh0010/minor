import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import { Link } from "react-router-dom";
import {} from "../firebase.config";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "motion/react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success("Password recovery mail sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Could not send Password recovery mail");
    }
  };

  return (
    <>
      <div class="background z-[-1]">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="absolute top-0 w-full text-4xl font-bold text-center text-white ">
        Career Guidance
      </h1>
      <motion.div
        className="absolute bg-white rounded-full size-10 top-5 left-5 "
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          duration: 0.1,
          type: "spring",
        }}
      >
        <Link
          to={PathConstants.ABOUT}
          className="flex items-center justify-center w-full h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="back-button"
          >
            <path d="M19 12H5"></path>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
      </motion.div>
      <div className="w-full h-full ">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <div className="w-2/3 max-w-lg p-5 border-[1px] border-black glass  drop-shadow-lg">
            {/* {" "} */}
            {/* LEFT SIDE BEGIN ============== */}
            <div className="my-10 text-center">
              <h2 className="text-3xl font-extrabold text-base-content">
                Password recovery
              </h2>
            </div>

            <p className="my-3 text-center opacity-50">
              Enter you email account
            </p>
            <form onSubmit={submitData}>
              <div className="flex flex-col items-center gap-3">
                <label className="flex items-center gap-2 input input-bordered">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    className="grow"
                    placeholder="Email"
                    onChange={onChange}
                    id="email"
                  />
                </label>

                <div>
                  <button type="submit" className="w-24 mt-6 btn-accent btn">
                    Submit
                  </button>
                </div>
                <div>
                  <p>
                    <span className="opacity-50">Back to </span>
                    <Link
                      className="text-black underline opacity-50 hover:opacity-80"
                      to={PathConstants.LOGIN}
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
