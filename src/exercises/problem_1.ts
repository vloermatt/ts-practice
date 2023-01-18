type User = unknown;

const users: unknown[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

function logPerson(user: unknown) {
  console.log(` - ${user.name}, ${user.age}`);
}

export function problem1(): void {
  console.log("Users:");
  users.forEach(logPerson);
}
