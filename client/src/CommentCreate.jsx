import React, { useState } from 'react';
import axios from 'axios';

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='d-flex flex-column gap-2'>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
