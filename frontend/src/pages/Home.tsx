import React, { ChangeEvent, useEffect, useState } from "react";
import { connect, sendMessage } from "../api";

export const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();
  }, []);

  function send() {
    console.log("hello");
    sendMessage("hello");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setMessage(e.target.value);
    }
  }

  return (
    <div className="max-w-7xl mx-auto container">
      <div className="card flex-shrink-0 w-full max-w-sm bg-white">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              value={message}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" onClick={() => send()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
