import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ item, onDelete }) => (
  <div className={styles.task}>
    <p className={styles.itemText}>{item.name}</p>
    <p className={styles.itemText}>{item.phone}</p>
    <div className={styles.actions}>
      <button type="button" onClick={onDelete}>
        Remove
      </button>
    </div>
  </div>
);

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
