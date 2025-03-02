/**
 * Routes to matching markdown files
 */

import Sidebar from "@/app/components/sidebar";
import { boardVersions, Difficulties, PageData } from "@/metadata";
import "@/app/styles/highlight-js/solar-flare.css";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const {
        default: Post,
        title,
        difficulty,
        author,
    } = (await import(`@/content/${slug.join("/")}.mdx`)) as {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        default: any;
        title: string | undefined;
        difficulty: Difficulties | undefined;
        author: string | undefined;
    };
    console.log(title);

    let color;
    switch (difficulty) {
        case "Beginner":
            color = "bg-green-300";
            break;
        case "Intermediate":
            color = "bg-yellow-400";
            break;
        case "Advanced":
            color = "bg-red-400";
            break;
        default:
            color = "bg-primary-600";
    }

    return (
        <>
            <Sidebar path={slug} />
            {/* Rendered MDX */}
            <div className="px-10 py-5 overflow-y-auto grow">
                <div className="max-w-3xl flex flex-col">
                    <h1 className="text-3xl font-bold">
                        {title ?? "Title missing"}
                    </h1>
                    <span className="text-xl font-light">{author}</span>
                    {difficulty && (
                        <span className="text-xl font-light mb-4">
                            Difficulty:{" "}
                            <span
                                className={`${color} p-1 rounded-md text-md font-medium`}
                            >
                                {difficulty ?? "Unrated"}
                            </span>
                        </span>
                    )}
                    <Post />
                </div>
            </div>
        </>
    );
}

export function generateStaticParams() {
    // For each board type...
    const params = boardVersions.flatMap((boardVersion) => {
        // Get all slugs in "root" directory
        const root = boardVersion.pages.root.flatMap((rootPage) => ({
            slug: [boardVersion.id, rootPage.path],
        }));

        // Get all slugs in "guides" directory
        const guides = boardVersion.pages.guides.flatMap((rootPage) => ({
            slug: [boardVersion.id, "guides", rootPage.path],
        }));
        return root.concat(guides);
    });

    return params;
}

export const dynamicParams = false;
