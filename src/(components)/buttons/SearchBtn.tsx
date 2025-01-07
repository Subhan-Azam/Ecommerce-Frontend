import React from "react";
interface SearchBtnPropsTypes {
  style: String;
  content: String;
}

const SearchBtn: React.FC<SearchBtnPropsTypes> = ({ style, content }) => {
  return (
    <div>
      <button className={style}>{content}</button>
    </div>
  );
};

export default SearchBtn;
