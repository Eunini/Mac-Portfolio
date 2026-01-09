"use client";

import { useEffect, useState } from "react";
import styles from "./TextCycle.module.css";

const roles = [
    "UI/UX Designer",
    "Graphics Artist",
    <span key="video">Video <br className={styles.mobileBreak} />Editor</span>
];

export default function TextCycle() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`${styles.cycleText} ${fade ? styles.fadeIn : styles.fadeOut} text-gradient`}>
            {roles[index]}
        </span>
    );
}
