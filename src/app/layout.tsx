import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { AppProvider } from "@/components";

import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

export const metadata: Metadata = { title: "EBuddy Technical test | Charisman Apriandi" };

export default function RootLayout({ children }: PropsWithChildren ) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
