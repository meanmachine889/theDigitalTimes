import React from "react";
import defaultImage from "./news1.jpg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  const imageSource = imageUrl || defaultImage;

  return (
    <div className="my-3">
      <div className="card rounded-0 shadow-xl border-1 border-black" style={{ backgroundColor: 'transparent' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        ></div>
        <img
          src={imageSource}
          className="card-img-top grayscale rounded-0"
          alt="..."
        />
        <div className="card-body rounded-0">
          <h5 className="card-title headline">{title} </h5>
          {/* <p className="card-text">{description}</p> */}
          <p className="card-text mt-3 flex">
            <small className="text-muted">
              {!author ? "Unknown" : author}
              <br></br>
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="text-black"
          >
            <span class="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
