interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "hyunjun",
  age: 26,
};

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, "age");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "Anna");
