import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";
import gamePic from "../assets/game.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile5 from "../assets/profile5.png";
import profile4 from "../assets/profile4.png";

const profileRandom = (n) => {
  const number = ((n * 1) % 5) + 1;
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

const Comment = ({ comment }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-row mb-3 ml-3 items-center pb-2 border-b ${
        theme ? "border-slate-200" : "border-slate-800"
      }`}
    >
      <div className="mr-4">
        <img
          src={profileRandom(comment.id)}
          className="h-10 w-10 rounded-full mb-2"
        />
      </div>
      <div>
        <div
          className={`font-semibold text-[14px] ${
            theme ? "text-slate-600" : "text-slate-200"
          } `}
        >
          {comment.user.username}
        </div>
        <div
          className={`text-[14px] ${
            theme ? "text-slate-900" : "text-slate-100"
          }`}
        >
          {comment.body}
        </div>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [skip, setSkip] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const x = setInterval(() => {
      setSkip((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  useEffect(() => {
    const callComment = async () => {
      console.log(comments);
      const data = await fetch(
        `https://dummyjson.com/comments?limit=10&skip=${
          ((skip % 33) + 1) * 10
        }&select=body,postId`
      );

      const jsonData = await data.json();

      let sliced = comments;

      if (comments.length > 90)
        sliced = comments.slice(10, comments.length + 1);

      console.log(sliced);

      setComments([...sliced, ...jsonData.comments]);
    };
    callComment();
  }, [skip]);

  return (
    <div className="py-10 pt-20 flex flex-row justify-evenly">
      <img src={gamePic} className="w-[60vw] h-[40rem]"></img>
      <div
        className={`border  ${
          theme ? "border-slate-300" : "border-slate-700"
        } w-[30vw] h-[40rem] overflow-y-scroll no-scrollbar`}
      >
        {/* <div className=""> */}
        {comments.length !== 0 &&
          comments.map((comment) => <Comment comment={comment} />)}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LiveChat;
