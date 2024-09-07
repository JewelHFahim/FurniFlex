import loginImg from "../../assets/login.png";
import google from "../../assets/googleIcon.png";
import apple from "../../assets/appleIcon.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, googleSignin } = useContext(UserContext);
  const [signupError, setSignupError] = useState("");
  const { handleSubmit, register } = useForm();
  const googleProvider = new GoogleAuthProvider();

  // Email & password Sign Up
  const hadnleSignUp = (data) => {
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          const userData = {
            userName: user?.displayName,
            userEmail: user?.email,
            userImag: user?.photoURL,
            token: user?.stsTokenManager?.accessToken,
          };
          console.log(userData);
          localStorage.setItem("furniFlex", JSON.stringify(userData));
        }
        toast.success("Signup Successfull");
        navigate("/");
      })
      .catch((error) => {
        setSignupError(error.message);
        toast.error(`${signupError}`);
      });
  };

  // Google Sign Up
  const handleGoogle = () => {
    googleSignin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          const userData = {
            userName: user?.displayName,
            userEmail: user?.email,
            userImag: user?.photoURL,
            token: user?.stsTokenManager?.accessToken,
          };
          console.log(userData);
          localStorage.setItem("furniFlex", JSON.stringify(userData));
        }
        toast.success("Login Success!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full flex flex-col lg:flex-row h-screen font-barlow">
      {/* text */}
      <div className="w-full lg:w-[53%] flex justify-center items-center p-4">
        <div className="w-full lg:w-[500px] mx-auto bg-[#fafafa] rounded-md p-5">
          {/* intro */}
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-semibold font-barlow">
              Welcome To
            </h3>
            <h1 className="text-[30px] lg:text-[40px] font-bold ">
              Furni<span className="text-primary">Flex</span>
            </h1>
            <p className="text-sm lg:text-base font-medium text-[#707070]">
              Signup for purchase your desire productss
            </p>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit(hadnleSignUp)}
            className="mt-5 flex flex-col gap-4"
          >
            {/* name */}
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="bg-white w-full min-w-[219px] border border-[#DEDEDE] flex flex-col gap-1 rounded-md px-2 py-1">
                <label className="text-xs text-[#707070]">
                  First name (optional)
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="Jordan"
                  className="text-sm outline-none"
                />
              </div>
              <div className="bg-white w-full min-w-[219px] border border-[#DEDEDE] flex flex-col gap-1 rounded-md px-2 py-1">
                <label className="text-xs text-[#707070]">
                  Last name (optional)
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="Ken"
                  className="text-sm outline-none"
                />
              </div>
            </div>

            {/* email */}
            <div className="bg-white w-full min-w-[219px] border border-[#DEDEDE] flex flex-col gap-1 rounded-md px-2 py-1">
              <label className="text-xs text-[#707070]">Email address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="jordan@email.com"
                className="text-sm outline-none"
              />
            </div>

            {/* password */}
            <div className="bg-white w-full min-w-[219px] border border-[#DEDEDE] flex flex-col gap-1 rounded-md px-2 py-1">
              <label className="text-xs text-[#707070]">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password Address is required",
                })}
                placeholder="********"
                className="text-sm outline-none"
              />
            </div>

            {/* checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-sm font-medium">
                I agree to the{" "}
                <Link to="/" className="underline">
                  Terms & Policy
                </Link>
              </p>
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="w-full py-3 text-[17px] font-semibold bg-black hover:bg-opacity-[90%] transition-all ease-in-out text-white rounded-md"
            >
              Signup
            </button>
          </form>

          {/* devider */}
          <div className="py-4 flex items-center text-sm before:flex-1 before:border-t before:border-gray-200 before:me-4 after:flex-1 after:border-t after:border-gray-200 after:ms-4">
            or
          </div>
          {/* google and apple login */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#DEDEDE] rounded-md hover:bg-gray-100 transition-all ease-in-out"
              onClick={handleGoogle}
            >
              <img
                src={google}
                alt="google icon"
                className="w-[24px] h-[24px]"
              />
              <p>Sign in with Google</p>
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-3 border border-[#DEDEDE] rounded-md hover:bg-gray-100 transition-all ease-in-out">
              <img
                src={apple}
                alt="google icon"
                className="w-[24px] h-[24px]"
              />
              <p>Sign in with Apple</p>
            </button>
          </div>

          <div className="text-sm font-medium text-center mt-5 flex items-center justify-center gap-1">
            Have an accont?
            <Link to="/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* image */}
      <div
        className="lg:w-[47%] hidden w-full h-full bg-cover lg:flex bg-no-repeat"
        style={{
          backgroundImage: `URL(${loginImg})`,
          backgroundPosition: "center",
        }}
      >
        <div className="w-[450px] mx-auto min-h-max text-center flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-[89px] h-[85px] cursor-pointer"
          />
          <h1 className="text-[30px] lg:text-[40px] font-bold text-white">
            Furni<span className="text-primary">Flex</span>
          </h1>
          <p className="text-base font-medium text-[#C8C4C4]">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
