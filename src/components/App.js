import React from 'react';
import '../App.css';
import ProduceList from './ProduceList';
import ScheduleDay from './ScheduleDay';
import ProduceControl from './ProduceControl';

function App() {
  return (
    <React.Fragment>
      {/* <ProduceList /> */}
      <ScheduleDay />
      <ProduceControl />
    </React.Fragment>
  );
}

export default App;
