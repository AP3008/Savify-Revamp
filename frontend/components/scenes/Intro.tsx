"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Intro() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    /* ---------------- SCROLL PHASES ---------------- */
    const PHASE_BRAND_END = 0.18;
    const PHASE_PHONE_RISE_END = 0.55;
    const PHASE_PHONE_ROTATE_END = 0.8;

    /* ---------------- ART BACKGROUND ---------------- */
    const artScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);
    const artX = useTransform(scrollYProgress, [0, 0.6], [0, -420]);
    const artY = useTransform(scrollYProgress, [0, 0.6], [0, 320]);
    const artOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [1, 1, 0.9]);

    /* ---------------- TITLE (CENTER → TOP) ---------------- */
    const titleScale = useTransform(
        scrollYProgress,
        [0, PHASE_PHONE_RISE_END],
        [1, 0.55]
    );

    const titleY = useTransform(
        scrollYProgress,
        [0, PHASE_PHONE_RISE_END],
        [0, -250]
    );

    /* ---------------- SLOGANS (IN → SETTLE → STAY) ---------------- */
    const sloganLeftX = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END],
        [-140, 0]
    );

    const sloganRightX = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END],
        [140, 0]
    );

    const sloganOpacity = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END],
        [0, 1]
    );

    /* ---------------- PHONE ---------------- */
    const phoneY = useTransform(scrollYProgress, [0.15, 0.45], [600, 0]);
    const phoneRotate = useTransform(scrollYProgress, [0.45, PHASE_PHONE_ROTATE_END], [0, -90]);

    // Zoom into the phone after rotation completes - dramatic zoom to "enter" the screen
    const phoneScale = useTransform(
        scrollYProgress,
        [0.55, 0.75, 0.85, 0.92],
        [1, 2, 12, 40]
    );

    const phoneOpacity = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END, 0.88, 0.92],
        [0, 1, 1, 0]
    );

    return (
        <section ref={containerRef} className="relative h-[600vh]">
            {/* Sticky Scene */}
            <div className="sticky top-0 h-screen relative overflow-hidden text-white">

                {/* ART BACKGROUND */}
                <motion.div
                    style={{ scale: artScale, x: artX, y: artY, opacity: artOpacity }}
                    className="
            absolute bottom-20 left-0 z-0
            w-[50vw] h-[50vh]
            origin-bottom-left
            will-change-transform
          "
                >
                    <Image
                        src="/art.svg"
                        alt="Savify abstract background"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* GRADIENT OVERLAY - stays visible, no white flash */}
                <div className="absolute inset-0 z-10 bg-brand-gradient opacity-95" />

                {/* CONTENT */}
                <div className="relative z-20 h-full">

                    {/* TITLE */}
                    <motion.div
                        style={{scale: titleScale, y: titleY}}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none pt-[96px]"
                    >
                        <div className="flex items-center gap-[6px]">
                            <Image
                                src="/logo-savify-no-background.png"
                                alt="Savify Logo"
                                width={200}
                                height={150}
                                priority
                                className="-mr-[65px] translate-y-[-14px]"
                            />
                            <span className="text-5xl md:text-8xl font-extrabold tracking-tight leading-none">
                avify
              </span>
                        </div>
                    </motion.div>

                    {/* SLOGANS */}
                    <div className="absolute top-[58%] left-1/2 -translate-x-1/2 text-center">
                        <motion.p
                            style={{x: sloganLeftX, opacity: sloganOpacity}}
                            className="
      text-3xl md:text-4xl
      font-semibold
      tracking-tight
      text-white
    "
                        >
                            Simplify your finances
                        </motion.p>

                        <motion.p
                            style={{x: sloganRightX, opacity: sloganOpacity}}
                            className="
      mt-2
      text-base md:text-lg
      font-medium
      tracking-wide
      text-white/65
    "
                        >
                            Savify your future
                        </motion.p>
                    </div>


                    {/* PHONE */}
                    <motion.div
                        style={{
                            y: phoneY,
                            rotate: phoneRotate,
                            scale: phoneScale,
                            opacity: phoneOpacity,
                        }}
                        className="
              absolute top-1/3 left-1/3
              -translate-x-1/2 -translate-y-1/2
              z-30
              w-[clamp(320px,35vw,700px)]
              will-change-transform origin-center
            "
                    >
                        <Image
                            src="/phone.png"
                            alt="Savify app preview"
                            width={2000}
                            height={2000}
                            priority
                            className="w-full h-auto"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
