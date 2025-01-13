/**
 * footer component for everything pretty much
 */

import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./components/themeSwitcher";

export default function Footer() {
    return (
        <div className="w-full bg-content4 h-16 flex items-center justify-center">
            <div className="flex font-sans gap-x-2 space-x-4">
                <Link
                    className="w-full justify-center flex"
                    href="https://github.com/adammakesthingsdev/Orpheus-Pico"
                >
                    GitHub
                </Link>
                <Link className="w-full justify-center flex" href="/">
                    Homepage
                </Link>
                <Link className="w-full justify-center flex" href="">
                    Contact
                </Link>
                <Link className="w-full justify-center flex" href="">
                    Gallery
                </Link>
                <Link
                    className="w-full justify-center flex"
                    href="https://hackclub.com"
                >
                    <Image
                        alt="logo!"
                        src={"/flag-standalone.svg"}
                        width={50}
                        height={50}
                    />
                </Link>
                <ThemeSwitcher />
            </div>
        </div>
    );
}
