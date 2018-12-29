import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends React.Component {
  render() {
    return ( 
      <Consumer>
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                id="location"
                value={context.location}
                placeholder="Location"
                onChange={context.handleLocationChange}
              />
              <label htmlFor="animal">Animal</label>
              <select
                id="animal"
                value={context.animal}
                onChange={context.handleAnimalChange}
                onBlur={context.handleAnimalChange}
              >
                <option /> 
                {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="breed">
              Breed
              <select
                id="breed"
                value={context.breed}
                onChange={context.handleBreedChange}
                onBlur={context.handleBreedChange}
                disabled={context.breeds.length === 0}
              >
                <option />
                {context.breeds.map(breed => (
                  <option key={breed}>{breed}</option>
                ))}
              </select>
            </label>
            <button>Submit</button>
          </div>
        )}        
      </Consumer>
    );
  }
}

export default SearchBox;
