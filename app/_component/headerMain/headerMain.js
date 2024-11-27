"use client"

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";

const HeaderMain = () => {
    const [openProfile , setOpenProfile] = useState(false)
    return (
        <div className={"flex flex-row-reverse bg-gray-600  h-[80px]  items-center px-5 relative"}>
            <button className={"flex items-center flex-row-reverse"} onClick={() => setOpenProfile(!openProfile)}>
                <div  className={"relative h-[50px] w-[50px] overflow-hidden  flex items-center"}>
                    <Image
                        fill
                        alt='item'
                        src={'/img/avatar.jpg'}
                    />
                </div>
                <div className={"text-white flex items-center px-5"}>
                    full name
                </div>
            </button>

            <div className={`${!openProfile ? 'hidden' : "flex"} absolute right-5 top-20 w-[200px] h-50 bg-black text-white rounded-xs z-20 px-4 py-2`}>
                <ul className={"flex flex-col cursor-pointer"}>
                    <Link href={"/auth/login"}>
                        <li>
                            Log Out
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default HeaderMain;
