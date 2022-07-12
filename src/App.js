import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting/Greeting';
import { fetchMessage } from './redux/Greeting/Greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchMessage()), []);
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default App;
