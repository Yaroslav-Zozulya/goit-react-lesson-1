import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevStat => ({
      visible: !prevStat.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={s.Dropdown}>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'скрыть' : 'показать'}
        </button>
        {visible && <div className={s.Dropdown__menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
