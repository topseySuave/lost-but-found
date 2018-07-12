import React from 'react';
import { LoginPage } from '../../../views/LoginPage/LoginPage';
import { getComponent } from '../../setup';

let props, component, mountedComponent;

describe('Component: LoginPage', () => {
  beforeEach(() => {
    props = {
      classes: {
        container: {}
      }
    };
    mountedComponent = undefined;
    component = getComponent(mountedComponent, <LoginPage {...props} />);
  });

  it('renders properly', () => {
    const instance = component.instance();
    instance.removeCardAnimation();
    expect(component).toMatchSnapshot();
  });

  it('should be able to click the social icons', () => {
    const twitterBtn = component.find('#twitter').at(0);
    const facebookBtn = component.find('#facebook').at(0);
    const googleBtn = component.find('#google').at(0);
    const instance = component.instance();
    twitterBtn.simulate('click');
    facebookBtn.simulate('click');
    googleBtn.simulate('click');
    instance.socialButtons({ preventDefault: () => jest.fn() });
    expect(component).toMatchSnapshot();
  });
});
