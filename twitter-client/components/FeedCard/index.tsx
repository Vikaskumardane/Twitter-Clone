import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgLoadbarSound } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";

const FeedCard: React.FC = () => {
  return (
    <div className=" p-5 hover:bg-slate-900 transition-all cursor-pointer border-b-[1px] border-gray-600" >
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/90561371?v=4"
            alt="profile"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 ">
          <h5>Vikas Dane</h5>
          
          <p>
            All the AI tools are enabling the Solopreneurs. Even small teams or
            individuals can make a lot of difference in the world now.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%] ">
          <BiMessageRounded />
          <div><FaRetweet /></div>
          <div><IoIosHeartEmpty /></div>
          <div><CgLoadbarSound /></div>
          <div><CiBookmark /></div>
          <div><FiShare /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
