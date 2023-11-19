import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://posts.com/posts/create", { title });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form d-flex flex-column gap-2 w-25">
        <div className="d-flex flex-column">
          <label htmlFor="comment" className="">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="comment"
            type="text"
          />
        </div>
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
}
