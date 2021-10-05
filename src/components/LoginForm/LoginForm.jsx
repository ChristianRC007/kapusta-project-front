import { Component } from 'react'

class LoginForm extends Component{
    state = {
        name: '',
        email: '',
        password:''
    }

    render() {
        return (
  <form className="form">
    <label className="label">
      Name
      <input
        className="input"
        type="text"
        name="name"

        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
       
      />
    </label>
    <label className="label">
      Number
      <input
        className="input"
        type="tel"
        name="number"

        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required

      />
    </label>
    <button className="button">add contacts</button>
  </form>
);
    }
}
export default LoginForm;