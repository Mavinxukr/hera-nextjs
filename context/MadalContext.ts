import  { createContext, ReactNode, Dispatch, SetStateAction } from 'react';

const d = (node: ReactNode):void => {
    console.log(node);
};

export interface IModalContext{
    isOpen: boolean;
    open: () => void;
    close: () => void;
    setContent: Dispatch<SetStateAction<ReactNode>>;
    content: ReactNode | null | undefined;
}
export const ModalContext = createContext<IModalContext>({
    isOpen: false,
    open: () => console.log('open'),
    close: () => console.log('close'),
    setContent: d,
    content: null,
});