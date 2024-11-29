import './index.css'

const typeColors = {
    grass: "#97B7A3",
    fire: "#E3B09F",
    water: "#9DB7D4",
    electric: "#F9E79F",
    psychic: "#F5B7B1",
    ice: "#A3E4D7",
    dragon: "#D7BDE2",
    dark: "#A9A9A9",
    fairy: "#FADBD8",
    normal: "#F5CBA7",
    fighting: "#F1948A",
    flying: "#AED6F1",
    poison: "#C39BD3",
    ground: "#D7DBDD",
    rock: "#D5D8DC",
    bug: "#A2D9CE",
    ghost: "#D2B4DE",
    steel: "#AED6F1",
};

export default function PokemonFront ({types , name , image}) {
    return (
        <div 
        className="card-front"
        style={{ backgroundColor: typeColors[types[0]] }}
        >
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>Type: {types.join(", ")}</p>
      </div>
    )
}