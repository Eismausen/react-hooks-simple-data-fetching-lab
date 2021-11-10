// create your App component here
import React, {useState, useEffect} from 'react';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [randomDog, setRandomDog] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setRandomDog(data.message))
        .then(() => setIsLoaded(true))
    },[])

    return (
        <div id='app'>
            {isLoaded ? <img alt="A Random Dog" src={randomDog}/> : <p>Loading...</p>}
        </div>


    )
}



export default App;