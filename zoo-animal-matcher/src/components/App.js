import '../App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react";
import NavBar from './NavBar';
import Home from './Home';
import GamePage from './GamePage';
import LeaderBoard from './LeaderBoard';

function App() {
  
  const [animals, setAnimals] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/4")
      .then((res) => res.json())
      .then(setAnimals);
    }, []);

    
    useEffect(() => {
        fetch("http://localhost:4000/games")
          .then((res) => res.json())
          .then(setGames);
      }, []);
    
    function handleAdd(newGame) {
        const updatedGames = [...games, newGame]
        setGames(updatedGames);
    } 

  return (
    <div>
      <Router>
      <header className="sticky top-0">
        <NavBar /> 
      </header>
        
          <Routes>
            <Route exact path="/" element={<Home animals={animals}/>} />
            <Route path="/game" element={<GamePage onAdd={handleAdd} animals={animals}/>} />
            {/* <Route path="/gameover" element={<GameOver/>} /> */}
            <Route path="/leaderboard" element={<LeaderBoard games={games}/>} />
            {/* <Route path="/redirect" element={<Navigate to="/gameover"/>} /> */}
          </Routes>
        </Router>    
    </div>
  );
}

export default App;
