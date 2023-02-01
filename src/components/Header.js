import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = ({profile}) => {
  return (
    <header>
      <svg width="950px" height="275px" class="top-left">
      <path
            d="M 0 0 L 950 0 L 950 40 L 925 65 L 0 65"
            fill="#BBBBBB77"
            stroke="#BBBBBB77"
          />
      </svg>
      <svg width="650px" height="275px" class="top-left">
      <path
            d="M 0 0 L 650 0 L 650 40 L 570 165 L 255 165 L 245 185 L 245 205 L 180 265 L 0 265"
            fill="#BBBBBB77"
            stroke="#BBBBBB77"
          />
      </svg>
      <svg width="1375px" height="100px" class="bottom-right">
      <path
            d="M 60 50 L 1100 50 L 1150 0 L 1325 0 L 1375 50 L 1375 75 L 1355 95 L 35 95 L 35 89 L 60 50"
            fill="#BBBBBB77"
            stroke="#BBBBBB77"
          />
      </svg>
      <div id="header-logo-block">
        <img id="DP-ring" alt="dp-border" />
        <img id="DP" src="images/dp.jpg" alt="dp" />
      </div>
      <div className="header-block-strip" id="name-strip"> {profile.name}</div>
      <div className="header-block-strip" id="email-strip"><FontAwesomeIcon icon={faEnvelope} /> {profile.email}</div>
      <div className="header-block-strip" id="phone-strip"><FontAwesomeIcon icon={faPhone} /> {profile.phone}</div>
      <div className="header-block-strip" id="github-strip"><FontAwesomeIcon icon={faGithub} /> {profile.github}</div>
    </header>
  );
};

export default Header;
