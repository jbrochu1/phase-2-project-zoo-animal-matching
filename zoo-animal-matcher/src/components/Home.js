import AnimalCard from "./AnimalCard"
import { Link } from "react-router-dom";



export default function Home({animals}) {

    
    
    const animalInfo = animals.map((animal) => 
        <AnimalCard key={animal.id} animal={animal} />
    );


    
    // console.log(animals);

    return (
        <div>
            <div className="text-center text-2xl p-4">
                <Link className="btn text-primary cursor-pointer hover:text-white" to='/game'>Click Here to Play the Zoo Matching Game!</Link>
            </div>
            <div>
                {animalInfo}
            </div>
        </div>
    );

};