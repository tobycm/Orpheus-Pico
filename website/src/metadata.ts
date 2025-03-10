/**
 * Board version metadata. If adding a new version update here!
 */

export type Difficulties = "Beginner" | "Intermediate" | "Advanced";

/** Page declaration w/ metadata */
export interface PageData {
    title: string;
    path: string;
}

export interface VersionMetadata {
    /** Versioning string, i.e. OR2040-1v1 */
    name: string;
    id: string;

    pages: {
        root: PageData[];
        guides: PageData[];
    };
}

export const boardVersions: VersionMetadata[] = [
    {
        name: "Orpheus Pico",
        id: "pico",
        pages: {
            guides: [{ title: "USB 2FA Passkey", path: "passkey" }],
            root: [
                { title: "About Orpheus Pico", path: "about" },
                { title: "Features", path: "features" },
                { title: "Getting started", path: "getting-started" },
                { title: "Pinout", path: "pinout" },
            ],
        },
    },
];
