//module
import { Component } from 'react'
import {connect} from 'react-redux'
//component
import {authOperations} from '../../redux/auth'
//style
import styles from './LoginForm.module.css'
class LoginForm extends Component{
    state = {
        name: '',
        email: '',
        password:''
    }
  
    handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name:'',email:'',password:''  });
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
      <div className={styles.container_form}>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
    <div className={styles.container_google}>
      <p className={styles.text}>
        Вы можете авторизоваться с помощью <br />
        Google Account:
      </p>
      <button className={styles.button_google}>Google</button>
    </div>

    <div className={styles.container_input}>
      <p className={styles.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <label className={styles.label}>
        Имя:
        <input
          className={styles.input}
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

      <label className={styles.label}>
       Электронная почта:
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          title="Введите свою пошту."
          required
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Пароль:
        <input
          className={styles.input}
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
    
    <div className={styles.button_container}>
      <button className={styles.button_enter}>Войти</button>
      <button className={styles.button_regist}>Регистрация</button>
    </div>
    
  </form>
</div>
        );
    }
}

const mapDispatchToProps = {
  onLogin:authOperations.register
}

export default connect(null,mapDispatchToProps)(LoginForm);