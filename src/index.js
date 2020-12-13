import React from 'react';
import ReactDOM from 'react-dom';

import Button from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button mode={"secondary"}>Secondary</Button>
      <Button mode={"success"}>Success</Button>
      <Button mode={"danger"}>Danger</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
