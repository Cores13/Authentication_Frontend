import React from 'react';
import './PrivateLayout.scss';

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = (props: Props) => {
  return (
    <div className="private-layout">
      <div className="menu-wrapper">
        <div className="page-content">{props.children}</div>
      </div>
    </div>
  );
}

export default PrivateLayout;