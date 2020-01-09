import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', phone: '' };

  nameInputId = uuid.v4();

  phoneInputId = uuid.v4();

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAddContact } = this.props;

    onAddContact({ name, phone });
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ name: '', phone: '' });
  }

  render() {
    const { name, phone } = this.state;

    return (
      <>
        <h2 className={styles.title}>Phonebook</h2>
        <form
          name="phonebook"
          onSubmit={this.handleSubmit}
          className={styles.form}
        >
          <label htmlFor={this.nameInputId} className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
            className={styles.input}
            required
          />
          <label htmlFor={this.phoneInputId} className={styles.label}>
            Phone (format: xxx-xx-xx)
          </label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="xxx-xx-xx"
            required
            name="phone"
            value={phone}
            onChange={this.handleInputChange}
            id={this.phoneInputId}
            className={styles.input}
          />
          <button
            type="submit"
            title="Add contact"
            className={styles.submitBtn}
            disabled=""
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = { onAddContact: PropTypes.func.isRequired };

export default ContactForm;
