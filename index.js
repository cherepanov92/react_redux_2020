import React from 'react';
import ReactDOM from 'react-dom';

const text = React.createElement('p',{}, "Первый текст...");
ReactDOM.render(text, document.getElementById('root'));