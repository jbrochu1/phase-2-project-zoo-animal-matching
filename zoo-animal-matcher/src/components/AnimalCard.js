
export default function AnimalCard({animal}) {
    const {name, animal_type, geo_range, image_link, diet, habitat, lifespan, length_max, weight_max} = animal;
    
    return (
        <div className="grid grid-cols-2 gap-4 p-2">
            <div className="text-center">
                <p className="text-2xl" >Name: {name}</p>
                <p>Type: {animal_type}</p>
                <p>Lives: {geo_range}</p>
                <p>Eats: {diet}</p>
                <p>Habitat: {habitat}</p>
                <p>Lifespan: {lifespan}</p>
                <p>Max Length feet: {length_max}</p>
                <p>Max Weight lbs: {weight_max}</p>
            </div>
            <div>
                <img src={image_link} alt={name}/>
            </div>
        </div>
    )
}