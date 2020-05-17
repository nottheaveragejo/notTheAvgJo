import React from 'react';

import ExternalLink from '../ExternalLink';


import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink title="&copy;Lisa Jo" />
            &nbsp;
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
