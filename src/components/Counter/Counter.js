import React from 'react';

import s from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 1, // Дефолтные значения пропсов
  };

  static propTypes = {
    // описание пропсов
  };

  // constructor() {
  //   super();

  //   this.state = {
  //     value: 5,
  //   };
  // }

  state = {
    value: this.props.initialValue,
  };

  // handleIncrement = () => {
  //   this.setState({ value: 10 });
  // };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className={s.counter}>
        <span className={s.counterValue}>{this.state.value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
