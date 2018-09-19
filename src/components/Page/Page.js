import PropTypes from 'prop-types';
import React from 'react';
import { Header } from './components/Header';
import PageBody from './components/PageBody/PageBody';

const Page = ({ pageContext}) => (
  <div className="pz-page-container">
    <Header userInfo={ pageContext.userInfo } />
    <PageBody />
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
