import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DoctorDetails = ({ doctor }: any) => {
    const socialMediaList = [
        {
            id: 1,
            icon: "/youtube.png",
            url: "#",
        },
        {
            id: 2,
            icon: "/linkedin.png",
            url: "#",
        },
        {
            id: 3,
            icon: "/twitter.png",
            url: "#",
        },
        {
            id: 4,
            icon: "/facebook.png",
            url: "#",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 border p-5 mt-5 shadow-sm rounded-lg ">
                <div className="">
                    <Image
                        src={doctor.attributes?.image?.data?.attributes?.url}
                        width={500}
                        height={200}
                        alt="Doctor Image"
                        className="h-[200px] w-full object-cover rounded-lg"
                    />
                </div>

                <div className="col-span-2 mt-3 flex flex-col md:px-10 gap-2">
                    <h2 className="font-semibold text-2xl">
                        {doctor.attributes?.Name}
                    </h2>
                    <h2 className="flex gap-2 text-muted-foreground text-sm items-center">
                        <GraduationCap />
                        <span className="">
                            {doctor.attributes?.Year_of_Experience} of
                            experience
                        </span>
                    </h2>
                    <h2 className="flex gap-2 mt-2 text-muted-foreground text-sm">
                        <MapPin />
                        <span className="">{doctor.attributes?.Address}</span>
                    </h2>
                    <h2 className="bg-blue-100 px-2 py-1 text-center rounded-full text-primary mt-2">
                        {doctor.attributes?.categories.data[0].attributes?.Name}
                    </h2>

                    <div className="flex gap-3">
                        {socialMediaList.map((item, index) => (
                            <Link href={item.url} target="_blank">
                                <Image
                                    key={item.id}
                                    src={item.icon}
                                    alt="social media"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        ))}
                    </div>
                    <Button className="mt-3 rounded-full">
                        Book Appointment
                    </Button>
                </div>
            </div>

            <div className="p-3 border rounded-lg mt-5">
                <h2 className="font-bold text-xl my-5">About me</h2>
                <p className="text-justify">{doctor.attributes.About}</p>
            </div>
        </>
    );
};

export default DoctorDetails;
