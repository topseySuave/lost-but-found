import React from 'react';
import { shallow, mount } from 'enzyme';
import { MainBodyContent } from '../../../views/MainBodyContent';
import { getComponent } from '../../setup';

let props;
let mountedComponent;

describe('Component: MainBodyContent', () => {
  beforeEach(() => {
    props = {
      classes: {
        container: {}
      }
    };
    mountedComponent = undefined;
  });

  it('renders properly', () => {
    const component = getComponent(mountedComponent, <MainBodyContent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
