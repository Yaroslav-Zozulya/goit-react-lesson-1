import React from 'react';

import Controls from './Controls';
import Value from './Value';

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
    const { value } = this.state;
    return (
      <div className={s.counter}>
        <Value counterValue={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
