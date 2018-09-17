import React from 'react';
import { Box, Icon, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import Store from 'store';

const friendNum = (profile) => {
  let Permit = [];
  // eslint-disable-next-line
  Object.keys(profile).map(name => {
    if(profile[name].isPermit){
      return Permit.push(profile[name]);
    }
  });
  return Permit.length
}

const NavPresenter = () => (
  <Box color="darkWash" display="flex" alignItems="center" padding={1} justifyContent="center" marginBottom={10}>
      <Box marginRight={1} padding={1}>
        <Icon
           icon="person"
           accessibilityLabel="Person"
           color="darkGray"
           size={32}
          />
      </Box>
      <Text align="center" size="xl" bold={true}>
        <Store.Consumer>
          {store => friendNum(store.profile)}
        </Store.Consumer>
      </Text>
  </Box>
);

export default NavPresenter;
