/**
 * Header/navbar for docs
 */

import { Navbar, NavbarBrand, NavbarItem } from "@nextui-org/navbar";
import { ThemeSwitcher } from "../components/themeSwitcher";
import Link from "next/link";

export default function DocsHeader() {
    return (
        <Navbar className="bg-default-100 border-b-2 border-default-200">
            <NavbarBrand>Orpheus Pico Docs</NavbarBrand>
            <NavbarItem>
                <Link href="/">Homepage</Link>
            </NavbarItem>
            <NavbarItem>
                <ThemeSwitcher />
            </NavbarItem>
        </Navbar>
    );
}
