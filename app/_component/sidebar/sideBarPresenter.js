'use client'

import { useEffect, useState } from 'react';




export const SideBarPresenter = () => {
  const [selectTab, setSelectTab] = useState(false);
  const [companyTab, setCompanyTab] = useState(false);
  const [setting, setSettingTab] = useState(false);
  const [data, setData] = useState(null);
  const [tierData, setTierData] = useState(null);


  const handleSelectedTab = (e) => {
    setSelectTab(e)
  }

  const handleCompanyTab = (e) => {
    setCompanyTab(e)
  }
  const handleSettingTab = (e) => {
    setSettingTab(e)
  }

  return {
    handleSelectedTab,
    selectTab,
    companyTab,
    handleCompanyTab,
    data,
    tierData,
    setting,
    handleSettingTab,
  };
};