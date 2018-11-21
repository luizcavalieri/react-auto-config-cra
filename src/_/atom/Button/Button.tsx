import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as classNames from 'classnames/bind';
import * as styles from './Button';
import './Button.scss';

// let cx = classNames.bind(styles);

export interface ButtonProps {
  label: string,
  icon: string,
  onClick: any,
  routeTo: string,
  goBack: boolean,
  linkTo: string
  disabled: boolean,
  noborder: boolean,
  buttonGold: boolean,
  buttonWhite: boolean,
  active: boolean,
  width: any // optional fixed min width
}

class Button extends Component<ButtonProps, {}> {


  constructor(props: ButtonProps, context: any, handleClick: () => void) {
    super(props, context);
    this.handleClick = handleClick;
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  handleClick = () => {
    if (this.props.routeTo) {
      // this.props.history.push(this.props.routeTo);
    }
    if (this.props.goBack) {
      // this.props.history.goBack();
    }
    if (this.props.onClick) this.props.onClick();
    if (this.props.linkTo) {
      window.open(this.props.linkTo);
    }
  };

  render() {

    let buttonClassNames = {
      white: this.props.label === 'Cancel' || this.props.label === '< Back' || this.props.buttonWhite,
      active: this.props.active,
      disabled: this.props.disabled,
      no_border: this.props.noborder,
      gold: this.props.buttonGold,
      icon: this.props.icon
    };

    let buttonTextClassNames = {
      buttonText: this.props.disabled,
      disabledText: this.props.disabled
    };

    return (
      <button
        style={{ minWidth: this.props.width ? this.props.width : 0 }}
        className={`button ${buttonClassNames ? 'button--' + buttonClassNames : ''}`}
        // onClick={this.props.disabled ? null : this.handleClick}
      >
        <div
          // className={buttonTextClassNames}
        >
          {this.props.icon && <i className={'fa ' + this.props.icon} />}
          {this.props.label ? this.props.label : null}
        </div>
      </button>
    );
  }
}

export default Button;