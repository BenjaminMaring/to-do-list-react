import React, { useState } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import List from './Components/List'
import './App.css'
import data from './data'

function App() {
  const [userData, setUserData] = useState(data);
  const [currentList, setCurrentList] = useState(userData.lists.personal_lists[0]);

  //gets the index of a list
  //takes in two paramaters, first the id of the list, and then the type of list to determine which array to look in.
  function getListIndex(id, listType) {
    if (listType === "personal_lists") {
      return userData.lists.personal_lists.findIndex(obj => {
        return (obj.id === id);
      })
    } else {
      return userData.lists.collaborations.findIndex(obj => {
        return (obj.id === id);
      })
    }
  }


  //this function changes the currentList state to the new list that needs to be displayed.
  //It first finds the index of the list in the data array depending on which list array it is in, and then sets the state to it.
  function changeList(event) {
    if (event.target.id[0] === "p") {
      let i = getListIndex(event.target.id, "personal_lists");
      setCurrentList(userData.lists.personal_lists[i]);
    } else {
      let i = getListIndex(event.target.id, "collaberations");
      setCurrentList(userData.lists.collaborations[i]);
    }
  }



  //is used when adding a new list. it gets passed to the sideBar component for the buttons to add a list
  function addList(category) {
    const random = category === "personal_list" ? "p" : "c" + Math.floor(Math.random() *1000);
    setUserData(prevData => {
      return {...prevData, lists: { 
                ...prevData.lists, [category]: [
                ...prevData.lists[category], 
                { id: random, listName: "New List", data: []} 
                ] 
              } 
            }
    })
  }



  //this function changes the status of a task, to show wether or not a task is completed.
  //It creates a new array for the data inside a task.
  function toggleCompleted(event) {
    let targetId = event.target.parentElement.id;
    
    // get the correct data array for the current list
    let newListData = currentList.data.map(task => {
      return task.taskId === targetId ? {...task, isCompleted: !task.isCompleted} : task;
    }) 

    //get the list type
    let listType = currentList.id[0] === "p" ? "personal_lists" : "collaborations";
    
    //creates the new data for the entire lists of that type
    let newGroupData = userData.lists[listType].map(list => {
      return (list.id === currentList.id ? ({...list, data: newListData}) : list)
    })
    
    
    //change the userData state to have the correct data
    setUserData(prevData => {
      return({
        ...prevData, 
        lists: {
          ...prevData.lists,
          [listType]: newGroupData
        }
      })
    })
    
    //lastly, update the currentList state to show the correct updated list
    let i = getListIndex(currentList.id, listType);
    setCurrentList(userData.lists[listType][i]);
    
  }//end toggleCompleted
  
  const listData = userData.lists;

  return (
    <>
      <Header data={listData} />
      <div className="app--body-wrapper">
        <Sidebar lists={listData} add={addList} goToList={changeList}/>
        <List list={currentList} toggleCompleted={toggleCompleted}/>
      </div>
    </>
  )
}

export default App
