/**
 * Sidebar listing pages
 */
"use client";

import Link from "next/link";
import VersionSwitcher, { extractPathVersion } from "./versionSwitcher";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { boardVersions } from "@/metadata";

type link = { link: string; label: string };

export default function Sidebar({ path }: { path: string[] }) {
    const extracted = extractPathVersion(path);
    return (
        <div className="bg-content2 h-full w-64 p-4 flex flex-col shrink-0">
            <VersionSwitcher path={path} />
            <Accordion
                defaultExpandedKeys={"all"}
                isCompact
                selectionMode="multiple"
                className="mt-4"
            >
                <AccordionItem title="Info">
                    <div className="flex flex-col gap-1 px-2">
                        {extracted.version?.pages.root.map((page) => (
                            <SidebarLink
                                key={page.path}
                                label={page.title}
                                link={`/docs/${extracted.version?.id}/${page.path}`}
                            />
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem title="Learn">
                    <div className="flex flex-col gap-1 px-2">
                        {extracted.version?.pages.guides.map((page) => (
                            <SidebarLink
                                key={page.path}
                                label={page.title}
                                link={`/docs/${extracted.version?.id}/guides/${page.path}`}
                            />
                        ))}
                    </div>
                </AccordionItem>
            </Accordion>
            <span className="grow" />
            <Link
                href="https://github.com/adammakesthingsdev/Orpheus-Pico"
                className="text-sm w-full text-center italic"
            >
                Edit me on Github!
            </Link>
        </div>
    );
}

function SidebarLink({ link, label }: link) {
    return (
        <Link
            href={link}
            className="text-content1-foreground hover:text-primary-700"
        >
            {label}
        </Link>
    );
}
