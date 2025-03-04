"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  // const { data: session } = useSession(); // ✅ No more errors

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-[35%] max-w-2xl rounded-[2rem] shadow-lg border border-gray-300 bg-white p-8">
        {/* If Logged In, Show User Info */}
        {session ? (
          <div className="w-full flex flex-col items-center text-black">
            <img
              src={session.user.image}
              alt="User Avatar"
              className="w-16 h-16 rounded-full mb-3"
            />
            <h2 className="text-2xl font-semibold">{session.user.name}</h2>
            <p className="text-gray-500">{session.user.email}</p>
            <button
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-[2rem]"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          /* Login Form */
          <div className="w-full flex flex-col items-center text-black">
            <h2 className="text-3xl font-semibold">Login</h2>
            <p className="mb-4">Login to your account</p>

            {/* Social Login Icons */}
            <div className="flex space-x-4 mb-4">
              <img
                src="/Icons & Icon-gifs/google.png"
                alt="Google"
                className="w-8 h-8 cursor-pointer"
                onClick={() => signIn("google")}
              />
              <img
                src="/Icons & Icon-gifs/facebook icon.png"
                alt="Facebook"
                className="w-8 h-8 cursor-pointer"
                onClick={() => signIn("facebook")}
              />
            </div>

            {/* Login Inputs */}
            <input
              type="email"
              placeholder="Example@email.com"
              className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            />

            <p className="text-sm cursor-pointer">Forgot Password?</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-[2rem] mt-2">
              Login
            </button>

            <p className="mt-4">
              Don't have an account?{" "}
              <a
                href="/Register"
                className="text-green-600 cursor-pointer underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
