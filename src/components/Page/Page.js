import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Page = () => {
  return (
    <div className="pz-page-container">
      <header className="pz-header">
        <h1>Header title</h1>
      </header>
      <div className="pz-page-body">
        <h1>Page body</h1>
      </div>
    </div>
  );
}

export default Page
