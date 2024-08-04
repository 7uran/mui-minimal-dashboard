import React from 'react';

const CustomRadio = ({ checked, onChange, label, name }) => {
    return (
        <label className="relative flex items-center cursor-pointer">
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                name={name}
                className="sr-only"
            />
            <div
                className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center ${checked ? 'bg-green-500' : 'bg-white'
                    } transition-colors duration-200 ease-in-out`}
            >
                {checked && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
            </div>
            <span className="ml-2 text-sm ">{label}</span>
        </label>
    );
};

export default CustomRadio;
