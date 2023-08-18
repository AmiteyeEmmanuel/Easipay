import React, { useState } from "react";
import { Link} from "react-router-dom";

import ImageLight from "../assets/img/Home.jpg";
import ImageDark from "../assets/img/Home.jpg";
import { Label, Input} from "@windmill/react-ui";

function Login() {
  const [loading, setLoading] = useState(false);


  const  initiateLogin  = () => {
    setLoading(true);
    }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 bg-white">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-off-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                />
              </Label>

              <button
                type="submit"
                className="mt-4 text-white bg-green w-full px-2 py-2 rounded-full"
                block
                onClick={() => initiateLogin()}
              >
                {!loading ? "Log in" : "Loading..."}
              </button>

              <hr className="my-8" />


              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-green dark:text-green hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-green dark:text-green hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
