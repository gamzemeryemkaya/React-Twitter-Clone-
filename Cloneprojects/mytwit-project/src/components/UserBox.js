import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        src="https://media-exp2.licdn.com/dms/image/C5603AQHBpyfxGGVxuw/profile-displayphoto-shrink_200_200/0/1649586709881?e=1663200000&v=beta&t=R0UqXVsTOOGE0aZGdMf3VaLkbwDk7l2pSGfRPO7fspw"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Gamze Meryem Kaya...</span>
        <span className="text-sm text-gray-dark">@gamzemrym</span>
      </div>

      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;