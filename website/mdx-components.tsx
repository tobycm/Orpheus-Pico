import type { MDXComponents } from "mdx/types";
import { Link } from "@nextui-org/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children }) => <h1 className="text-3xl pb-4">{children}</h1>,
        a: ({ children, href }) => <Link href={href}>{children}</Link>,
        p: ({ children }) => <p className="leading-relaxed pb-2">{children}</p>,
        li: ({ children }) => <li className="">{children}</li>,
        ul: ({ children }) => (
            <ul className="list-disc list-inside">{children}</ul>
        ),
        table: ({ children }) => (
            <table className="table-auto border-2 border-divider rounded !border-collapse max-w-xl">
                {children}
            </table>
        ),
        td: ({ children }) => (
            <td className="h-12 bg-content1 border-divider border-1 text-center">
                {children}
            </td>
        ),
        th: ({ children }) => (
            <th className="h-12 bg-content2 border-1 border-divider">
                {children}
            </th>
        ),
    };
}
