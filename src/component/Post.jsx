import React from "react";

const Post = ({ email, body }) => {
  return (
    <div className=" md:h-auto bg-blue-50 shadow-md rounded-lg p-6 m-4">
      <div className="mb-4">
        <p className="text-gray-700 font-semibold">Email:</p>
        <p className="text-blue-600">{email}</p>
      </div>
      <div className="md:h-auto" > 
        <p className="text-gray-700 font-semibold">Body:</p>
        <p className="text-gray-600">{body}</p>
      </div>
    </div>
  );
};

export default Post;
