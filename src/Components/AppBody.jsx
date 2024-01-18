import React from 'react'
import Header from './Header'
import List from './List'

export default function AppBody(props) {
    const [search, setSearch] = React.useState("");
    
    function updateSearch(e) {
        setSearch(e.target.value); 
    }

    //create a regex based on the search input
    const regex = new RegExp(".*" + search + ".*", "i");
    //check if there is a list selected, if there is then grab the list data
    const tasks = props.list ? props.list.data : []
    //filter the items based on the regex
    const filteredItems = tasks.filter(task => {
        return (regex.test(task.taskName));
    })

    return (
        <div className="app--body-wrapper">
          <Header 
          updateSearch={updateSearch}/>
        {
            props.listData.length > 0
            ? <List 
                tasks={filteredItems} 
                listName={props.list.name}
                listId={props.list.id}
                toggleCompleted={props.toggleCompleted} 
                updateListName={props.updateListName}
                updateTaskName={props.updateTaskName}
                updateTaskDesc={props.updateTaskDesc}
                addNewTask={props.addNewTask}
                deleteTask={props.deleteTask}
                deleteList={props.deleteList}
            />
            : <div className="no-list--wrapper">
                <h4>Please Create A New List</h4>
            </div>
        }
        </div>
    )
}