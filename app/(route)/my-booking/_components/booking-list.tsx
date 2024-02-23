import GlobalApi from "@/app/_utils/GlobalApi";
import { Calendar, Clock, Map } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { toast } from "sonner";
import CancelAppointment from "./cancel-appointment";

interface IBookingList {
    bookingList: any;
    expired: boolean;
    updatedRecord: any;
}

const BookingList = ({ bookingList, expired, updatedRecord }: IBookingList) => {
    const onDeleteBooking = (item: { id: string }) => {
        console.log(item);
        GlobalApi.deleteBooking(item.id).then((res) => {
            if (res) {
                toast.success("Booking deleted");
                updatedRecord();
            }
        });
    };

    return (
        <div className="flex flex-col gap-7">
            {bookingList &&
                bookingList.map((item: any, index: any) => (
                    <div className="flex gap-4 items-center border p-5 m-3 rounded-lg">
                        <Image
                            src={
                                item.attributes?.doctor?.data?.attributes?.image
                                    ?.data?.attributes?.url
                            }
                            width={70}
                            height={70}
                            alt="Doctor"
                            className=" object-cover rounded-full w-[70px] h-[70px]"
                        />
                        <div className="flex flex-col gap-2 w-full">
                            <div className="w-full flex flex-col mb-3 md:mb-0 md:flex-row items-start md:items-center justify-between">
                                <h2 className="font-bold text-xl">
                                    {
                                        item.attributes.doctor.data.attributes
                                            .Name
                                    }
                                </h2>
                                {!expired && (
                                    <CancelAppointment
                                        onContinueClick={() =>
                                            onDeleteBooking(item)
                                        }
                                    />
                                )}
                            </div>
                            <h2 className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Map className="text-primary h-4 w-4" />
                                {item.attributes.doctor.data.attributes.Address}
                            </h2>
                            <h2 className="flex items-center  gap-2 text-muted-foreground text-sm">
                                <Calendar className="text-primary  h-4 w-4" />
                                Appointment on{" "}
                                {moment(item.attributes.Date).format(
                                    "DD-MMM-YYYY"
                                )}
                            </h2>
                            <h2 className="flex items-center  gap-2 text-muted-foreground text-sm">
                                <Clock className="text-primary  h-4 w-4" />
                                At time: {item.attributes.Time}
                            </h2>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default BookingList;
