import React, { useState } from 'react'




const Todolist = ()=> {

const [task, setTask] = useState(["Order lunch", "meet elon musk"]);
const [newTask, setNewtask] = useState("");

function inputChange(event){
 setNewtask(event.target.value)
}
function addTask(){
    if(newTask.trim() !== ""){
        setTask((c)=> [...task, newTask]);
        setNewtask("")
    }
 
}
function deleteTask (index) {
  const newt =  task.filter((_, i) => i  !== index);
  setTask(newt);
}
function taskUp (index){
if (index > 0 ){
    const newarr = [...task];
    [newarr[index], newarr[index-1]] = [newarr[index-1], newarr[index]]
  setTask(newarr)
}
}
function taskDown(index){
    if (index < task.length - 1){
    const newarr = [...task];
    [newarr[index], newarr[index+1]] = [newarr[index+1], newarr[index]]
  setTask(newarr)}
}

return (
<>
<div className='tdl'>

<h1 className='th1'>TASK TRACKER 📝</h1>
<ol>{task.map((c, index)=>
<li className='fine' key = {index}>
    <span>{c}</span>
    <button className='butt2' onClick={()=> deleteTask(index)}>❌</button>
    <button className='butt2' onClick={()=> taskUp(index)}>☝</button>
    <button className='butt2' onClick={()=> {taskDown(index)}}>👇</button>


</li>
    )}</ol>
<div>
    <input type='text' id ='boom' placeholder='    enter a task'  value={newTask} onChange={inputChange}/>
    <button className='butt1' onClick={addTask}>ADD</button>

</div>
</div>
</>
)
}

export default Todolist