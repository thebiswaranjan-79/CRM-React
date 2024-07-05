import React from "react";

function Signup() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body flex flex-col items-center">
          <div className="w-full flex justify-center">
            <h2 className="card-title text-4xl ">SignUp</h2>
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
              type="email"
              placeholder="Email..."
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

          <details className="dropdown mb-4 w-full">
            <summary className="btn">User Type</summary>
            <ul className="menu text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a>Customer</a>
              </li>
              <li>
                <a>Engineer</a>
              </li>
            </ul>
          </details>
          <div className="card-actions w-full mt-4">
            <button className="btn btn-warning text-2xl font-bold  w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
