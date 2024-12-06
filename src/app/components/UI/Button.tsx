import React from "react";

type ActionType =
    | "Create"
    | "Transfer"
    | "Delegate"
    | "RevokeDelegate"
    | "Mint"
    | "Cancel"
    | "Normal"
    | "Burn";

interface GenericButtonProps<T = void> {
    actionType: ActionType;
    onClick?: (param?: T) => void;
    children: React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    extraClasses?: string;
    param?: T; // optional parameter to pass to onClick
}

const GenericButton = <T,>({
    actionType,
    onClick,
    children,
    fullWidth = false,
    disabled = false,
    extraClasses = "",
    param,
}: GenericButtonProps<T>) => {
    const widthClass = fullWidth ? "w-full" : "w-auto";
    // Determine background and hover color based on actionType
    let bgColor = "";
    let hoverColor = "";

    switch (actionType) {
        case "Create":
            bgColor = "bg-zinc-700/50";
            hoverColor = "hover:bg-slate-600";
            break;
        case "Transfer":
            bgColor = "bg-blue-600";
            hoverColor = "hover:bg-blue-500";
            break;
        case "Delegate":
            bgColor = "bg-purple-600";
            hoverColor = "hover:bg-purple-700";
            break;
        case "RevokeDelegate":
            bgColor = "bg-[#5f6769]";
            hoverColor = "hover:bg-[#7fa99b]";
            break;
        case "Mint":
            bgColor = "bg-lime-600";
            hoverColor = "hover:bg-lime-500";
            break;
        case "Cancel":
            bgColor = "bg-gray-500";
            hoverColor = "hover:bg-gray-600";
            break;
        case "Burn":
            bgColor = "bg-rose-600";
            hoverColor = "hover:bg-rose-500";
            break;
        case "Normal":
            bgColor = "bg-blue-500";
            hoverColor = "hover:bg-blue-600";
            break;
        default:
            bgColor = "bg-zinc-700/50";
            hoverColor = "hover:bg-slate-600";
            break;
    }

    return (
        <button
            type="button"
            onClick={() => onClick?.(param)}
            disabled={disabled}
            className={`flex ${widthClass} items-center justify-center gap-2 rounded-lg ${bgColor} px-4 py-3 font-medium text-white transition-colors ${hoverColor} ${extraClasses}`}
        >
            {children}
        </button>
    );
};

export default GenericButton;
