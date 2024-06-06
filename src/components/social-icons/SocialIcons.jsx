import React from "react";
import { FaFacebookF } from "react-icons/fa";
import text from '../../config/text.json';
import "./SocialIcons.css";

const SocialIcons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {text.links.facebook && (
          <li>
            <a href={text.links.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
      </ul>
      <p>{text.sidebar.follow_us}</p>
    </div>
  );
};

export default SocialIcons;