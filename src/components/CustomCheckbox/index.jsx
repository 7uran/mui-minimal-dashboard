import React from 'react';

const CustomCheckbox = ({ checked, onChange, label }) => {
    return (
        <label className="relative flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <div
                className={`w-5 h-5 rounded-md border border-gray-300 flex items-center justify-center ${checked ? 'bg-mainColor' : 'bg-white'
                    } transition-colors duration-200 ease-in-out hover:bg-green-100`}
            >
                {checked && (
                    <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>
            <span className="ml-2 text-sm">{label}</span>
        </label>
    );
};

export default CustomCheckbox;
