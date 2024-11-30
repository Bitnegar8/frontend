'use client'

import React, { useEffect, useState } from 'react';
import CustomInput from "../../../../_component/components/UI/customInput/customInput";
import CustomSelect from "../../../../_component/components/UI/customSelect/customSelect";
import CustomButton from "../../../../_component/components/UI/customButton/customButton";
import {CONST} from "../../../../_core/const";
import OffTable from "../../../../_component/components/table/off-table/off-table";

const Page = () => {
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [developerName , setDeveloperName] = useState(false)
    const [property , setProperty] = useState(0)
    let list = [
        {value:"DAMAC" , name:"DAMAC" , id:1},
        {value:"DANUBE" , name:'DANUBE' , id:2},
    ]

    const handleForm = ({ name, value }) => {
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div className={"grid grid-cols-1 gap-5 m-5"}>
            <OffTable data={CONST.allUser} editAble={true}/>

        </div>
    );
};


export default Page;
