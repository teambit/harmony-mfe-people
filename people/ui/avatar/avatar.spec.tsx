import React from 'react';
import { render } from '@testing-library/react';
import { AvatarExample } from './avatar.composition';

it('should render', () => {
  const { getByTestId } = render(<AvatarExample />);
  const rendered = getByTestId('test-avatar');
  expect(rendered).toBeTruthy();
});
