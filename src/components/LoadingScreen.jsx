import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    const name = "Surinder Kumar";
    const letters = name.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            y: -1000,
            transition: {
                ease: "easeInOut",
                duration: 0.8,
                delay: 0.5,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    const logoVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                delay: 0.1,
            },
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3000); // Animation duration

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="loading-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="loading-content">
                <motion.div
                    className="loading-logo"
                    variants={logoVariants}
                >
                    S<span>K</span>
                </motion.div>

                <div className="loading-text">
                    <span className="first-name">
                        {"Surinder".split("").map((char, index) => (
                            <motion.span
                                key={`first-${index}`}
                                variants={letterVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                    <span className="space" />
                    <span className="last-name">
                        {"Kumar".split("").map((char, index) => (
                            <motion.span
                                key={`last-${index}`}
                                variants={letterVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </div>

                <motion.div
                    className="loading-progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
