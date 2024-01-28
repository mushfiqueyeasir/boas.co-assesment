"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children?: React.ReactNode }) {
    // Check if running on the client side
    const isClient = typeof window !== "undefined";

    // Initialize dark mode based on local storage or system preference
    const storedDarkMode = isClient ? localStorage.getItem("theme") : null;
    const systemDarkMode = isClient && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDarkMode = storedDarkMode ? storedDarkMode === "dark" : systemDarkMode;

    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme={initialDarkMode ? "dark" : "light"}>
            {children}
        </ThemeProvider>
    );
}
