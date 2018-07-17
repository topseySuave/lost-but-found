import React from 'react';
import { HeaderJumbo } from '../../../views/HeaderJumbo';
import { getComponent } from '../../setup';

let props, mountedComponent, component;

describe('Component: HeaderJumbo', () => {
  beforeEach(() => {
    props = {
      classes: {
        container: {}
      }
    };
    mountedComponent = undefined;
    component = getComponent(mountedComponent, <HeaderJumbo {...props} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should open a modal when the report found item button is clicked', () => {
    const reportFoundItem = component.find('#report-found-item');
    reportFoundItem.simulate('click', {});
    expect(component.state().openReportFoundItem).toBeTruthy();
  });
});
