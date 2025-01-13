// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            {theme == "light" ? (
                <DarkModeIcon
                    onClick={() => {
                        setTheme("dark");
                    }}
                />
            ) : (
                <LightModeIcon
                    onClick={() => {
                        setTheme("light");
                    }}
                />
            )}
        </div>
    );
}
