import Button from './Button';

function App(props) {
  return (
    <>
      <h2>Timer</h2>
      <TimerOnDisplay />
      <Button name="Start" />
      <Button name="Wait" />
      <Button name="Restart" />
    </>
  );
}

function TimerOnDisplay() {
  return (
    <>
      <div className="time">
        <span className="hours">00</span>
        <span className="minutes">00</span>
        <span className="seconds">00</span>
      </div>
    </>
  );
}

export default App;
