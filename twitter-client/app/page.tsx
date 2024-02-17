import Image from "next/image";
import React from "react";
import { BsTwitterX,BsCardList,BsPerson } from "react-icons/bs";
import { GoHome,GoSearch,GoBell,GoMail  } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci";  


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
    icon: <CiCircleMore />,
  },
]

export default function Home() {
  return (
     <>
     <div className="font-serif"></div>
     <div className="grid grid-cols-12 h-screen w-screen px-56">
      
      <div className="col-span-3 border-r-1px  border-r-slate-500 ">
        <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-3 
        transition-all cursor-pointer w-fit ">
      <BsTwitterX />
        </div>
        <div className="mt-4 text-2xl cursor-pointer pr-4">
          <ul>
            {sidebarMenuItems.map((item)=>(
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit mt-2" key={item.title} >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
              </li>
            ))}
          </ul> 
          <div className="mt-5 px-3">
          <button className="font-semibold bg-[#1d9bf0] p-4 text-lg rounded-full w-full  hover:bg-[#50a9e4]">Post</button>
          </div>
          </div>
      </div>
        <div className="col-span-6 border-r-2 border-l-2 border-slate-400"></div>
        <div className="col-span-3"></div>
      </div>
     </>
  );
}
