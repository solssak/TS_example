class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("최현준");
new PersonExtends(26);
