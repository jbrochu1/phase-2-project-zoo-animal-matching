import LeaderCards from "./LeaderCards";

export default function LeaderBoard({games}) {
    const gameInfo = games.map(game => 
        <LeaderCards key={game.id} game={game} />
    )
    return (
        <div>
            <div>
                <h1 className="text-6xl text-center text-white p-4">Leaderboard</h1>
            </div>
            <div className="flex justify-center p-4">
                <table className="text-white table-auto text-center border-separate border-spacing-2 border border-slate-400 ...">
                    <thead>
                        <tr>
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Total Matches</th>
                        <th className="border border-slate-300">Total Attempts</th>
                        </tr>
                    </thead>
                    <tbody>
                    {gameInfo}
                    </tbody>
                </table>
            </div>
        </div>
    )  
};