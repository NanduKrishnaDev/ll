import React from "react";
import { comments } from "../comments";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile5 from "../assets/profile5.png";
import profile4 from "../assets/profile4.png";

const profileRandom = () => {
  const number = Math.floor(Math.random() * 5) + 1;
  switch (number) {
    case 1:
      return profile1;
    case 2:
      return profile2;
    case 3:
      return profile3;
    case 4:
      return profile4;
    case 5:
      return profile5;
  }
};

const Comment = ({ comms }) => {
  return (
    <>
      {comms.map((comm) => (
        <div className="ml-10 w-[800px] pl-3 my-7 border-l border-slate-300">
          <div className="flex flex-row align-middle">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={profileRandom()}
            />
            <div className="ml-4 text-[16px] text-slate-600 font-semibold">
              {comm.name}
            </div>
          </div>
          <div className="mt-2 ml-1 text-[16px] text-slate-600">
            {comm.comment}
          </div>
          <Comment comms={comm.nested} />
        </div>
      ))}
    </>
  );
};

const Comments = () => {
  return (
    <div className="py-10 pt-20 px-[300px]">
      <Comment comms={comments} />
    </div>
  );
};

export default Comments;
