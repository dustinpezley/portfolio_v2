import React from 'react';

const ContactLink = (props) => {
  return (
    <div className="logo">
      <button
        className="ui icon animated fade button"
        onClick={() => props.link}
        referrerPolicy="no-referrer no-opener"
        tabIndex="0"
        id="logo-button"
      >
        <div className="visible content" id="logo-link">
          {props.logo}
        </div>
        <div className="hidden content" id="logo-arrow">
          <i className="angle right icon"></i>
        </div>
      </button>
    </div>
  );
};

export default ContactLink;
