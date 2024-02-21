"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

const CategorySearch = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, []);
    const getCategoryList = () => {
        GlobalApi.getCategory().then((res) => {
            // console.log(res.data);
            setCategoryList(res.data.data);
        });
    };

    return (
        <div className="mb-10 flex items-center flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-wide">
                Search <span className="text-primary">Doctors</span>
            </h2>
            <h2 className="capitalize text-muted-foreground px-1 text-xl">
                search your doctor and book appoiment in one click
            </h2>

            <div className="mt-3 flex w-full max-w-sm items-center space-x-2 px-5">
                <Input
                    type="text"
                    placeholder="Search..."
                    className="focus-visible:ring-primary"
                />
                <Button type="submit">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                </Button>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
                {categoryList.map((item: any, index) =>
                    Array.from({ length: 6 }, (_, index) => (
                        <div
                            key={index}
                            className="flex flex-col text-center py-5 px-8 bg-blue-200 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer"
                        >
                            <Image
                                src="/teeth.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <label className="text-blue-600 text-sm">
                                {item?.attributes?.Name}
                            </label>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CategorySearch;
