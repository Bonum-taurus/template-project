import { Outlet } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <main className="app__main-content">
        <Outlet/>
      </main>
    </div>
  );
}

