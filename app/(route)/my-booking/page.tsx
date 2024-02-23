"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";
import BookingList from "./_components/booking-list";

interface TypeBooking {
    type: "upcoming" | "expired";
}

const MyBookingPage = () => {
    const { user } = useKindeBrowserClient();
    const [bookingList, setBookingList] = useState<any[] | undefined>([]);

    useEffect(() => {
        user && getUserBookList();
    }, [user]);

    const getUserBookList = () => {
        GlobalApi.getuserBookingList(user?.email!).then((res) => {
            // console.log(res.data.data);
            setBookingList(res.data.data);
        });
    };

    const filterUserBooking = ({ type }: TypeBooking) => {
        const result = bookingList?.filter((item) =>
            type === "upcoming"
                ? new Date(item.attributes.Date) >= new Date()
                : new Date(item.attributes.Date) <= new Date()
        );
        console.log(result);

        return result;
    };

    return (
        <div className="px-4 sm:px-10 my-10">
            <h2 className="font-bold text-2xl">My Booking</h2>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <BookingList
                        bookingList={filterUserBooking({ type: "upcoming" })}
                        updatedRecord={() => getUserBookList()}
                        expired={false}
                    />
                </TabsContent>
                <TabsContent value="expired">
                    <BookingList
                        bookingList={filterUserBooking({ type: "expired" })}
                        updatedRecord={() => getUserBookList()}
                        expired={true}
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default MyBookingPage;
