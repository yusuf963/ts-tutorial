import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import {
    useQuery,
  } from 'react-query'
  import { Ifetch,Itodo } from '../types';


const TodoItem = (item: Itodo):JSX.Element => {
    const { id, description, created_at, completed } = item;
    const getOneTodo = async (id:string):Promise<Ifetch> => {
        const todoDetails = await (await fetch(`http://localhost:5000/${id}`)).json();
        return todoDetails
    };  
    const { data, status, isLoading, error } = useQuery('one_todo_details', getOneTodo);

    const handleBoolean = (value: boolean) => {
        if (value) return 'completed';
        return 'not completed';
    };




    const deleteTodo = async(id: string) => {
        await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE',
        });
        console.log('delete');
    };

    // const mutation =  useMutation('delete-todos', deleteTodo);

    return (
        <div key={id}>
            <div>
                <p>{id}</p>
                <p>{description}</p>
                <p>{created_at}</p>
                <p>{handleBoolean(completed)}</p>
                <Button onClick={()=> deleteTodo(id)} size="small" color="warning" variant="text" aria-label="outlined primary button group">
                    Delete
                </Button>
                <Fab onClick={()=> deleteTodo(id)} color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                {/* <Fab onClick={()=>getOneTodo(id)} color="secondary" aria-label="edit">
                    Details
                </Fab> */}
            </div>
        </div>
    );
};

export default TodoItem;
