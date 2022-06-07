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
    return (
      <div className={s.Dropdown}>
        <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
          {this.state.visible ? 'скрыть' : 'показать'}
        </button>
        {this.state.visible && <div className={s.Dropdown__menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
