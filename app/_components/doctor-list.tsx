"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

interface IDoctorList {
    heading?: string;
}

const DoctorList = ({ heading = "Popular Doctors" }: IDoctorList) => {
    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        getDoctorList();
    }, []);
    const getDoctorList = () => {
        GlobalApi.getDoctors().then((res) => {
            setDoctorList(res.data.data);
        });
    };

    return (
        <div className="mb-10 px-8">
            <h2 className="font-bold text-xl mb-3">{heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {doctorList.length > 0 ? (
                    doctorList.map((doctor: any, index) => (
                        <div
                            className="border rounded-lg p-4 cursor-pointer hover:border-primary"
                            key={index}
                        >
                            <Image
                                src={
                                    doctor.attributes?.image?.data?.attributes
                                        ?.url
                                }
                                width={500}
                                height={200}
                                alt="Doctor"
                                className="h-[200px] w-full object-cover rounded-lg"
                            />

                            <div className="mt-3 items-baseline flex flex-col gap-1">
                                <h2 className="bg-blue-100 px-2 rounded-full text-primary">
                                    {
                                        doctor.attributes?.categories.data[0]
                                            .attributes?.Name
                                    }
                                </h2>
                                <h2 className="font-bold text-xl mt-2">
                                    {doctor.attributes.Name}
                                </h2>
                                <h2 className="text-sm text-muted-foreground">
                                    {doctor.attributes?.Year_of_Experience}
                                </h2>
                                <h2 className="text-sm text-muted-foreground">
                                    {doctor.attributes?.Address}
                                </h2>
                                <Link
                                    href={"/details/" + doctor?.id}
                                    className="w-full"
                                >
                                    <h2 className="p-2 px-3 border border-primary text-primary rounded-full w-full text-center text-[1rem] mt-2 hover:bg-primary hover:text-white hover:border-transparent cursor-pointer transition-all ease-in-out duration-500">
                                        Book Now
                                    </h2>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div
                                key={index}
                                className="h-[320px] bg-slate-100 rounded-lg animate-pulse"
                            ></div>
                        ))}
                    </div>
                )}
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {Array.from({ length: 5 }, (_, index) => (
                    <div
                        className="border rounded-lg p-4 cursor-pointer hover:border-primary"
                        key={index}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Doctor"
                            width={500}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                        <div className="mt-3 items-baseline flex flex-col gap-1">
                            <h2 className="bg-blue-100 px-2 rounded-full text-primary">
                                Cardiologist
                            </h2>
                            <h2 className="font-bold text-xl">
                                Doctor Socrátes
                            </h2>
                            <h2 className="text-sm text-muted-foreground">
                                10 years
                            </h2>
                            <h2 className="text-sm text-muted-foreground">
                                547 Carrington Trace Drive, Cornelius
                            </h2>

                            <h2 className="p-2 px-3 border border-primary text-primary rounded-full w-full text-center text-[1rem] mt-2 hover:bg-primary hover:text-white hover:border-transparent cursor-pointer transition-all ease-in-out duration-500">
                                Book Now
                            </h2>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default DoctorList;
