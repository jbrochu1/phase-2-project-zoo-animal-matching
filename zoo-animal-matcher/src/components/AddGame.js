import { useState } from "react";

export default function AddGame({onAdd, totalAttempts, matchCount, setIsVisible}) {
    const[playerName, setPlayerName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:4000/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: playerName,
            totalAttempts: totalAttempts,
            matchCount: matchCount,
          })
        })
          .then((r) => r.json())
          .then((newGame) => {
            onAdd(newGame);
            setIsVisible();
          })
    }

    return(
      <form onSubmit={handleSubmit}>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700"value={playerName} onChange = {(e) => setPlayerName(e.target.value)} type="text" name="Player Name" placeholder="Enter Player Name" />
          <input type="submit" value="Add Stats to Leaderboard and Exit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
      </form>
    )
}