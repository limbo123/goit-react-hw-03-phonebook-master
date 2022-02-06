import React from "react";
import propTypes from "prop-types";

import styles from "./ContactForm.module.css";

class ContactForm extends React.Component {
  static propTypes = {
    createForm: propTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.createForm(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <section>
        <form className={styles.form} onSubmit={this.onFormSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
          {/* <br />
          <br /> */}
          <label htmlFor={this.numberInputId}>Number</label>

          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
          {/* <br />
          <br /> */}
          <button type="submit">Create</button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
