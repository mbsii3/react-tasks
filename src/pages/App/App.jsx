import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import NewTaskPage from '../NewTaskPage/NewTaskPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';


export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/tasks/new' element={<NewTaskPage />}></Route>
            <Route path='/tasks' element={<OrderHistoryPage />}></Route>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
