import React from "react";

interface InputProps {
    type: string;
    placeholder: string;
    value?: string | number;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Use React.forwardRef to forward the ref to the input element
const InputField = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, value, label, onChange }, ref) => {
        return (
            <div className="w-full space-y-2">
                <div className="pl-2">{label}</div>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full flex-1 rounded-lg border border-zinc-800 bg-black/30 px-4 py-2.5 text-white placeholder:text-zinc-600 focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
            </div>
        );
    },
);

InputField.displayName = "CustomInput";

export default InputField;
