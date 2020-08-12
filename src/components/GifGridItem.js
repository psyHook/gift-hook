import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <>
      <div className="card mt-4 animate__animated animate__fadeInUpBig">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body ar">
          <h5 className="card-title">{title}</h5>
        </div>
        <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">Ver</a>
      </div>
    </>
  );
};
