'use client'

import React, { useEffect, useState } from 'react';
import CustomInput from "../../../../_component/components/UI/customInput/customInput";
import CustomSelect from "../../../../_component/components/UI/customSelect/customSelect";
import CustomButton from "../../../../_component/components/UI/customButton/customButton";

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
        <div className={"grid grid-cols-4 gap-5 m-5"}>
            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"developerName"}
                    label={"developerName"}
                    name={"developerName"}
                    onchange={handleForm}
                />
            </div>
            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"projectName"}
                    label={"projectName"}
                    name={"projectName"}
                    onchange={handleForm}
                />
            </div>
            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"totaPrice"}
                    label={"totaPrice"}
                    name={"totaPrice"}
                    onchange={handleForm}
                />
            </div>
            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"view"}
                    label={"view"}
                    name={"view"}
                    onchange={handleForm}
                />
            </div>

            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"handOoverTime"}
                    label={"handOoverTime"}
                    name={"handOoverTime"}
                    onchange={handleForm}
                />
            </div>

            <div className={"w-full"}>
                <CustomSelect label={"unitType"} multi={true} options={list} onChange={(e) => setDeveloperName(e)}/>
            </div>

            <div className={"w-full"}>
                <CustomSelect label={"amenities"} multi={true} options={list} onChange={(e) => setDeveloperName(e)}/>
            </div>

            <div className={"w-full"}>
                <CustomSelect label={"paymentPlan"} multi={true} options={list} onChange={(e) => setDeveloperName(e)}/>
            </div>



            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"FurnishStatusText"}
                    label={"FurnishStatusText"}
                    name={"FurnishStatusText"}
                    onchange={handleForm}
                />
            </div>

            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"ListingId"}
                    label={"ListingId"}
                    name={"ListingId"}
                    onchange={handleForm}
                />
            </div>


            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"PropertyId"}
                    label={"PropertyId"}
                    name={"PropertyId"}
                    onchange={handleForm}
                />
            </div>

            <div className={"w-full"}>
                <CustomInput
                    placeHolder={"ListingTitle"}
                    label={"ListingTitle"}
                    name={"ListingTitle"}
                    onchange={handleForm}
                />
            </div>





            <CustomButton title={"Send Data"}/>

        </div>
    );
};

export default Page;
