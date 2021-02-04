import React from 'react';
import { Hero } from './hero';

export const HeroExample = () => (
  <Hero
    title="hero title"
    description="hero description"
    userName="Josh"
    profileImage="https://s.gravatar.com/avatar/c8be8c21c73d7b3f6f93cda0135853ed?rating=g&default=blank&size=122&w=122&h=122&fill=fillmax&bg=fff"
    data-testid="test-hero"
  />
);
