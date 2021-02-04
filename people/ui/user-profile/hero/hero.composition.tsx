import React from 'react';
import { Hero } from './hero';

export const HeroExample = () => (
  <Hero
    title="Guy's profile"
    description="Guy is a hero!"
    userName="Guy"
    profileImage="https://s.gravatar.com/avatar/c8be8c21c73d7b3f6f93cda0135853ed?rating=g&default=blank&size=122&w=122&h=122&fill=fillmax&bg=fff"
    data-testid="test-hero"
  />
);
