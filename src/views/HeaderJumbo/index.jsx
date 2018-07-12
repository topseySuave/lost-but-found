import React from 'react';
// material-ui components
import withStyles from 'material-ui/styles/withStyles';

import IntegrationAutosuggest from '../../components/CustomInput/AutoComplete';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';

import landingPageStyle from '../../assets/jss/material-kit-react/landingPage';
import {
  infoColor,
  dangerColor,
  successColor
} from '../../assets/jss/material-kit-react';

const style = {
  marginRight: '10px',
  columnText: {
    color: 'black',
    padding: '10px',
    textAlign: 'justify'
  },
  iconFont: {
    fontSize: '3rem',
    textAlign: 'center'
  },
  alignCenter: {
    textAlign: 'center'
  },
  padContainer: {
    padding: '5rem 0rem'
  },
  bold: {
    fontWeight: 'bolder'
  },
  info: {
    color: infoColor
  },
  success: {
    color: successColor
  },
  danger: {
    color: dangerColor
  }
};

export class HeaderJumbo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Did you lose or Found an item?</h1>
            <h4>
              Lost but found helps people easily find and report an item they
              lost. All you need to do is report it.
            </h4>
            <br />
            <Button color="danger" size="lg" href="#">
              <i style={{ ...style }} className="fas fa-flag" /> Report Lost
              Item
            </Button>{' '}
            <Button color="info" size="lg" href="#">
              <i style={{ ...style }} className="fas fa-flag" /> Report Found
              Item
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Search for an item you lost</h1>
            <Card
              style={{
                padding: '20px',
                maxHeight: '100px',
                backgroundColor: 'rgba(255, 255, 255, .5)'
              }}
            >
              <IntegrationAutosuggest />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(HeaderJumbo);
