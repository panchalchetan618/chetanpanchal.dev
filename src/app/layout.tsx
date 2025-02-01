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
                className={`${poppins.variable} antialiased bg-gray-950 text-gray-400 px-2`}
            >
                <main className="relative overflow-hidden min-h-[100dvh] antialiased px-2 max-w-[1660px] mx-auto">
                    {/* Circle 1 */}
                    <div className="fixed top-[-10%] left-[-10%] bg-indigo-500/30 blur-[50px] opacity-50 h-[400px] w-[400px] rounded-full z-[-1]"></div>
                    {/* Circle 2 */}
                    <div className="fixed bottom-[-10%] right-[-10%] bg-indigo-500/30 blur-[50px] opacity-50 h-[400px] w-[400px] rounded-full z-[-1]"></div>

                    {/* Children */}
                    {children}
                </main>
            </body>
        </html>
    );
}
