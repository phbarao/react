import React from "react";

const names = ["James", "John", "Paul", "Ringo", "George"];

const people = [
  {
    name: "James",
    age: 31,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Paul",
    age: 65,
  },
  {
    name: "Ringo",
    age: 49,
  },
  {
    name: "George",
    age: 34,
  },
];

function App() {
  return (
    <>
      <h1>List of people:</h1>
      <p>
        {people.map((person) => (
          <li>
            <span>{person.name} - </span>
            <span>{person.age}</span>
          </li>
        ))}
      </p>

      <hr />

      <div>
        <h1>Names that includes "J"</h1>
        {names
          .filter((name) => name.includes("o"))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))}
      </div>

      <hr />

      <div>
        <h1>Less than 60 years</h1>

        {people
          .filter((person) => person.age < 40)
          .map((filteredPerson) => (
            <li>{filteredPerson.name}</li>
          ))}
      </div>
    </>
  );
}

export default App;
