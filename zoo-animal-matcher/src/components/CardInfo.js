
export default function CardInfo({animal, onNameClick}) {
    const {name} = animal;
    // const {image_link} = image;
    
    const handleNameClick = () => {
        onNameClick(animal.name);    
    }

    return (
            <p className="text-center text-4xl cursor-pointer" onClick={handleNameClick} >{name}</p>
               )
}