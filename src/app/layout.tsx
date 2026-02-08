import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../../public/scss/main.scss";
import Provider from "@/state/provider";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "Plant Interaction",
  description: "Developed by Seun Oyediran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <ReactLenis
          root
          options={{
            smoothWheel: true,
            wheelMultiplier: 0.5,
            infinite: true,
            duration: 1.2,
          }}
        >
          <body>
            {children}

            <Analytics />
          </body>
        </ReactLenis>
      </html>
    </Provider>
  );
}
