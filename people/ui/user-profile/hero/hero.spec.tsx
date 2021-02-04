import React from 'react';
import { render } from '@testing-library/react';
import { HeroExample } from './hero.composition';

it('should render', () => {
  const { getByTestId } = render(<HeroExample />);
  const rendered = getByTestId('test-hero');
  expect(rendered).toBeTruthy();
});
