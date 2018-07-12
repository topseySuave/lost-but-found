import React from 'react';
import { HeaderJumbo } from '../../../views/HeaderJumbo';
import { getComponent } from '../../setup';

let props;
let mountedComponent;

describe('Component: HeaderJumbo', () => {
  beforeEach(() => {
    props = {
      classes: {
        container: {}
      }
    };
    mountedComponent = undefined;
  });

  it('renders properly', () => {
    const component = getComponent(mountedComponent, <HeaderJumbo {...props} />);
    expect(component).toMatchSnapshot();
  });
});
