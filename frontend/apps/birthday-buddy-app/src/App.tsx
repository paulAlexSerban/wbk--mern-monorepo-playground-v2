import { useEffect, useState } from 'react';
import { Person } from './types';
import List from './components/List';

const API_ENDPOINT = 'http://localhost:3000/api/birthdays';

const fetchPeople = async (): Promise<Person[] | undefined> => {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const App = () => {
    const [people, setPeople] = useState<Person[]>([]);

    const handleClearList = () => {
        setPeople([]);
    };

    const getPeople = async () => {
        const data = await fetchPeople();
        if (data) {
            setPeople(data);
        }
    };

    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
            <section className="container">
                {people.length === 0 && <h3>No birthdays today</h3>}
                {people.length > 0 && (
                    <>
                        <h3>{people.length} birthdays today</h3>
                        <List people={people} />
                    </>
                )}
                <button type="button" className="btn btn-block" onClick={handleClearList}>
                    clear all
                </button>
            </section>
        </main>
    );
};

export default App;
