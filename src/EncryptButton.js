import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const EncryptButton = ({ textProp = "Encrypt Data" }) => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(textProp);

    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const CHARS = "!@#$%^&*():{};|,.<>/?";

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = textProp.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    return CHARS[randomCharIndex];
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos / CYCLES_PER_LETTER >= textProp.length) {
                clearInterval(intervalRef.current);
                setText(textProp);
            }
        }, SHUFFLE_TIME);
    };

    return (
        <>
            <style>{`
                @keyframes slideDown {
                    from {
                        top: 0%;
                    }
                    to {
                        top: 100%;
                    }
                }

                .button {
                    position: relative;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #6b7280;
                    background-color: #374151; /* Button background color */
                    padding: 8px 16px;
                    font-family: monospace;
                    font-weight: 500;
                    text-transform: uppercase;
                    color: #d1d5db; /* Button text color */
                    border-radius: 20px;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s; /* Add background-color transition if needed */
                    text-align: center;
                    margin: 0 1px;
                }

                .button::before {
                    content: '';
                    position: absolute;
                    top: -2px; /* Adjust if necessary */
                    left: 0;
                    width: 100%;
                    height: 2px; /* Line thickness */
                    background-color: #6366f1; /* Line color, which is blue */
                    animation: none; /* No animation initially */
                }

                .button:hover::before {
                    animation: slideDown 0.5s forwards linear; /* Line animation on hover */
                }

                .button:hover {
                    background-color: #374151; /* Explicitly set the hover background color if needed */
                }

                /* If you want to ensure the button itself doesn't change color on hover, you could add:
                .button:hover {
                    background-color: #374151; /* Explicitly set the hover background color if needed */
                }
                */
            `}</style>
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onMouseEnter={scramble}
                onMouseLeave={() => {
                    clearInterval(intervalRef.current);
                    setText(textProp);
                }}
                className="button"
            >
                <span>{text}</span>
            </motion.button>
        </>
    );
};

export default EncryptButton;
