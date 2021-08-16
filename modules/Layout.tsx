import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { Footer } from "./Footer/Footer";
import { Provider } from "react-redux";

import { store } from "../toolkitRedux/store/store";
import { ModalContext } from "../context/MadalContext";
import { useModal } from "../hooks/modal.hooks";
import { Modal } from "./Modal/Modal";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { isOpen, open, close, setContent, content } = useModal();

  useEffect(() => {
    console.log(isOpen);
  }, []);
  return (
    <ModalContext.Provider value={{ isOpen, open, close, setContent, content }}>
      <div className={styles.wrapper}>
        <main className={styles.body} ref={bodyRef} tabIndex={0} role="main">
          {children}
        </main>
        <Footer className={styles.footer} />
      </div>
      {isOpen && <Modal />}
    </ModalContext.Provider>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...props} />
        </Layout>
      </Provider>
    );
  };
};
