import React, { Component, useEffect, useState } from "react";
import {
  CardDeck,
  FormControl,
  Dropdown,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";
import axios from "axios";
import Pets from "./Pets";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [breed, setBreed] = useState("");
  const [typeBreed, setTypeBreed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1235/pets");
        setData(res.data);
        setSearch(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchUniq = async () => {
      try {
        const res = await axios.get("http://localhost:1235/breeds");
        setTypeBreed(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchUniq();
  }, []);

  useEffect(() => {
    const breedsRes = search.filter((pets) =>
      pets.breed_name.toLowerCase().includes(breed)
    );
    setData(breedsRes);
  }, [search, breed]);

  return (
    <div>
      <InputGroup
        className="mb-3"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      >
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="See our available breeds"
          id="input-group-dropdown-1"
        >
          {typeBreed.map((pets) => (
            <Dropdown.Item disabled key={pets.id}>
              {pets.animal_type} - {pets.breed_name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <FormControl
          placeholder="Type the breed in lower case in accordance with the list on the left ex: shih tzu"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {data.length === 0 ? (
        <h1>No results</h1>
      ) : (
        <CardDeck>
          {data.map((pets) => (
            <Pets
              key={pets.id}
              id={pets.id}
              name={pets.name}
              description={pets.description}
              picture={pets.picture}
            />
          ))}
        </CardDeck>
      )}
    </div>
  );
}
class AllPets extends Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
export default AllPets;
