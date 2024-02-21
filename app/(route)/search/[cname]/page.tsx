"use client";

import DoctorList from "@/app/_components/doctor-list";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";

const SearchPage = ({ params: { cname } }: { params: { cname: string } }) => {
    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        console.log(cname);
        getDoctors();
    }, []);

    const getDoctors = () => {
        GlobalApi.getDoctorByCategory(cname).then((res) => {
            // console.log(res);
            setDoctorList(res.data.data);
        });
    };

    return (
        <div className="mt-10">
            <DoctorList heading={cname} />
        </div>
    );
};

export default SearchPage;
