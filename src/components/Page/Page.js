import PropTypes from 'prop-types';
import React from 'react';
import { Header } from './components/Header';

const Page = ({ pageContext}) => (
  <div className="pz-page-container">
    <Header userInfo={ pageContext.userInfo } />
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
