import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.scss';
import './Button.scss';

let cx = classNames.bind(styles);

class Button extends Component {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    routeTo: PropTypes.string,
    linkTo: PropTypes.string,
    goBack: PropTypes.bool,
    disabled: PropTypes.bool,
    noborder: PropTypes.bool,
    buttonGold: PropTypes.bool,
    buttonWhite: PropTypes.bool,
    width: PropTypes.oneOfType ([PropTypes.string , PropTypes.number ]) // optional fixed min width
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  handleClick = () => {
    if (this.props.routeTo) this.props.history.push(this.props.routeTo);
    if (this.props.goBack) this.props.history.goBack();
    if (this.props.onClick) this.props.onClick();
    if (this.props.linkTo) {
      window.open(this.props.linkTo);
    }
  };

  render() {

    let buttonClassNames = cx({
      white: this.props.label === 'Cancel' || this.props.label === '< Back' || this.props.buttonWhite,
      active: this.props.active,
      disabled: this.props.disabled,
      no_border: this.props.noborder,
      gold: this.props.buttonGold,
      icon: this.props.icon
    });

    let buttonTextClassNames = cx({
      buttonText: this.props.disabled,
      disabledText: this.props.disabled
    });

    return (
      <button
        style={{ minWidth: this.props.width ? this.props.width : 0 }}
        className={`button ${buttonClassNames ? 'button--'+buttonClassNames : ''}`}
        onClick={this.props.disabled ? null : this.handleClick}
      >
        <div
          className={buttonTextClassNames}
        >
          {this.props.icon && <i className={'fa ' + this.props.icon} />}
          {this.props.label ? this.props.label : null}
        </div>
      </button>
    );
  }
}

export default Button;