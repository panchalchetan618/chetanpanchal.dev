"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
    gradientFirst?: string;
    gradientSecond?: string;
    gradientThird?: string;
    translateY?: number;
    width?: number;
    height?: number;
    smallWidth?: number;
    duration?: number;
    xOffset?: number;
};

export const Spotlight = ({
    gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 90%, .25) 0, hsla(210, 100%, 75%, .15) 50%, hsla(210, 100%, 65%, 0) 90%)",
    gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .18) 0, hsla(210, 100%, 70%, .1) 80%, transparent 100%)",
    gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 80%, .12) 0, hsla(210, 100%, 65%, .08) 80%, transparent 100%)",
    translateY = -350,
    width = 500,
    height = 1200,
    smallWidth = 200,
    duration = 7,
    xOffset = 80,
}: SpotlightProps = {}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden"
        >
            {/* Left Spotlight */}
            <motion.div
                animate={{ x: [0, xOffset, 0] }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-full h-full z-40 pointer-events-none"
            >
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(-45deg)`,
                        background: gradientFirst,
                        width: `clamp(300px, ${width}px, 90vw)`,
                        height: `${height}px`,
                        filter: "blur(80px)", // Added blur effect
                    }}
                    className="absolute left-[-50px]"
                />
                <div
                    style={{
                        transform: "rotate(-45deg) translate(5%, -50%)",
                        background: gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        filter: "blur(100px)", // More blur for depth
                    }}
                    className="absolute left-0"
                />
                <div
                    style={{
                        transform: "rotate(-45deg) translate(-120%, -70%)",
                        background: gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        filter: "blur(120px)", // More blur for distant glow
                    }}
                    className="absolute left-0"
                />
            </motion.div>

            {/* Right Spotlight */}
            <motion.div
                animate={{ x: [0, -xOffset, 0] }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-full h-full z-40 pointer-events-none"
            >
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(45deg)`,
                        background: gradientFirst,
                        width: `clamp(300px, ${width}px, 90vw)`,
                        height: `${height}px`,
                        filter: "blur(80px)",
                    }}
                    className="absolute right-[-50px]"
                />
                <div
                    style={{
                        transform: "rotate(45deg) translate(-5%, -50%)",
                        background: gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px}`,
                        filter: "blur(100px)",
                    }}
                    className="absolute right-0"
                />
                <div
                    style={{
                        transform: "rotate(45deg) translate(120%, -70%)",
                        background: gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px}`,
                        filter: "blur(120px)",
                    }}
                    className="absolute right-0"
                />
            </motion.div>
        </motion.div>
    );
};
