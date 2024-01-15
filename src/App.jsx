import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import List from './Components/List'
import data from './data'
import './App.css'

function App() {
  const [listData, setListData] = React.useState([]);
  const [listIndex, setListIndex] = React.useState(0)

  React.useEffect(() => {
    setListData(data.lists);
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
    const id = Math.floor(Math.random() * 1000) + "";
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

  //is used when changing the title of a list
  //It maps through the list data array, updating the list with the new name
  function updateListName(value, listId) {
    setListData(prevData => prevData.map(list => list.id === listId ? {...list, name: value} : list))
  }

  //is used to toggle the completed status of each task.
  function toggleCompleted(id, taskId) {
    //gets the index of the list, then maps through its data replacing it with the updated version
    const newData = listData[getIndex(id)].data.map(task => {
      return (task.taskId === taskId ? {...task, isCompleted: !task.isCompleted} : task)
    })
    //updates the listData to have the correct data for that task by mapping through the array
    setListData(prevData => prevData.map(list => list.id === id ? {...list, data: newData} : list))
  }

  function updateTaskName(value, taskId) {
    //get new task data array, and the id of the list
    const newData = listData[listIndex].data.map(task => task.taskId === taskId ? {...task, taskName: value} : task); 
    const listId = listData[listIndex].id;
    setListData(prev => prev.map(list => list.id === listId ? {...list, data: newData} : list))
  }

  function updateTaskDesc() {

  }

  return (
    <div className="app-outer-wrapper">
      <Sidebar lists={listData} changeList={changeList} addList={addList}/>
        <div className="app--body-wrapper">
          <Header />
            {
              listData.length > 0
              ? <List list={listData[listIndex]} 
                  toggleCompleted={toggleCompleted} 
                  updateListName={updateListName}
                  updateTaskName={updateTaskName}
                  updateTaskDesc={updateTaskDesc}/>
                  
              : <div>
              Please create a new note
              </div>
            }
        </div>
    </div>
  )
}

export default App
