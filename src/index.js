import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Button from "./components/Button/Button";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";
import Progress from "./components/Progress/Progress";

const App = () => {
  const [percent, setPercent] = useState(0);

  const interval = setInterval( () => {
    if (percent >= 100) {
      setPercent(0);
    } else {
      setPercent( percent + 10);
    }
    clearInterval(interval)
  }, 1000)

  return (
    <div>
      <div>
        <h2>Типы кнопок</h2>
        <Button>Normal</Button>
        <Button mode={'secondary'}>Secondary</Button>
        <Button mode={'success'}>Success</Button>
        <Button mode={'danger'}>Danger</Button>
      </div>
      <div>
        <h2>Размеры кнопок</h2>
        <Button>Normal</Button>
        <Button size={'small'}>small</Button>
        <Button size={'normal'}>normal</Button>
        <Button size={'extra'}>extra</Button>
      </div>
      <div>
        <h2>Счётчик в кнопке</h2>
        <Button counter={42}>Счётчик</Button>
        <Button counter={0}>Счётчик</Button>
      </div>
      <div>
        <h2>Доп параметры</h2>
        <Button disabled={true}>disabled</Button>
      </div>

      <div>
        <h2>Группировака комнонентов (ButtonsGroup)</h2>
        <ButtonsGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Rigth</Button>
        </ButtonsGroup>
      </div> 
      <div>
        <h2>Progress bar</h2>
        <Progress percent={percent} />
      </div>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
