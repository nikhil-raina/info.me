import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from '../WelcomeScreen';

describe('Rendering basic demo screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(
      <WelcomeScreen name={'World'} enthusiasmLevel={1} />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
