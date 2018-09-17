import React, { Component, Fragment } from 'react';
import Store from 'store';
import FriendPresenter from './Presenter';

class FriendContainer extends Component {
  render() {
    return (
      <Fragment>
        <Store.Consumer>
          {store => {
            return Object.keys(store.profile).map((name, index) => (
              <FriendPresenter
                name={store.profile[name].name}
                key={index}
                img={store.profile[name].img}
                isPermit={store.profile[name].isPermit}
                 />
            ))
          }}
        </Store.Consumer>
      </Fragment>
    );
  }
}

export default FriendContainer;
