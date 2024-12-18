import React from 'react'

const Tasks = ({title, description, deleteTask, index}) => {
  return (
    <div className='flex flex-row justify-between w-[45%] py-[22px] px-[24px] mt-[22px] rounded-3xl text-[20px] text-white bg-[#2b2b2b]'>
      <div className='flex flex-col min-h-[60px]'>
        <p>{title}</p>
        <p className='text-[#c6c6c6]'>{description}</p>
      </div>
      <button 
        onClick={() => deleteTask(index)}
        className='text-[24px] font-medium px-[24px] rounded-full bg-[#cb3737] hover:bg-[#b12e2e]'>-</button>
    </div>
  );
}

export default Tasks;