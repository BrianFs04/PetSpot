import React, { Component, useEffect, useState } from "react";
import { CardDeck, Form } from "react-bootstrap";
import Pets from "./Pets";

function getUnique(arr, comp) {
  // store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])
    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e]);
  return unique;
}

function BreedsDropDown() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([
    { label: "Loading ...", value: "", type: "" },
  ]);
  const [breed, setBreed] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    let unmounted = false;
    async function getCharacters() {
      const response = await fetch("http://localhost:1235/pets/");
      const body = await response.json();
      if (!unmounted) {
        setSearch(body);
        setData(body);
        setItems(
          body.map((pets) => ({
            label: pets.breed_name,
            value: pets.breed_name,
            type: pets.animal_type,
          }))
        );
        setLoading(false);
      }
    }
    getCharacters();
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    const breedsRes = data.filter((pets) => pets.breed_name.includes(breed));
    setSearch(breedsRes);
  }, [data, breed]);

  let uniq = getUnique(items, "value");

  uniq = uniq.sort(function (a, b) {
    if (a.type > b.type) return -1;
    if (a.type < b.type) return 1;
    return 0;
  });
  return (
    <div>
      <Form className="pad_bot">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label column="lg">Select a breed</Form.Label>
          <Form.Control
            as="select"
            custom="true"
            disabled={loading}
            value={breed}
            onChange={(e) => setBreed(e.currentTarget.value)}
            onBlur={(e) => setBreed(e.currentTarget.value)}
          >
            <option>All</option>
            {uniq.map(({ label, value, type }) => (
              <option key={label} value={value}>
                {type} - {value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      {breed === "All" ? (
        <CardDeck>
          {data.map((pets) => (
            <Pets
              key={pets.id}
              id={pets.id}
              name={pets.name}
              picture={pets.picture}
              sex={pets.sex}
              breed={pets.breed_name}
            />
          ))}
        </CardDeck>
      ) : (
          <CardDeck>
            {search.map((pets) => (
              <Pets
                key={pets.id}
                id={pets.id}
                name={pets.name}
                picture={pets.picture}
                sex={pets.sex}
                breed={pets.breed_name}
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
        <BreedsDropDown />
      </div>
    );
  }
}
export default AllPets;
