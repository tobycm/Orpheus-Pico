/**
 * Primary layout for docs
 */

import { ReactNode } from "react";
import DocsHeader from "../components/header";
import Sidebar from "../components/sidebar";
export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-screen bg-content1 overflow-hidden">
            {/* Navbar */}
            <DocsHeader />
            {/* Main content */}
            <div className="flex grow overflow-hidden">
                <Sidebar />
                {/* Rendered MDX */}
                <div className="px-10 py-5 overflow-y-auto grow max-w-4xl flex flex-col">{children}</div>
            </div>
        </div>
    );
}
