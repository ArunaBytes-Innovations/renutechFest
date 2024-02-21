import React from "react";
import { Link } from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md"; //imported icon from react icons

import Footer from "../components/Sub_compo/Footer.jsx"; //imported the footer from sub-component in component folder

import "./styles/Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container flex flex-col items-center min-h-screen bg-cover bg-center h-screen">
        <form
          className="login-form mt-24 md:mt-36 backdrop-filter backdrop-blur-sm backdrop-brightness-75 py-8 w-80 md:w-96 text-white rounded-2xl "
          action="#"
        >
          <h1 className="text-3xl flex justify-center uppercase tracking-wide">
            Login
          </h1>
          <div className="login-input  h-18 mt-4 ">
            {/*login page Email Input*/}
            <div className="relative px-8">
              <input
                type="email"
                id="user"
                className="peer my-4 bg-inherit w-full h-8 focus:outline-none pl-2 focus:border-gray-400 placeholder:pl-2 placeholder-transparent border-b-2 "
                placeholder="Email"
                required
              />
              <label
                htmlFor="user"
                className=" px-10 absolute left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                                  peer-placeholder-shown:text-base
                                                peer-placeholder-shown:text-gray-400
                                                  peer-placeholder-shown:top-6
                                                  peer-focus:-top-px
                                                peer-focus:text-white
                                                  peer-focus:text-sm"
              >
                Email
              </label>
              <i className=" absolute top-1/2 right-10 translate-y-[-50%]">
                <MdEmail />
              </i>
            </div>

            {/*login page password Input*/}
            <div className="relative px-8">
              <input
                type="password"
                id="pass"
                className="peer my-4 bg-inherit w-full h-8 focus:outline-none pl-2  focus:border-gray-400 placeholder:pl-2 placeholder-transparent border-b-2"
                placeholder="Password"
                required
              />
              <label
                htmlFor="pass"
                className="px-10 absolute left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                                  peer-placeholder-shown:text-base
                                                peer-placeholder-shown:text-gray-400
                                                  peer-placeholder-shown:top-6
                                                  peer-focus:-top-px
                                                peer-focus:text-white
                                                  peer-focus:text-sm"
              >
                Password
              </label>
              <i className=" absolute top-1/2 right-10 translate-y-[-50%]">
                <MdLock />
              </i>
            </div>
          </div>

          {/* After Input section */}
          <div className="reg-forg flex justify-between px-8 py-4">
            <Link to="/register" className="hover:underline focus:text-sm">
              Register now!
            </Link>
            <Link to="#" className=" text-cyan-400 hover:underline text-sm ">
              Forgot Password?
            </Link>
          </div>

          <div className="login-subnit flex flex-col items-center">
            {/* Form submit */}
            <button
              className="bg-white rounded-md text-black w-4/5 h-8 hover:shadow-xl focus:text-sm"
              type="submit"
            >
              SIgn In
            </button>

            {/* Terms of services and privacy and policy section */}
            <p className="mt-10 ">By clicking Sign In, you agree to </p>
            <p className="">
              our{" "}
              <Link to="#" className="hover:underline font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="hover:underline font-medium">
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>

        {/* Added footer  */}
        <div className="footer px-12 md:px-24 w-full mt-auto backdrop-filter backdrop-blur-sm backdrop-brightness-75">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
