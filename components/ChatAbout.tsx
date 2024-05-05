import React from "react";

export default function ChatAbout() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center space-y-5">
        <h1 className="text-3xl font-bold text-[#df4cdf]">Welcome to My Chat</h1>
        <p className="w-64 ml-3">
          You need to be logged in through Github
          to send message
        </p>
      </div>
    </div>
  );
}
