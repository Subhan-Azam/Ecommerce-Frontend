import React from "react";
import { SearchBtnPropsTypes } from "../../types/types";

const SearchBtn: React.FC<SearchBtnPropsTypes> = ({ style, content }) => {
  return (
    <div>
      <button className={style}>{content}</button>
    </div>
  );
};

export default SearchBtn;
