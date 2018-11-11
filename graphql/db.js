export const people = [
  {
    id: "0",
    name: "hochan",
    age: 24,
    gender: "male"
  },
  {
    id: "1",
    name: "ho",
    age: 22,
    gender: "male"
  },
  {
    id: "2",
    name: "chan",
    age: 23,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
