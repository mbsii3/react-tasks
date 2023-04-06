import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import NewTaskPage from '../NewTaskPage/NewTaskPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import * as tasksService from "../../utilities/tasks-service";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [tasks, setTasks] = useState([]);

  useEffect(function() {
    async function getTasks() {
        const allTasks = await tasksService.index();
        setTasks(allTasks);
    }
    getTasks();
}, []);


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/tasks/new' element={<NewTaskPage />}></Route>
            <Route path='/tasks' element={<OrderHistoryPage tasks={tasks} />}></Route>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
