import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body flex flex-col items-center">
          <div className="w-full flex justify-center">
            <h2 className="card-title text-4xl ">Login</h2>
          </div>
          <div className="w-full">
            <input
              autoComplete="one-time-code"
              type="text"
              placeholder="User id...."
              className="input text-white input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="w-full">
            <input
              autoComplete="one-time-code"
              type="password"
              placeholder="Password..."
              className="input text-white input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="card-actions w-full mt-4">
            <button className="btn btn-warning text-2xl font-bold  w-full">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
