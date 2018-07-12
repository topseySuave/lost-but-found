import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Divider from '@material-ui/core/Divider';

// core components
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

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

export class MainBodyContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <span style={style.columnText}>
              <h2 style={style.alignCenter}>
                <i
                  className="fas fa-book"
                  style={{ ...style.iconFont, ...style.info }}
                />
              </h2>
              <h3 style={style.alignCenter}>Why?</h3>
              Providing assistance to guests saves them the running around and
              the time it would take to find information and arrange shipping if
              they were to deal with lost item recovery themselves. As for the
              establishments, we automate the process for their lost and found
              department, letting them focus on the primary concerns of their
              business. We cut down time and cost for both parties.
            </span>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <span style={style.columnText}>
              <h2 style={style.alignCenter}>
                <i
                  className="fas fa-clock"
                  style={{ ...style.iconFont, ...style.success }}
                />
              </h2>
              <h3 style={style.alignCenter}>When?</h3>
              The process begins as soon as a guest loses an item. The
              establishment logs all retrieved items in our cloud-based system.
              When the customer makes an inquiry, our software finds the
              matching item and immediately initiates the process for shipping
              it back to its owner. We pride ourselves on returning lost items
              promptly and reliably.
            </span>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <span style={style.columnText}>
              <h2 style={style.alignCenter}>
                <i
                  className="fas fa-box-open"
                  style={{ ...style.iconFont, ...style.danger }}
                />
              </h2>
              <h3 style={style.alignCenter}>How?</h3>
              The process is very simple. We are the facilitators between the
              establishments (airlines, car rental agencies, hotels, etc.) and
              the guest. Once the guest contacts the establishment, the
              establishment refers him or her to our website and we arrange for
              the lost item's return.
            </span>
          </GridItem>
          <GridItem>
            <span style={{ ...style.columnText, ...style.alignCenter }}>
              <h5 style={style.bold}>
                “You Lose It, They Find It, We Deliver It”
              </h5>
            </span>
          </GridItem>
        </GridContainer>
        <Divider />
        <GridContainer>
          <GridItem>
            <span style={{ ...style.columnText }}>
              <h5 style={{ ...style.bold }}>Statistics</h5>
              <p>
                <b>Nigeria</b>: {'999999999'} found items - {'99999999'} Lost
                Items
              </p>
              <p>
                <b>World Wide</b>: {'999999999'} found items - {'99999999'} Lost
                Items
              </p>
            </span>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(MainBodyContent);
