
import { useState, useCallback, ReactNode } from 'react';
import { IModalContext } from '../context/MadalContext';

export const useModal = ():IModalContext => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {  
    setIsOpen(false);
  }, []);
  
  return { isOpen, open, close, setContent, content };
};