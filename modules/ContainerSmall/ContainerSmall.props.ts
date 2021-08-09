import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ContainerSmallProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}