import Image from "next/image";
import React from "react";
import { BsTwitterX,BsCardList,BsPerson } from "react-icons/bs";
import { GoHome,GoSearch,GoBell,GoMail  } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci"; 
import FeedCard from "@/components/FeedCard";


/********This is the Left Nav Bar section */
//Left nav icons
interface TwitterSidebarButton{
  title: String;
  icon: React.ReactNode;
}

//Left nav icons array object
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title:'Home',
    icon: <GoHome />,
  },
  {
    title:'Expoler',
    icon: <GoSearch />,
  },
  {
    title:'Notification',
    icon: <GoBell />,
  },
  {
    title:'Messages',
    icon: <GoMail />,
  },
  {
    title:'Lists',
    icon: <BsCardList />,
  },
  {
    title:'Profile',
    icon: <BsPerson />,
  },
  {
    title:'More',
    icon: < CiCircleMore />,
  },
]

export default function Home() {
  return (
    
     <div>
     <div className="flex flex-row-10 h-screen w-screen px-56 ">
      
      <div className="flex-row-1 pt-8 -ml-14">
        <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-3 
        transition-all cursor-pointer  ">
      <BsTwitterX />
        </div>
        <div className="mt-4 text-xl cursor-pointer pr-4">
          <ul>
            {sidebarMenuItems.map((item)=>(
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit mt-2" >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
              </li>
            ))}
          </ul> 
          <div className="mt-5 px-3">
          <button className="font-semibold bg-[#1d9bf0] py-2 px-4  text-lg rounded-full w-full  hover:bg-[#50a9e4]">Post</button>
          </div>
          </div>
      </div>
        <div className="flex-row-4 border-l-[1px]  border-r-[1px]  border-gray-600 h-fit "> 
        <div >

          <FeedCard /> 
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        </div>
        <div className="flex-row-span-3"></div>
      </div>
      </div>
     
  );
}
/*******This is the end of the left side nav bar section */

