import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import text from '../../config/text.json';

export const Socialicons = (params) => {
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
