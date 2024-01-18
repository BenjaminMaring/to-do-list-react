import React from 'react'
import Header from './Header'
import List from './List'

export default function AppBody({listData, list, toggleCompleted, 
                                updateListName, updateTaskName, 
                                updateTaskDesc, addNewTask, deleteTask, 
                                deleteList}) {
    const [search, setSearch] = React.useState("");
    
    function updateSearch(e) {
        setSearch(e.target.value); 
    }

    //create a regex based on the search input
    const regex = new RegExp(".*" + search + ".*", "i");
    //check if there is a list selected, if there is then grab the list data
    const tasks = list ? list.data : []
    //filter the items based on the regex
    const filteredItems = tasks.filter(task => {
        return (regex.test(task.taskName));
    })

    return (
        <div className="app--body-wrapper">
          <Header 
          updateSearch={updateSearch}/>
        {
            listData.length > 0
            ? <List 
                tasks={filteredItems} 
                listName={list.name}
                listId={list.id}
                toggleCompleted={toggleCompleted} 
                updateListName={updateListName}
                updateTaskName={updateTaskName}
                updateTaskDesc={updateTaskDesc}
                addNewTask={addNewTask}
                deleteTask={deleteTask}
                deleteList={deleteList}
            />
            : <div className="no-list--wrapper">
                <h4>Please Create A New List</h4>
            </div>
        }
        </div>
    )
}