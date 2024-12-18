import React, { useEffect, useState } from 'react';
import Tasks from './Tasks';

const Home = () => {
  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")): [];

  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks,{title: title, description: description}]);
  }


  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((val,i) => {
      return i !== index;
    });
    setTasks(filteredTasks);
  }

  useEffect(() => {

    localStorage.setItem("tasks",JSON.stringify(tasks));

  }, [tasks]);

  return (
    <div className='flex flex-col items-center min-h-[94vh] bg-[#f3f1a6]'>
        <form className='flex flex-col items-center mt-[50px]' onSubmit={handleSubmit}>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text" 
              placeholder='Title'
              className='w-[600px] p-[16px] border-[4px] rounded-full border-[#2b2b2b]'
            />
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description" 
              placeholder='Description' 
              className='my-[20px] w-[600px] p-[18px] border-[4px] rounded-full border-[#2b2b2b]'>
            </textarea>
            <button className='text-[20px] font-semibold w-[250px] text-white py-[16px] rounded-full bg-[#2b2b2b] hover:bg-[#1a1a1a] border-white border-[3px] shadow-[4px_4px_#2b2b2b] hover:shadow-[4px_4px_#1a1a1a]'>ADD</button>
        </form>
        {tasks.map((item, index) => (
          <Tasks 
            key={index} 
            title={item.title} 
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
    </div>
  )
}

export default Home;