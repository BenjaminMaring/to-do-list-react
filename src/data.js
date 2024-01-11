const user = {
    username: "Ben",
    password: "password",
    lists: {
        personal_lists: [
            {   id: "p1",
                listName: "To do",
                data: [
                    {taskName: "Dishes", taskId: "0", desc: "Do the Dishes", isCompleted: true},
                    {taskName: "Geico Insurance", taskId: "1", desc: "Need to finish applying for auto insurance", isCompleted: false}
                ]  
            },
            {   id: "p2", 
                listName: "Today",
                data: [
                    {taskName: "Call Client for onsite", taskId: "0", desc: "need to call buissness for onsite inspection", isCompleted: false},
                    {taskName: "Dishes", taskId: "1", desc: "", isCompleted: false}
                ]
            }
        ],
        collaborations: [
            {   id: "c1",
                listName: "BVT Group 5",
                data: [
                    {taskName: "Go Over Homework", taskId: "0", desc: "", isCompleted: false},
                    {taskName: "Go Over Homework", taskId: "1", desc: "", isCompleted: false}
                ]
            },
            {   id: "c2",
                listName: "RJ Pro Tech Group, Inc",
                data: [
                    {taskName: "Go Over Homework", taskId: "0", desc: "", isCompleted: false},
                    {taskName: "Go Over Homework", taskId: "1", desc: "", isCompleted: false}
                ]
            }
        ]
    }
}

export default user;