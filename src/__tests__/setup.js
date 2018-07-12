import Enzyme, { shallow, mount } from 'enzyme';
import jsdom from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();

virtualConsole.sendTo(console);

const { window } = new JSDOM('', { virtualConsole });

export const getComponent = (mountedComponent, Component, render = null) => {
  if (!mountedComponent) {
    mountedComponent = (render === 'mount')
      ? mount(Component) : shallow(Component);
  }
  return mountedComponent;
};
