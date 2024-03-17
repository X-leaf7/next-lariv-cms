"use client"; 
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const Social_share = () => {
  let current_url = window.location.href;

  return (
    <div className=" mt-[30px] flex  justify-center gap-3">
      <div className="block">
        <FacebookShareButton url={current_url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </div>
      <div className="block">
        <LinkedinShareButton url={current_url}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </div>
      <div className="block">
        <RedditShareButton url={current_url}>
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
      </div>
      <div className="block">
        <TwitterShareButton url={current_url}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Social_share;
