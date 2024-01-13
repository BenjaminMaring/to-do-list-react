const user = {
    username: "Ben",
    password: "password",
    lists: [
            {   id: "p1",
                name: "To do",
                listType: "personal",
                data: [
                    {taskName: "Dishes", taskId: "0", desc: "Do the Dishes", isCompleted: true},
                    {taskName: "Geico Insurance", taskId: "1", desc: "Need to finish applying for auto insurance", isCompleted: false}
                ]  
            },
            {   id: "p2", 
                name: "Today",
                listType: "personal",
                data: [
                    {taskName: "Call Client for onsite", taskId: "0", desc: "need to call buissness for onsite inspection", isCompleted: false},
                    {taskName: "Dishes", taskId: "1", desc: "", isCompleted: false}
                ]
            }, 
            {   id: "c1",
                name: "BVT Group 5",
                listType: "collaboration",
                data: [
                    {taskName: "Go Over Homework", taskId: "0", desc: "", isCompleted: false},
                    {taskName: "Go Over Homework", taskId: "1", desc: "", isCompleted: false}
                ]
            },
            {   id: "c2",
                name: "RJ Pro Tech Group, Inc",
                listType: "collaboration",
                data: [
                    {taskName: "Go Over Homework", taskId: "0", desc: "", isCompleted: false},
                    {taskName: "Go Over Homework", taskId: "1", desc: "", isCompleted: false}
                ]
            }
        ]
}

export default user;