import React, { Component } from 'react';
import Presenter from './Presenter';
import Store from 'store';

class Container extends Component {
  constructor(props){
    super(props);
    this.state= {
      togglePermit: this._togglePermit,
      profile: {
        madeleine: {
          name:"madeleine",
          img:"https://randomuser.me/api/portraits/med/women/94.jpg",
          isPermit: false,
        },
        cindy: {
          name:"cindy",
          img:"https://randomuser.me/api/portraits/med/women/22.jpg",
          isPermit: false,
        },
        florence: {
          name:"florence",
          img: "https://randomuser.me/api/portraits/med/women/92.jpg",
          isPermit: false,
        },
        louis:{
          name:"louis",
          img: "https://randomuser.me/api/portraits/med/men/5.jpg",
          isPermit: false
        },
        dennis: {
          name: "dennis",
          img:"https://randomuser.me/api/portraits/med/men/19.jpg",
          isPermit: false
        }
      }
    }
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <Presenter />
      </Store.Provider>
    );
  }
  _togglePermit = (name) => {
    this.setState(prevState => {
      return {
        ...prevState,
        profile: {
          ...prevState.profile,
          [name]: {
              ...prevState.profile[name],
              isPermit: !prevState.profile[name].isPermit
          }
        }
      }
    })
  }
}
// profile: {
//   madeleine: {
//     name:"madeleine",
//     img:"https://randomuser.me/api/portraits/med/women/94.jpg",
//     isPermit: false,
//   },
//   cindy: {
//     name:"cindy",
//     img:"https://randomuser.me/api/portraits/med/women/22.jpg",
//     isPermit: false,
//   },
//   florence: {
//     name:"florence",
//     img: "https://randomuser.me/api/portraits/med/women/92.jpg",
//     isPermit: false,
//   }
export default Container;
