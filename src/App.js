import logo from './logo.svg';
import './App.css';
import Login from './interfaces/login';
import Sidebar from './component/sidebar';
import { pages } from './utils/navList';
import Navigation from './component/navigation';
import { BrowserRouter, Switch, Route, Link, Routes } from 'react-router-dom';

function App() {
  const connecte = true

  return (
    connecte ?
      <BrowserRouter >
        <Routes>
          {pages.map(x => {
            return (
              <Route key={x.libelle} path={x.route} element={x.component} />
            )
          })}
        </Routes>
      </BrowserRouter >
      : <Login />
  )

}

export default App;
