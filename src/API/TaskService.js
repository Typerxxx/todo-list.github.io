import axios from 'axios'

export default class TaskService {


    static async getAll(limit = 5,page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
            params:{
                _limit:limit,
                _page:page
            }
        })
        return response
    }


}