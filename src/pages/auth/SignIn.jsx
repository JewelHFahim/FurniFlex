import loginImg from "../../assets/login.png";
import google from "../../assets/googleIcon.png";
import apple from "../../assets/appleIcon.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const { logIn, googleSignin } = useContext(UserContext);
  const { handleSubmit, register } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // login with password and email
  const hadnleLogin = (data) => {
    setLoginError("");
    logIn(data.email, data.password)
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
          localStorage.setItem("furniFlex", JSON.stringify(userData));
        }
        toast.success("Signin Successfull!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
        toast.error(loginError);
      });
  };

  // login with google
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
          localStorage.setItem("furniFlex", JSON.stringify(userData));
        }
        toast.success("Signin Successfull!");
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
          <div>
            <h3 className="text-xl lg:text-[32px] font-semibold font-barlow">
              Welcome Back!
            </h3>

            <p className="mt-1 text-sm lg:text-base font-medium text-[#707070]">
              Enter your Credentials to access your account
            </p>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit(hadnleLogin)}
            className="mt-5 flex flex-col gap-4"
          >
            {/* email */}
            <div className="bg-white w-full min-w-[219px] border border-[#DEDEDE] flex flex-col gap-1 rounded-md px-2 py-1">
              <label className="text-xs text-[#707070]">Email address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Enter your email"
                className="w-full text-sm outline-none"
              />
            </div>

            {/* password */}
            <div className="bg-white w-full min-w-[219px] border border-[#DEDEDE] flex flex-col gap-1 rounded-md px-2 py-1">
              <label className="text-xs text-[#707070]">Password</label>
              <div className="flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password Address is required",
                  })}
                  placeholder="Enter your password"
                  className=" w-full text-sm outline-none"
                />

                <div
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible size={20} color="#707070" />
                  ) : (
                    <AiFillEye size={20} color="#707070" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to="" className="text-sm text-primary font-medium">
                Forget Password?
              </Link>
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
            <button className="w-full py-3 text-[17px] font-semibold bg-black hover:bg-opacity-[90%] transition-all ease-in-out text-white rounded-md">
              Sign In
            </button>
          </form>

          {/* devider */}
          <div className="py-4 flex items-center text-sm before:flex-1 before:border-t before:border-gray-200 before:me-4 after:flex-1 after:border-t after:border-gray-200 after:ms-4">
            or
          </div>

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

          <div className="text-sm font-medium text-center mt-5 flex justify-center items-center gap-1">
            Have an accont?
            <Link to="/signup" className="text-primary hover:underline">
              Sign Up
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

export default SignIn;
