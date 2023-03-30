class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("최현준", 26);
// new Person<string>(24);
new Person<string, number>("최현준", 26);
