import Header from './components/header';
import Tasks from './components/Tasks';
import'./App.css'
import { useState } from 'react';

function App(){
  const [tasks , setTasks] = useState([
    {
        id: 1,
        text: 'Consulta médica',
        day: '5 de fevereiro as 14:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Consulta médica',
        day: '5 de fevereiro as 14:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Consulta médica',
        day: '5 de fevereiro as 14:30',
        reminder: false,
    },
] );

function deletaTarefa(id){
  setTasks(tasks.filter((task) => task.id !== id)); 
}

return (
   <div className="container">
      <Header title="tarefas" />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deletaTarefa} />
        ) : (
        'Você não tem tarefas, pode tirar férias!'
      )}
    </div>
   );
}

export default App;