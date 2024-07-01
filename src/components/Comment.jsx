import React, { useState } from 'react';

const Comment = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto p-4 bg-white shadow-md rounded-md md:w-[100%]">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className=" lg:w-[560px] w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e2a30] focus:border-[#5e2a30]"
        placeholder="Write your comment here..."
        required
      ></textarea>
      <div >
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-[#5e2a30] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e2a30] focus:ring-opacity-50"
      >
        Submit comment
      </button>
      </div>
    </form>
  );
};

export default Comment;