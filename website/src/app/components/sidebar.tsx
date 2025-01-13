/**
 * Sidebar listing pages
 */
"use client";

import Link from "next/link";
import VersionSwitcher from "./versionSwitcher";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

type link = { link: string; label: string };

export default function Sidebar() {
    return (
        <div className="bg-content2 h-full w-64 p-4 flex flex-col shrink-0">
            <VersionSwitcher />
            <Accordion
                defaultExpandedKeys={"all"}
                isCompact
                selectionMode="multiple"
            >
                <AccordionItem title="About Orpheus Pico">
                    <div className="flex flex-col gap-1 px-2">
                        <SidebarLink link="about" label="About" />
                        <SidebarLink link="features" label="Features" />
                        <SidebarLink link="pinout" label="Pinout" />
                    </div>
                </AccordionItem>

                <AccordionItem title="Learn">
                    <div className="flex flex-col gap-1 px-2">
                        <SidebarLink
                            link="getting-started"
                            label="Getting started"
                        />
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

function SidebarLink({ link, label }: link) {
    return <Link href={link}>{label}</Link>;
}
