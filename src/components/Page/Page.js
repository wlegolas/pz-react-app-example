import PropTypes from 'prop-types';
import React from 'react';

const Page = () => (
  <div className="pz-page-container">
    <header className="pz-header">
      <h1>Header title</h1>
    </header>
    <div className="pz-page-body">
      <h1>Page body</h1>
      <div>
        <span>Content</span>
      </div>
    </div>
  </div>
);

Page.propTypes = {
  pageContext: PropTypes.shape({
    userInfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Page;
