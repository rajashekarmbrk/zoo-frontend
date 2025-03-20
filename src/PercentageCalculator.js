import React from 'react'
import { useState } from "react";
import "./PercentageCalculator.css"; // Import CSS file
import { FaExclamationTriangle } from "react-icons/fa"; // Import an error icon

export default function PercentageCalculator() {
    const [value, setValue] = useState("");
    const [total, setTotal] = useState("");
    const [percentage, setPercentage] = useState(null);
    const [error, setError] = useState("");

    const calculatePercentage = () => {
        setError(""); // Reset errors
        const numValue = parseFloat(value);
        const numTotal = parseFloat(total);

        if (isNaN(numValue) || isNaN(numTotal)) {
            setError("Please enter valid numbers.");
            return;
        }
        if (numTotal === 0) {
            setError("Total cannot be zero.");
            return;
        }

        const result = (numValue / numTotal) * 100;
        setPercentage(result.toFixed(2));
    };

    const resetCalculator = () => {
        setValue("");
        setTotal("");
        setPercentage(null);
        setError("");
    };
  return (
    <div>
        <div className="calculator-container">
            <h2 className="title">📊 Percentage Calculator</h2>
            <div className="input-group">
                <input
                    type="number"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                />
            </div>
            <div className="button-group">
                <button onClick={calculatePercentage} className="calculate-btn">
                    Calculate
                </button>
                <button onClick={resetCalculator} className="reset-btn">
                    Reset
                </button>
            </div>

            {error && (
                <p className="error-message">
                    <FaExclamationTriangle className="error-icon" /> {error}
                </p>
            )}

            {percentage !== null && (
                <div className="result-box">
                    <p>📌 Percentage: <span>{percentage}%</span></p>
                </div>
            )}
        </div>
    </div>
  )
}
