export default function CardInfo({imgAlt, image, onImgClick}) {
    // const {name, animal_type, geo_range, diet} = animal;
    // const {type, name} = image;
    const handleClick = () => {
        onImgClick(imgAlt);  
    }
    return (
            <img className="cursor-pointer" src={image} alt={imgAlt} onClick={handleClick} />

    )
}