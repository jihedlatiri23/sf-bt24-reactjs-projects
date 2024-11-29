import PokemonBack from "./PokemonBack";
import PokemonFront from "./PokemonFront";


export default function PokemonCard ({ pokemon }) {
    const {name , types , stats , image} = pokemon
    return (
      <div className="card">
        <div className="card-inner">
            <PokemonFront types={types} name={name} image={image}/>
            <PokemonBack stats={stats}/>
        </div>
      </div>
    );
  };