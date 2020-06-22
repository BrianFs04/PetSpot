import React, { Component, useEffect, useState } from "react";
import { CardDeck, Form } from "react-bootstrap";
import Pets from "./Pets";

// getUnique function which will be used in order to delete all duplicate breeds in our API
function getUnique(arr, comp) {
  // store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])
    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // delete the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e]);
  return unique;
}

// BreedsDropDown function which allow us to deploy the dropdown item so we can have a filter by breeds
function BreedsDropDown() {
  /* The followin are hooks which start being an array or string getting the data to
  our API, this will allow us to update those hooks in accordance with the filter */
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([
    { label: "Loading ...", value: "", type: "" },
  ]);
  const [breed, setBreed] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  // useEffect hook which allow us to wait for a response fetching our API
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
  /* useEffect hook which will allow us to render the data in order to obtain
  the value of the breed we want */
  useEffect(() => {
    const breedsRes = data.filter((pets) => pets.breed_name.includes(breed));
    setSearch(breedsRes);
  }, [data, breed]);

  let uniq = getUnique(items, "value");

  // After getting the unique values we decided here to sort them in Alphabetical order
  uniq = uniq.sort(function (a, b) {
    if (a.type > b.type) return -1;
    if (a.type < b.type) return 1;
    return 0;
  });
  // This will return us the view of pets section in accordance with the selection in the Form
  return (
    <div>
      <Form className="pad_bot">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label column="lg" className="filter_text">
            Select a breed
          </Form.Label>
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
// The AllPets class allow us to render the BreedsDropDown function so it can be called in the App.js file
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
