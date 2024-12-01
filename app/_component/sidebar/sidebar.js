"use client"

import React from 'react'
import Image from 'next/image'
import {
  AccountIcon, ApiIcon,
  ArchiveIcon,
  ArrowIcon,
  BadgeIcon, BronzeOneIcon, ChannelIcon,
  CrownIcon,
  DashboardIcon, FreindsCode, GoldIcon,
  MenuIcon, NotificationRingIcon, ProfileCircleIcon, ReceiptIcon, ReferralCode,
  ReferralIcon, ReportCode, SettingIcon, SilverIcon,
  StrategyIcon, TagIcon, TimerIcon,
} from '../icons/icons'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import {SideBarPresenter} from "./sideBarPresenter";



export const Sidebar = () => {
  const {selectTab, handleSelectedTab , companyTab , handleCompanyTab , setting , handleSettingTab} = SideBarPresenter()
  const searchParams = useSearchParams();


  return (
    <div className={"w-[284px] bg-black fixed h-[100vh] top-0"}>
      <div className={"px-6 py-4  "}>
          <div className={"flex mb-5"}>
              <div className={"relative h-[30px] w-[30px] overflow-hidden  flex items-center rounded-full"}>
                  <Image
                      fill
                      alt='item'
                      src={'/img/avatar.jpg'}
                  />
              </div>
              <div className={"text-white flex items-center px-5"}>
                  full name
              </div>
          </div>
        <span className={"text-white text-xs"}>Main Menu</span>
        <div className={"flex items-center py-3"}>
          <span className={"pr-3 flex items-center"}>
            <DashboardIcon color={"#fff"}/>
          </span>
          <div className={"text-gray-400 flex items-center mt-[3px]"}>Dashboard</div>
        </div>
        <div className={"flex flex-col pt-3 pb-2"}>
          <button className={"flex items-center justify-between w-full"} onClick={() => handleCompanyTab(!companyTab)}>
            <div className={"flex items-center justify-between w-full"}>
              <div className={"flex items-center"}>
                     <span className={"pr-3 flex items-center"}>
                        <TagIcon color={"#fff"}/>
                     </span>
                <div className={` text-gray-400 flex items-center mt-[3px]`}>Company</div>
              </div>
              <span className={` flex items-center ${companyTab ? "rotate-0" :"rotate-90"}`}>
                  <ArrowIcon/>
                </span>
            </div>
          </button>
          <div style={{maxHeight:companyTab ? "1000px" : "0px"}} className={`pl-8  overflow-hidden`}>
              <ul>
                  <li className={"text-white flex items-center pt-3  text-sm"}>
                      <Link href={"/dashboard/company/all"} className={"flex items-center justify-between w-full"} >
                          <div className={"flex items-center justify-between w-full"}>
                              <div className={"flex items-center"}>
                                  <div className={` text-gray-400 flex items-center mt-[3px] ml-2`}>All</div>
                              </div>
                          </div>
                      </Link>
                  </li>
                  <li className={"text-white flex items-center pt-3  text-sm"}>
                      <Link href={"/dashboard/company/new"} className={"flex items-center justify-between w-full"}>
                          <div className={"flex items-center justify-between w-full"}>
                              <div className={"flex items-center"}>
                                  <div className={` text-gray-400 flex items-center mt-[3px] ml-2`}>New</div>
                              </div>
                          </div>
                      </Link>
                  </li>
              </ul>
          </div>
        </div>
        <div className={"flex flex-col pt-3 pb-2"}>
          <button className={"flex items-center justify-between w-full"} onClick={() => handleSelectedTab(!selectTab)}>
            <div className={"flex items-center justify-between w-full"}>
              <div className={"flex items-center"}>
                     <span className={"pr-3 flex items-center"}>
                        <TagIcon color={"#fff"}/>
                     </span>
                <div className={` text-gray-400 flex items-center mt-[3px]`}>Property</div>
              </div>
              <span className={` flex items-center ${selectTab ? "rotate-0" :"rotate-90"}`}>
                  <ArrowIcon/>
                </span>
            </div>
          </button>
          <div style={{maxHeight:selectTab ? "1000px" : "0px"}} className={`pl-8  overflow-hidden`}>
              <ul>
                  <li className={"text-white flex items-center pt-3  text-sm"}>
                      <Link href={"/dashboard/property/all"} className={"flex items-center justify-between w-full"} >
                          <div className={"flex items-center justify-between w-full"}>
                              <div className={"flex items-center"}>
                                  <div className={` text-gray-400 flex items-center mt-[3px] ml-2`}>All</div>
                              </div>
                          </div>
                      </Link>
                  </li>
                  <li className={"text-white flex items-center pt-3  text-sm"}>
                      <Link href={"/dashboard/property/new"} className={"flex items-center justify-between w-full"}>
                          <div className={"flex items-center justify-between w-full"}>
                              <div className={"flex items-center"}>
                                  <div className={` text-gray-400 flex items-center mt-[3px] ml-2`}>New</div>
                              </div>
                          </div>
                      </Link>
                  </li>
              </ul>
          </div>
        </div>
        <div className={"border-b border-dashed border-gray-800 h-[1px] opacity-40"}/>
      </div>


      <div className={"px-6 pb-4  "}>
        <span className={"text-white text-xs"}>OPTIONS</span>
          <div className={"flex flex-col pt-3 pb-2"}>
              <button className={"flex items-center justify-between w-full"} onClick={() => handleSettingTab(!setting)}>
                  <div className={"flex items-center justify-between w-full"}>
                      <div className={"flex items-center"}>
                     <span className={"pr-3 flex items-center"}>
                        <SettingIcon color={"#fff"}/>
                     </span>
                          <div className={` text-gray-400 flex items-center mt-[3px]`}>Setting</div>
                      </div>
                      <span className={` flex items-center ${setting ? "rotate-0" :"rotate-90"}`}>
                  <ArrowIcon/>
                </span>
                  </div>
              </button>
              <div style={{maxHeight:setting ? "1000px" : "0px"}} className={`pl-8  overflow-hidden`}>
                  <ul>
                      <li className={"text-white flex items-center pt-3  text-sm"}>
                          <Link href={"/dashboard/company/all"} className={"flex items-center justify-between w-full"} >
                              <div className={"flex items-center justify-between w-full"}>
                                  <div className={"flex items-center"}>
                                      <div className={` text-gray-400 flex items-center mt-[3px] ml-2`}>Edit</div>
                                  </div>
                              </div>
                          </Link>
                      </li>
                      <li className={"text-white flex items-center pt-3  text-sm"}>
                          <Link href={"/dashboard/company/new"} className={"flex items-center justify-between w-full"}>
                              <div className={"flex items-center justify-between w-full"}>
                                  <div className={"flex items-center"}>
                                      <div className={` text-gray-400 flex items-center mt-[3px] ml-2`}>New</div>
                                  </div>
                              </div>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

