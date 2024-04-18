import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/home/HomePage';

export const RootRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}