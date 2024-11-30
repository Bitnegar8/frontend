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
        <>
            <div className={"grid grid-cols-4 gap-5 m-5"}>
                <div className={"w-full"}>
                    <CustomSelect label={"company"} multi={true} options={list} onChange={(e) => setDeveloperName(e)}/>
                </div>
            </div>
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


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"RentAmount"}
                        label={"RentAmount"}
                        name={"RentAmount"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"NumberOfBathRooms"}
                        label={"NumberOfBathRooms"}
                        name={"NumberOfBathRooms"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ListingType"}
                        label={"ListingType"}
                        name={"ListingType"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ContactMobile"}
                        label={"ContactMobile"}
                        name={"ContactMobile"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ContactEmail"}
                        label={"ContactEmail"}
                        name={"ContactEmail"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ContractTenure"}
                        label={"ContractTenure"}
                        name={"ContractTenure"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ContractTenureText"}
                        label={"ContractTenureText"}
                        name={"ContractTenureText"}
                        onchange={handleForm}
                    />
                </div>
                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ListingStatus"}
                        label={"ListingStatus"}
                        name={"ListingStatus"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ListingRef"}
                        label={"ListingRef"}
                        name={"ListingRef"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"AssociatedTrackings"}
                        label={"AssociatedTrackings"}
                        name={"AssociatedTrackings"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"IsCertified"}
                        label={"IsCertified"}
                        name={"IsCertified"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"AreaId"}
                        label={"AreaId"}
                        name={"AreaId"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"CountryId"}
                        label={"CountryId"}
                        name={"CountryId"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"StateId"}
                        label={"StateId"}
                        name={"StateId"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"CityId"}
                        label={"CityId"}
                        name={"CityId"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"PropertyTypeId"}
                        label={"PropertyTypeId"}
                        name={"PropertyTypeId"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"FurnishStatusId"}
                        label={"FurnishStatusId"}
                        name={"FurnishStatusId"}
                        onchange={handleForm}
                    />
                </div>
                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ListingPerson"}
                        label={"ListingPerson"}
                        name={"ListingPerson"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"IsBookable"}
                        label={"IsBookable"}
                        name={"IsBookable"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ModifiedOn"}
                        label={"ModifiedOn"}
                        name={"ModifiedOn"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ActivationDate"}
                        label={"ActivationDate"}
                        name={"ActivationDate"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"IsFav"}
                        label={"IsFav"}
                        name={"IsFav"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"KeywordsEn"}
                        label={"KeywordsEn"}
                        name={"KeywordsEn"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"KeywordsAr"}
                        label={"KeywordsAr"}
                        name={"KeywordsAr"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ImageCount"}
                        label={"ImageCount"}
                        name={"ImageCount"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"VideoCount"}
                        label={"VideoCount"}
                        name={"VideoCount"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"PanoramaCount"}
                        label={"PanoramaCount"}
                        name={"PanoramaCount"}
                        onchange={handleForm}
                    />
                </div>
                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"Description"}
                        label={"Description"}
                        name={"Description"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"PropertyTypeText"}
                        label={"PropertyTypeText"}
                        name={"PropertyTypeText"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"TotalCheques"}
                        label={"TotalCheques"}
                        name={"TotalCheques"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"SecurityDeposit"}
                        label={"SecurityDeposit"}
                        name={"SecurityDeposit"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"Commission"}
                        label={"Commission"}
                        name={"Commission"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"CompanyLogo"}
                        label={"CompanyLogo"}
                        name={"CompanyLogo"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"CompanyName"}
                        label={"CompanyName"}
                        name={"CompanyName"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"SaleAmount"}
                        label={"SaleAmount"}
                        name={"SaleAmount"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"CompletionStatusId"}
                        label={"CompletionStatusId"}
                        name={"CompletionStatusId"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ExpectedCompletionDate"}
                        label={"ExpectedCompletionDate"}
                        name={"ExpectedCompletionDate"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ViewType"}
                        label={"ViewType"}
                        name={"ViewType"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"Services"}
                        label={"Services"}
                        name={"Services"}
                        onchange={handleForm}
                    />
                </div>

                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"FreeHold"}
                        label={"FreeHold"}
                        name={"FreeHold"}
                        onchange={handleForm}
                    />
                </div>
                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"IsContractable"}
                        label={"IsContractable"}
                        name={"IsContractable"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"ListingSourceKey"}
                        label={"ListingSourceKey"}
                        name={"ListingSourceKey"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"IsNew"}
                        label={"IsNew"}
                        name={"IsNew"}
                        onchange={handleForm}
                    />
                </div>


                <div className={"w-full"}>
                    <CustomInput
                        placeHolder={"CompletionStatusText"}
                        label={"CompletionStatusText"}
                        name={"CompletionStatusText"}
                        onchange={handleForm}
                    />
                </div>






                <CustomButton title={"Send Data"}/>

            </div>
        </>

    );
};

export default Page;
