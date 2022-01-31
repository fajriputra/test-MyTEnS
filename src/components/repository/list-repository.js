import React from "react";

export default function ListRepository({ visibility, name, language, url }) {
  return (
    <>
      <div className="repository-list">
        <div className="repository-list-link">
          <a href={url}>{name}</a>
          <span className="visibility">{visibility}</span>
        </div>
        <span className="language">{language}</span>
      </div>
      <hr className="line-break" />
    </>
  );
}
