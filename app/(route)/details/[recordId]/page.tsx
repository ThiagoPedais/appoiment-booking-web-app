"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import DoctorDetails from "../_components/doctor-details";
import DoctorSuggestionList from "../_components/doctor-suggestions";

interface IDetailsPage {
    params: {
        recordId: string;
    };
}
// { params: {recordId} }: { params: {recordId: string} }
const DetailsPage = ({ params }: IDetailsPage) => {
    const { recordId } = params;

    const [doctorDetails, setDoctorDetails] = useState();

    useEffect(() => {
        getDoctorById();
    }, []);
    const getDoctorById = () => {
        GlobalApi.getDoctorById(recordId).then((res) => {
            // console.log(res.data);
            setDoctorDetails(res.data.data);
        });
    };
    return (
        <div className="p-5 md:px-20">
            <h2 className="font-bold text-xl mb-5">Details</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-3">
                    {doctorDetails && <DoctorDetails doctor={doctorDetails} />}
                </div>
                <div className="">
                    <DoctorSuggestionList />
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
