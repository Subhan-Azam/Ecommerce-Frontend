import React from "react";

export default function SearchBtn({ style, content }) {
  return (
    <div>
      <button className={style}>{content}</button>
    </div>
  );
}
