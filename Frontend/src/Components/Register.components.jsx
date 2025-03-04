"use client";

export default function Register() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-[35%] max-w-2xl rounded-[2rem] shadow-lg border border-gray-300 bg-white p-8">
        {/* Signup Form */}
        <div className="w-full flex flex-col items-center text-black">
          <h2 className="text-3xl font-semibold">Create an Account</h2>
          <p className="mb-4">Create your account</p>

          {/* Social Signup Icons */}
          <div className="flex space-x-4 mb-4">
            <img
              src="/Icons & Icon-gifs/google.png"
              alt="Google"
              className="w-8 h-8 cursor-pointer"
            />
            <img
              src="/Icons & Icon-gifs/facebook icon.png"
              alt="Facebook"
              className="w-8 h-8 cursor-pointer"
            />
            <img
              src="/Icons & Icon-gifs/instagram.png"
              alt="Instagram"
              className="w-8 h-8 cursor-pointer"
            />
          </div>

          {/* Signup Inputs */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
          />

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
            Sign Up
          </button>

          <p className="mt-4">
            Already have an account?{" "}
            <a
              href="/Login"
              className="text-green-600 cursor-pointer underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
