import React from 'react';

const ContactLink = (props) => {
  return (
    <div className="logo">
      <button
        className="ui icon animated button"
        onClick={() => props.link}
        referrerPolicy="no-referrer no-opener"
      >
        <div className="visible content">{props.logo}</div>
        <div className="hidden content">
          <i className="angle right icon"></i>
        </div>
      </button>
    </div>
  );
};

export default ContactLink;
