import React, { useState } from "react";
import TextField from "../TextField/TextField";
import styles from "./Search.module.css";
import SearchIcon from "../../public/svg/search.svg";
import cn from "classnames";

interface ISearch {
  changeHandle: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Search = ({ changeHandle }: ISearch) => {
  const [focus, setFocus] = useState(false);

  return (
    <TextField
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      type="text"
      onChange={changeHandle}
      placeholder={!focus ? "Search" : ""}
      className={cn(styles.search, {
        [styles.appearance]: focus,
      })}
      render={() => (
        <SearchIcon
          className={cn({
            [styles.appearance]: focus,
          })}
        />
      )}
    />
  );
};
