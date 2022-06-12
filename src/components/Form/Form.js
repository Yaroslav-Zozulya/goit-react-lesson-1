import React, { Component } from 'react';
import shortid from 'shortid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    nickname: '',
  };

  nameId = shortid.generate();
  nicknameId = shortid.generate();

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', nickname: '' });
  };
  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label className={s.label} name={this.nameId}>
          name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChange}
            className={s.input}
            id={this.nameId}
          />
        </label>
        <label className={s.label} id={this.nicknameId}>
          nickname{' '}
          <input
            type="text"
            name="nickname"
            value={this.state.nickname}
            onChange={this.hendleChange}
            className={s.input}
            id={this.nicknameId}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
