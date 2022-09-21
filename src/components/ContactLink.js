import React from 'react';

const ContactLink = (props) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <div className="logo">
      <button
        className="ui icon animated fade button"
        onClick={() => openInNewTab(props.link)}
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
