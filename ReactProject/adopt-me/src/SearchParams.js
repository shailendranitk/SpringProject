import React, { useContext, useEffect, useState } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import Pet from "./Pet";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStr = breeds.map(({ name }) => name);
      setBreeds(breedStr);
    });
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          type="text"
          placeholder="Location"
          onChange={(e) => updateLocation(e.target.value)}
        />
        <AnimalDropdown />
        <BreedDropdown />
        Theme
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          onBlur={(e) => setTheme(e.target.value)}
        >
          <option value="peru">Peru</option>
          <option value="darkblue">Dark Blue</option>
          <option value="mediumorchid">Medium Orchid</option>
          <option value="chartreuse">Chartreuse</option>
        </select>
        <button style={{ backgroundColor: theme }}> Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
