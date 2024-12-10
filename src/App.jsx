import './App.css';
import Title from './components/title';
import Counter from './components/counter';

import NewYear from "./assets/R.jpg";
import useCountdown from './hooks/useCountdown';

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2026 00:00:00");

  return (
    <div className='App' style={{ backgroundImage: `url(${NewYear})`}}>
      <div className='container'>
        <Title title="Contagem regressiva para 2026" />
        <div className='countdown-container'>
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App;
