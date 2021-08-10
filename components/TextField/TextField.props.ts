import { ReactNode } from "react";

export interface ITextField extends React.HTMLAttributes<HTMLInputElement> {
    error?: any;
    message?: string;
    label?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    name?: string;
    render: () => ReactNode;
    type?: "text" | "password" | "email" | "time";
    readonly?: boolean;
    maxLength?: number;
  }