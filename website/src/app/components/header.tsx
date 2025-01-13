/**
 * Header/navbar for docs
 */

import { Navbar, NavbarBrand, NavbarItem } from "@nextui-org/navbar";
import { ThemeSwitcher } from "../components/themeSwitcher";

export default function DocsHeader() {
    return (
        <Navbar className="bg-content1">
            <NavbarBrand>Orpheus Pico Docs</NavbarBrand>
            <NavbarItem>
                <ThemeSwitcher />
            </NavbarItem>
        </Navbar>
    );
}
