import { useQuery } from 'react-query';

import { LinearProgress } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import TodoItem from './components/TodoItem';
import { fetchAllData, PostTodo } from './services';
import { Itodo, Ifetch } from './types';

const App: React.FC = (): JSX.Element => {
    const { data, status, isLoading, error } = useQuery<Ifetch, Error>(['todo', 1], fetchAllData);
    if (isLoading)
        return (
            <div>
                <LinearProgress />
            </div>
        );
    if (status === 'error') return <div>Error: {error.message}</div>;

    const todoItem = data?.result.map((item: Itodo) => {
        return TodoItem(item);
    });

    return (
        <div className="App">
            <Button
                onClick={() => PostTodo()}
                size="small"
                color="warning"
                variant="text"
                aria-label="outlined primary button group"
            >
                Add New <AddIcon />
            </Button>
            {todoItem}
        </div>
    );
};

export default App;
