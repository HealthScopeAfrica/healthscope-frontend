import React, { useState, useRef, useEffect } from "react";

type OTPInputProps = {
    length?: number;
    onChange: (value: string) => void;
};

export function OTPInput({ length = 6, onChange }: OTPInputProps) {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    // Whenever values change, emit the joined string
    useEffect(() => {
        onChange(values.join(""));
    }, [values, onChange]);

    const handleChange = (idx: number, char: string) => {
        if (!/^[0-9]$/.test(char)) {
            // optionally restrict to digits
            return;
        }
        const newVals = [...values];
        newVals[idx] = char;
        setValues(newVals);

        // move focus to next
        if (idx < length - 1) {
            inputsRef.current[idx + 1]?.focus();
        }
    };

    const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
        const key = e.key;
        if (key === "Backspace") {
            if (values[idx]) {
                // if current slot has a value, clear it
                const newVals = [...values];
                newVals[idx] = "";
                setValues(newVals);
            } else if (idx > 0) {
                // move to previous
                inputsRef.current[idx - 1]?.focus();
                const newVals = [...values];
                newVals[idx - 1] = "";
                setValues(newVals);
            }
            e.preventDefault();
        } else if (key === "ArrowLeft") {
            if (idx > 0) {
                inputsRef.current[idx - 1]?.focus();
            }
            e.preventDefault();
        } else if (key === "ArrowRight") {
            if (idx < length - 1) {
                inputsRef.current[idx + 1]?.focus();
            }
            e.preventDefault();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        const pasted = e.clipboardData.getData("Text").trim();
        if (!/^[0-9]+$/.test(pasted)) {
            return;
        }
        const chars = pasted.split("").slice(0, length);
        const newVals = [...values];
        for (let i = 0; i < chars.length; i++) {
            newVals[i] = chars[i];
        }
        setValues(newVals);
        // focus after last pasted
        const nextIndex = Math.min(chars.length, length - 1);
        inputsRef.current[nextIndex]?.focus();
        e.preventDefault();
    };

    return (
        <div className="flex gap-2 w-fit">
            {values.map((val, idx) => (
                <input
                    key={idx}
                    ref={(el) => { (inputsRef.current[idx] = el) }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={handlePaste}
                    className="w-11 py-4 border border-gray-300 text-center text-lg bg-[#D5D5D5] focus:border-[#333333] rounded-md focus:outline-none"
                />
            ))}
        </div>
    );
}

export default OTPInput;