import React from 'react';
import ReactDOM from 'react-dom';

import Button from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button>Normal</Button>
        <Button mode={'secondary'}>Secondary</Button>
        <Button mode={'success'}>Success</Button>
        <Button mode={'danger'}>Danger</Button>
      </div>
      <div>
        <Button>Normal</Button>
        <Button size={'small'}>small</Button>
        <Button size={'normal'}>normal</Button>
        <Button size={'extra'}>extra</Button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
