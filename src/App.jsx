import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import List from './Components/List'
import './App.css'
import data from './data'

function App() {
  const [listData, setListData] = React.useState([]);
  const [listIndex, setListIndex] = React.useState(0)

  //sets the userData to our data initially, just on initial app load
  React.useEffect(() => {
    setListData(data.lists);
  }, [])
  
  //takes in an ID of a list, and finds its index
  function getIndex(id) {
    return listData.findIndex(list => {
      return list.id === id
    })
  }

  function changeList(event) {
    let i = getIndex(event.target.id);
    setListIndex(i);
  }

  //is used to toggle the completed status of each task.
  function toggleCompleted(id, taskId) {
    //gets the index of the list, then maps through its data replacing it with the updated version
    const index = getIndex(id);
    const newData = listData[index].data.map(task => {
      return (task.taskId === taskId ? {...task, isCompleted: !task.isCompleted} : task)
    })
    //updates the listData to have the correct data for that task by mapping through the array
    setListData(prevData => {
      return (prevData.map(list => {
        return (list.id === id ? {...list, data: newData} : list)
      }))
    })
  }





  return (
    <>
      <Header />
      <div className="app--body-wrapper">
        <Sidebar lists={listData} changeList={changeList}/>
        {
          listData.length > 0
          ? <List list={listData[listIndex]} toggleCompleted={toggleCompleted}/>
          : <div>
              Please create a new note
            </div>
        }
      </div>
    </>
  )
}

export default App
