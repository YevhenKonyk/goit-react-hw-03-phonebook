import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styles from './ContactFilter.module.css';

const searchInputId = uuid.v4();

const ContactFilter = ({ value, onChangeFilter }) => (
  <div className={styles.search}>
    <label htmlFor={searchInputId} className={styles.label}>
      Search by name
    </label>
    <input
      type="text"
      name="filter"
      value={value}
      placeholder="Enter contact name"
      onChange={onChangeFilter}
      id={searchInputId}
      className={styles.input}
      required
    />
  </div>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
