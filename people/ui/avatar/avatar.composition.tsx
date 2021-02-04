import React from 'react';
import { Avatar } from './avatar';

export const AvatarExample = () => {
  return (
    <Avatar
      alt="user avatar"
      src="https://s.gravatar.com/avatar/87749023bcfc8c6237d21cf36ebb9188?rating=g&default=blank&size=122&w=122&h=122&fill=fillmax&bg=fff"
      data-testid="test-avatar"
    />
  );
};
