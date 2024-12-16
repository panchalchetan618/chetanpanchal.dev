import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Chetan Panchal",
    description:
        "Hey, welcome to my Portfolio. I'm Chetan Panchal a Full Stack Developer and UI/UX Designer. I'm currently working as a freelancer and open to opportunities, Let's take your brand to a New reach with my skills. Check this out!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased bg-black text-gray-400 px-2`}
            >
                {children}
            </body>
        </html>
    );
}
