import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        
            <div className="grid grid-cols-2 text-center">
                <NavLink 
                to="/" 
                className='bg-green-500 font-bold bg-opacity-75'>
                Home
                </NavLink>
                {/* <NavLink to="/animals">Animals</NavLink> */}
                {/* <NavLink to="/game">Game</NavLink> */}
                <NavLink to="/leaderboard" 
                className='bg-green-500 font-bold bg-opacity-75'>
                Leaderboard
                </NavLink>    
            </div>
        
    );
};