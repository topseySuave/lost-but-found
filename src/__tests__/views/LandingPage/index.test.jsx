import React from 'react';
import { LandingPage } from '../../../views/LandingPage';
import { getComponent } from '../../setup';

let props;
let mountedComponent;

describe('Component: LandingPage', () => {
  beforeEach(() => {
    props = {
      classes: {
        container: {}
      }
    };
    mountedComponent = undefined;
  });

  it('renders properly', () => {
    const component = getComponent(mountedComponent, <LandingPage {...props} />);
    expect(component).toMatchSnapshot();
  });
});
