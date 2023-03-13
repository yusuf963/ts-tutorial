import { Ifetch } from '../types';
export const fetchAllData = async (): Promise<Ifetch> => {
    return await (await fetch('http://localhost:5000/')).json();
};
const data1 = { description: 'test', completed: false };

export const PostTodo = async () => {
    await fetch('http://localhost:5000/', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data1),
        method: 'POST',
    });
};
