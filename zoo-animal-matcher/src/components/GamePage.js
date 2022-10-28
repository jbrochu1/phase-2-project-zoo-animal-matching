import CardInfo from "./CardInfo";
import ImgShuffle from "./ImgShuffle";
import { useEffect, useState } from "react";
import AddGame from "./AddGame";

export default function GamePage({animals, onAdd}) {
    const [chosenName, setChosenName] = useState("1");
    const [chosenImg, setChosenImg] = useState("2");
    const [chosenCount, setChosenCount] = useState(0);
    const [matchCount, setMatchCount] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const HandleChosenName = (name) => {
        setChosenCount(chosenCount + 1)
        setChosenName(name)
        setTotalAttempts(totalAttempts + 0.5)     
    }

    const HandleChosenImg = (name) =>{
        setChosenCount(chosenCount + 1)
        setChosenImg(name)
        setTotalAttempts(totalAttempts + 0.5)
    }
    
    useEffect(() => {
        if (chosenImg === chosenName)
        {   
            setMatchCount(matchCount + 1);
            resetTurn();
        }
            if (chosenCount > 1) {
                resetTurn();
            }
            else if (matchCount > 3) {
                console.log("game over");
                setIsVisible(!isVisible);
            }
        }, [chosenImg, chosenName]) 

    function logs () {
    console.log(chosenName)
    console.log(chosenImg)
    console.log(matchCount);
    };

    const resetTurn = () => {
        setChosenName("1")
        setChosenImg("2")
        setChosenCount(0)
    } 

    console.log(chosenName)
    console.log(chosenImg)
    console.log(matchCount);

    const randInfo = animals.map((animal) => 
    <CardInfo key={animal.id} animal={animal} onNameClick={HandleChosenName}  />
    );

    const randImg = animals.reverse().map((randImg) => 
    <ImgShuffle key={randImg.id} image={randImg.image_link} imgAlt={randImg.name} onImgClick={HandleChosenImg}/>
    );

    return (
        <div>
            <div className="sticky top-10 grid grid-cols-2 content-center">
                <div className="text-2xl p-2">
                    <p>Match Count:{matchCount}</p>
                    <p>Total Attempts:{totalAttempts}</p>
                </div>
            
                <div className="p-4">
                    <div className={isVisible ? "visible text-6xl text-white p-4" : "invisible"}> GAME OVER </div>
                    <div className={isVisible ? "visible" : "invisible"}> <AddGame setIsVisible={setIsVisible} totalAttempts={totalAttempts} matchCount={matchCount} onAdd={onAdd}/></div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-1">
                <div className="grid grid-rows-4 gap-1 justify-center content-center">
                {randInfo}
                </div>
                <div className="grid grid-rows-4 gap-1">
                {randImg}
                </div>
            </div>
        </div>
    );
};