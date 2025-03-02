/**
 * Multiselect component that allows for switching board versions
 */

"use client";

import { boardVersions } from "@/metadata";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";

export default function VersionSwitcher({ path }: { path: string[] }) {
    const extracted = extractPathVersion(path);
    const version = extracted.version;
    console.log(extracted);

    const router = useRouter();

    function switchPage(value: string) {
        // TODO - validate page to switch to
        //const newVersion = boardVersions.find((version) => value == version.id);
        const url = `/docs/${value}/${extracted.extraPath}`;
        router.push(url);
    }

    return (
        <div>
            <Select
                label="Select board"
                onChange={(event) => {
                    switchPage(event.target.value);
                }}
                selectedKeys={[version?.id ?? "pico"]}
            >
                {boardVersions.map((version) => (
                    <SelectItem key={version.id}>{version.name}</SelectItem>
                ))}
            </Select>
        </div>
    );
}

export function extractPathVersion(path: string[]) {
    const version = boardVersions.find((version) => version.id == path[0]);
    const excessURL = !version ? path.join("/") : path.slice(1).join("/");

    return {
        version,
        extraPath: excessURL,
    };
}

/*
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
*/
