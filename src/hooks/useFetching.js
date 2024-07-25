import {useState} from "react" 

export const useFetching = (callback) => {
    const [error, setError] = useState('');
    const [completed, setCompleted] = useState(false);


    const fetching = async () => {
        try{
            setCompleted(false);
            await callback();
        } catch(e){
            console.log(e.message)
        }
        finally{
            setCompleted(true);
        }
    }

    return [fetching,error,completed]    
}