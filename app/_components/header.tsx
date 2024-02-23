"use client";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    LoginLink,
    LogoutLink,
    useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Explore",
            path: "/explore",
        },
        {
            id: 3,
            name: "Contact us",
            path: "/contact-us",
        },
    ];

    const { user } = useKindeBrowserClient();

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <div className="flex items-center justify-between p-4 shadow-sm">
            <div className="flex items-center gap-10">
                <Image src="/logo.svg" alt="Logo" width={50} height={30} />

                <ul className="hidden md:flex gap-8">
                    {Menu.map((item, index) => (
                        <Link href={item.path}>
                            <li
                                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
                                key={item.id}
                            >
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            {user ? (
                <div className="flex space-x-2">
                    {/* <LogoutLink>
                        <Button variant="outline" className="text-primary">
                            Log out
                        </Button>
                    </LogoutLink> */}

                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src={user?.picture!}
                                alt="Profile"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </PopoverTrigger>
                        <PopoverContent>
                            <ul className="flex flex-col gap-2">
                                <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                                    Profile
                                </li>
                                <Link
                                    href="/my-booking"
                                    className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"
                                >
                                    My Booking
                                </Link>
                                <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                                    <LogoutLink>Log out</LogoutLink>
                                </li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            ) : (
                <LoginLink>
                    <Button>Get Started</Button>
                </LoginLink>
            )}
        </div>
    );
};

export default Header;
