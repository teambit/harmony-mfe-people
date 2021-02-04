import React from 'react';
import { Avatar } from './avatar';

export const AvatarExample = () => {
  return (
    <Avatar
      alt="user avatar"
      src="https://s.gravatar.com/avatar/73b1eb2c6b5acfe3f196b19d70f1a902?rating=g&default=blank&size=122&w=122&h=122&fill=fillmax&bg=fff"
      data-testid="test-avatar"
    />
  );
};
