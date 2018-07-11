import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui components
import withStyles from 'material-ui/styles/withStyles';
// core components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import Headerjumbo from '../HeaderJumbo';
import MainBodyContent from '../MainBodyContent';

import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage';

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <React.Fragment>
        <Header
          color='transparent'
          routes={dashboardRoutes}
          brand='Lost but Found'
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'info'
          }}
          {...rest}
        />
        <Parallax filter image={require('../../assets/img/landing-bg.jpg')}>
          <Headerjumbo />
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <MainBodyContent />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
