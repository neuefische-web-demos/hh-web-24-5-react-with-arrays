import PokemonCard from './components/PokemonCard';
import './App.css';
import './styles.css';

const pokemons = [
  {
    id: '448',
    name: 'Lucaria',
    types: 'fighting, steel',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg',
  },
  {
    id: '197',
    name: 'Umbreon',
    types: 'dark',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg',
  },
  {
    id: '840834nchuwgfuzgasfHSaoühf',
    name: 'Garchomp',
    types: 'dragon',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/445.svg',
  },
];

// Array.map((singular) => { .... })
export default function App() {
  return (
    <main className="app">
      <h1 className="app__title">Pokédex</h1>
      <ul className="app__pokemons">
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
                id={pokemon.id}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
