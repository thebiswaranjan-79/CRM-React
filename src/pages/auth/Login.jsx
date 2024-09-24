import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title text-4xl text-blue-950">Login</h2>
          <input
            type="text"
            placeholder="User id..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Password ...."
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="card-actions justify-end">
          <button className="btn btn-warning w-full text-slate-900 font-extrabold text-2xl">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
