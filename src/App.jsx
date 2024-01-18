import React from 'react'
import Sidebar from './Components/Sidebar'
import AppBody from './Components/AppBody'
import Header from './Components/Header'
import List from './Components/List'
import './App.css'

function App() {
  const [listData, setListData] = React.useState([]);
  const [listIndex, setListIndex] = React.useState(0)

  React.useEffect(() => {
    // setListData(data.lists);
  }, [])
  
  //takes in an ID of a list, and finds its index
  function getIndex(id) {
    return listData.findIndex(list => list.id === id)
  }

  //changes the state of listIndex to a new index based off the id of the event target
  function changeList(event) {
    let i = getIndex(event.target.id);
    setListIndex(i);
  }

  //adds a new list and assigns the respective type of list
  function addList(type) {
    const id = crypto.randomUUID() + ""; 
    setListData(prevData => {
      return [...prevData, 
              {id: id, 
               name: "New List", 
               listType: type === "personal" ? "personal" : "collaboration",
               data: []
              }
             ]
    })
  }

  function deleteList() {
    const id = listData[listIndex].id;
    setListData(prev => prev.filter(list => list.id !== id));
  }

  //is used when changing the title of a list
  //It maps through the list data array, updating the list with the new name
  function updateListName(value, listId) {
    setListData(prevData => prevData.map(list => list.id === listId ? {...list, name: value} : list))
  }

  //is used to toggle the completed status of each task.
  //gets the index of the list, then maps through its data replacing it with the updated version
  //updates the listData to have the correct data for that task by mapping through the array
  function toggleCompleted(id, taskId) {
    const newData = listData[getIndex(id)].data.map(task => (
      task.taskId === taskId ? {...task, isCompleted: !task.isCompleted} : task
    ))
    setListData(prevData => prevData.map(list => list.id === id ? {...list, data: newData} : list))
  }

  function updateTaskName(value, taskId) {
    //get new task data array, and the id of the list
    const newData = listData[listIndex].data.map(task => task.taskId === taskId ? {...task, taskName: value} : task); 
    const listId = listData[listIndex].id;
    setListData(prev => prev.map(list => list.id === listId ? {...list, data: newData} : list))
  }

  function updateTaskDesc(value, taskId) {
    //get new task data array, and the id of the list
    const newData = listData[listIndex].data.map(task => task.taskId === taskId ? {...task, desc: value} : task); 
    const listId = listData[listIndex].id;
    setListData(prev => prev.map(list => list.id === listId ? {...list, data: newData} : list))
  }

  //creates a new task with a random Id, and add it to a new array after spreading the current list data,
  //then get the id of the current list and use .map to create the correct up to date version of the task
  function addNewTask(listId) {
    let id = crypto.randomUUID() + "";
    const newData = [...listData[listIndex].data, {taskName: "New Task", taskId: id, desc: "", isCompleted: false} ]
    id = listData[listIndex].id;
    setListData(prev => prev.map(list => list.id === id ? {...list, data: newData} : list))
  }

  //similar to add new task, however it filters out the task that needs to be deleted to get the new data.
  function deleteTask(event, taskId) {
    const newData = listData[listIndex].data.filter(task => task.taskId !== taskId)
    const id = listData[listIndex].id;
    setListData(prev => prev.map(list => list.id === id ? {...list, data: newData} : list))
  }

  return (
    <div className="app-outer-wrapper">
      <Sidebar lists={listData} changeList={changeList} addList={addList}/>
      <AppBody 
        listData={listData}
        list={listData[listIndex]}
        toggleCompleted={toggleCompleted} 
        updateListName={updateListName}
        updateTaskName={updateTaskName}
        updateTaskDesc={updateTaskDesc}
        addNewTask={addNewTask}
        deleteTask={deleteTask}
        deleteList={deleteList}
      />
    </div>
  )
}

export default App
