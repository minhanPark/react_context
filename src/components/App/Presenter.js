import React, { Fragment } from 'react';
import NavContainer from 'components/Nav';
import FriendContainer from 'components/Friend';
import './App.css';

const Presenter = () => (
  <Fragment>
    <NavContainer />
    <div className="friend-line">
      <FriendContainer />
    </div>
  </Fragment>
);

export default Presenter;
