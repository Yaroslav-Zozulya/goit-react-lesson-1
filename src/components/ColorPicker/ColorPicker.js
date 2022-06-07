import { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [s.option];
    if (index === this.state.activeOptionIndex) {
      optionClasses.push(s.optionActive);
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIndex];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
