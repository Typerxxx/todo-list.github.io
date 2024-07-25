

export const useSortedTasks = (setTasks , tasks, status) => {


    const sortedCompleted = () => {
        console.log(status + "sdfs")
        setTasks(tasks.filter((el) => el.completed !== status))
    }
    return sortedCompleted
} 




