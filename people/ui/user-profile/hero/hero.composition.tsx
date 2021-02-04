import React from 'react';
import { Hero } from './hero';

export const HeroExample = () => (
  <Hero
    title="hero title"
    description="hero description"
    userName="Josh"
    profileImage="https://s.gravatar.com/avatar/87749023bcfc8c6237d21cf36ebb9188?rating=g&default=blank&size=122&w=122&h=122&fill=fillmax&bg=fff"
    data-testid="test-hero"
  />
);
