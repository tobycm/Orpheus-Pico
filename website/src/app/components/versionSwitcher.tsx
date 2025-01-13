/**
 * Multiselect component that allows for switching board versions
 */

"use client";

import { boardVersions, VersionMetadata } from "@/metadata";
import { Select, SelectItem } from "@nextui-org/select";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function VersionSwitcher() {
    const [version, setVersion] = useState<VersionMetadata | undefined>(
        undefined
    );
    useEffect(() => {
        setVersion(getVersion());
        console.log("got version!");
    }, []);
    return (
        <div>
            <Select
                label="Select board version"
                onChange={(event) => {
                    const v = event.target.value;
                    setVersion(saveVersion(v));
                    console.log(`Board version set to ${v}`);
                }}
                selectedKeys={version ? [version.version] : undefined}
            >
                {boardVersions.map((version) => (
                    <SelectItem key={version.version}>
                        {version.version}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}

/**
 * Get currently selected version from cookies.
 * @returns Board version metadata object
 */
export function getVersion() {
    const versionKey = getCookie("board-version")?.toString();
    const version = boardVersions.find(
        (version) => version.version == versionKey
    );
    if (!version) {
        setCookie("board-version", boardVersions[0].version);
        return undefined;
    }

    console.log(`Detected stored board version as ${version.version}`);
    return version;
}

export function saveVersion(val: string) {
    let version = boardVersions.find((version) => version.version == val);
    if (!version) {
        console.error("Invalid version set, resetting to default");
        version = boardVersions[0];
    }
    setCookie("board-version", version.version);
    return version;
}
