
// Download.js
import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './Download.style.js'; // Asume que tus estilos están exportados como CSS

const DownloadButton = ({ text, ...props }) => {
  return (
    <Button {...props}>{text}</Button>
  );
};

DownloadButton.propTypes = {
  text: PropTypes.string.isRequired,
  // ... cualquier otra prop que tu botón necesite
};

export default DownloadButton;
