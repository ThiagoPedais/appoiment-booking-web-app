"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CategoryList {
    category: string;
}

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    const params = usePathname();
    const categoryParam = params.split("/")[2];

    useEffect(() => {
        getCategoryList();
        console.log("CATEGORY ====>", categoryParam);
    }, []);
    const getCategoryList = () => {
        GlobalApi.getCategory().then((res) => {
            // console.log(res.data);
            setCategoryList(res.data.data);
        });
    };
    return (
        <div className="h-screen flex flex-col mt-5">
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoryList &&
                            categoryList.map((item: any, index) => (
                                <CommandItem key={index}>
                                    <Link
                                        href={
                                            "/search/" + item.attributes?.Name
                                        }
                                        className={`p-2 flex gap-2 items-center text-[1rem] text-blue-600 rounded-md cursor-pointer w-full ${
                                            categoryParam ==
                                                item.attributes?.Name &&
                                            "bg-blue-100"
                                        }`}
                                    >
                                        <Image
                                            src={
                                                item.attributes?.Icon?.data
                                                    .attributes.url
                                            }
                                            alt="Icon"
                                            width={25}
                                            height={25}
                                        />
                                        <label htmlFor="">
                                            {item.attributes?.Name}
                                        </label>
                                    </Link>
                                </CommandItem>
                            ))}
                    </CommandGroup>
                    {/* <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>Profile</CommandItem>
                        <CommandItem>Billing</CommandItem>
                        <CommandItem>Settings</CommandItem>
                    </CommandGroup> */}
                </CommandList>
            </Command>
        </div>
    );
};

export default CategoryList;
