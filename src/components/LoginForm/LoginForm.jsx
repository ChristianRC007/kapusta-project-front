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
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    const { name, email, password } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div className="container_form">
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
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
              Имя:
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                placeholder="Petr Ivanovich"
                required
                minLength="3"
                onChange={handleChange}
              />
            </label>

            <label className="label">
              Электронная почта:
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                placeholder="your@email.com"
                title="Введите свою пошту."
                required
                onChange={handleChange}
              />
            </label>

            <label className="label">
              Пароль:
              <input
                className="input"
                onChange={handleChange}
                type="password"
                name="password"
                value={password}
                placeholder="********"
                title="Пароль больше 6-ти символов"
                required
                minLength="6"
              />
            </label>
          </div>

          <div className="button_container">
            <MainButton
              type="submit"
              text="Войти"
              className="register mr-15"
              accent
            />
            <MainButton type="submit" text="Регистрация" className="register" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.register,
};

export default connect(null, mapDispatchToProps)(LoginForm);
