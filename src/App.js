import React, {useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry'
import './App.css'



function App () {

    
    const [robots , setRobots] = useState([])
    const [searchfield, setSearchfield ] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => {setRobots(users)});
    },[])

        const onSearchChange = (event) => {
            setSearchfield(event.target.value )
        }

            const filterRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            })

            if(robots.length === 0){
                return <h1>Loading....</h1>
            }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                    <CardList robots={filterRobots} />
                    </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    
    }




    export default App;