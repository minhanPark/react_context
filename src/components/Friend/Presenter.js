import React, { Fragment } from 'react';
import { Box, Avatar, Text, Button } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import Store from 'store';

const FriendPresenter = ({name, img, isPermit}) => (
  <Box
    alignItems="center"
    direction="row"
    display="flex"
    color="lightGray"
    shape="rounded"
    marginBottom={4}
    >
    <Store.Consumer>
      {store => {
        const BoxContent = !isPermit ? (
          <Fragment>
            <Box padding={1}>
              <Avatar name={name} size="md" src={img} />
            </Box>
            <Box paddingX={1} flex="grow">
              <Text bold>{name}</Text>
              <Text>님이 친구요청을 했습니다.</Text>
            </Box>
            <Box paddingX={1}>
              <Button text="수락" size="sm" color="blue" onClick={() => store.togglePermit(name)} />
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            <Box padding={1}>
              <Avatar name={name} size="md" src={img} />
            </Box>
            <Box paddingX={1} flex="grow">
              <Text bold>{name}</Text>
              <Text>님과 친구가 되었습니다.</Text>
            </Box>
            <Box paddingX={1}>
              <Button text="취소" size="sm" color="red" onClick={() => store.togglePermit(name)} />
            </Box>
          </Fragment>
        );
        return BoxContent
      }}
    </Store.Consumer>
  </Box>
);

export default FriendPresenter;
