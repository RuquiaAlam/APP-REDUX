import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    //prevents refreshing the page
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // console.log(data);
      setLoading(false);
        setError(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    
    } catch (error) {
      setLoading(false);

      setError(true);
    }
    navigate("/")
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase disabled:opacity-80 hover:opacity-95"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 m-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-600">Sign Up </span>
        </Link>
      </div>
      <p className="text-red-700 m-5 ">{error && "Something went wrong!"}</p>
    </div>
  );
}
