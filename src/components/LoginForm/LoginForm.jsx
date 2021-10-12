//module
import { Component } from 'react';
import { connect } from 'react-redux';
import MainButton from '../MainButton';

import { authOperations } from '../../redux/auth';
import GoogleAuth from '../GoogleAuth';

class LoginForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    emptyFieldName: false,
    emptyFieldEmail: false,
    emptyFieldPassword: false,
  };

  handleRegister = e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (!name) {
      this.setState({ emptyFieldName: true });
    }
    if (!email) {
      this.setState({ emptyFieldEmail: true });
    }
    if (!password) {
      this.setState({ emptyFieldPassword: true });
    }

    if (name && email && password) {
      this.setState({
        emptyFieldName: false,
        emptyFieldEmail: false,
        emptyFieldPassword: false,
      });

      this.props.onRegister(this.state);
      this.setState({ name: '', email: '', password: '' });
    }
  };
  handleLogin = e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (!name) {
      this.setState({ emptyFieldName: true });
    }
    if (!email) {
      this.setState({ emptyFieldEmail: true });
    }
    if (!password) {
      this.setState({ emptyFieldPassword: true });
    }
    if (name && email && password) {
      this.setState({
        emptyFieldName: false,
        emptyFieldEmail: false,
        emptyFieldPassword: false,
      });

      this.props.onLogin({ name, email, password });
      this.setState({ name: '', email: '', password: '' });
    }
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    const {
      emptyFieldName,
      emptyFieldEmail,
      emptyFieldPassword,
      name,
      email,
      password,
    } = this.state;
    const { handleChange } = this;

    return (
      <div className="container_form">
        <form className="form" autoComplete="off">
          <div className="container_google">
            <p className="text">
              Вы можете авторизоваться с помощью <br />
              Google Account:
            </p>

            <GoogleAuth />
          </div>

          <div className="container_input">
            <p className="text">
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </p>
            <label className="label">
              {!emptyFieldName ? '' : <sup className="form__star">*</sup>}
              Имя:
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                placeholder="Ваше имя"
                required
                minLength="3"
                onChange={handleChange}
              />
              {!emptyFieldName ? (
                ''
              ) : (
                <p className="form__attention-text">это обязательное поле</p>
              )}
            </label>

            <label className="label">
              {!emptyFieldEmail ? '' : <sup className="form__star">*</sup>}
              Электронная почта:
              <input
                className="input"
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={email}
                placeholder="your@email.com"
                title="Введите свою пошту."
                required
                onChange={handleChange}
              />
              {!emptyFieldEmail ? (
                ''
              ) : (
                <p className="form__attention-text">это обязательное поле</p>
              )}
            </label>

            <label className="label">
              {!emptyFieldPassword ? '' : <sup className="form__star">*</sup>}
              Пароль:
              <input
                className="input"
                onChange={handleChange}
                type="password"
                name="password"
                value={password}
                placeholder="Пароль"
                title="Пароль больше 6-ти символов"
                required
                minLength="6"
              />
              {!emptyFieldPassword ? (
                ''
              ) : (
                <p className="form__attention-text">это обязательное поле</p>
              )}
            </label>
          </div>

          <div className="button_container">
            <MainButton
              type="submit"
              text="Войти"
              className="register-btn mr-15"
              accent
              onClick={this.handleLogin}
              disable="sd"
            />
            <MainButton
              type="submit"
              text="Регистрация"
              className="register-btn"
              onClick={this.handleRegister}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(LoginForm);
