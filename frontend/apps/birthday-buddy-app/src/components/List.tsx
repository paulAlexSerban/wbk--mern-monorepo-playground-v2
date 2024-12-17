import { FC } from 'react';
import { Person as PersonType } from '../types';
import Person from './Person';

type ListProps = {
    people: PersonType[];
};

// Blocking function
// const blockMainThread = (ms: number) => {
//     const end = Date.now() + ms;
//     while (Date.now() < end) {
//         // Simulates heavy computation
//     }
// };

const List: FC<ListProps> = ({ people }) => {
    // Trigger the blocking function
    // useEffect(() => {
    //     console.log('Blocking the main thread for 2 seconds...');
    //     blockMainThread(500); // Blocks the thread for 2 seconds
    //     console.log('Main thread is unblocked');
    // }, []);

    return (
        <ul>
            {people.map((person) => {
                const { id } = person;
                return <Person key={id} {...person} />;
            })}
        </ul>
    );
};

export default List;
