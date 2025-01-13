/**
 * Board version metadata. If adding a new version update here!
 */

export interface VersionMetadata {
    /** Versioning string, i.e. OR2040-1v1 */
    version: string;
    /** Date of official release */
    releaseDate: Date;
}

export const boardVersions: VersionMetadata[] = [
    {
        version: "OR2040-1v1",
        releaseDate: new Date("1/13/25"),
    },
    {
        version: "OR2040-1v2",
        releaseDate: new Date("5/25/25"),
    },
];
