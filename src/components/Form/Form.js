import React, { Component } from 'react';
import shortid from 'shortid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    nickname: '',
    experience: 'junior',
    license: false,
  };

  nameId = shortid.generate();
  nicknameId = shortid.generate();

  hendleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = e => {
    this.setState({ license: e.currentTarget.checked });
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', nickname: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit} className={s.form}>
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

        <p>Ваш уровень:</p>
        <label className={s.label}>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.hendleChange}
            className={s.radio}
          />
          Junior
        </label>
        <label className={s.label}>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.hendleChange}
            className={s.radio}
          />
          Middle
        </label>
        <label className={s.label}>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.hendleChange}
            className={s.radio}
          />
          Senior
        </label>

        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleCheckboxChange}
            className={s.checkbox}
          />
          I'm agree with license politics
        </label>

        <button
          type="submit"
          disabled={!this.state.license}
          className={s.button}
        >
          Send
        </button>
      </form>
    );
  }
}

export default Form;
