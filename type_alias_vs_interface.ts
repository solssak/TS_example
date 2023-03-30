// function ----------------------------------------------------
type EateType = (food: string) => void;

interface IEat {
  (food: string): void;
}

// array -------------------------------------------------------
type PersonList = string[];

interface IPersonList {
  [index: number]: string;
}

// intersection ------------------------------------------------
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistResponseType;
let iar: IArtistsResponse;

// union types -------------------------------------------------
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// interface IPet extends PetType {} // error TS2312

// class Pet implements PetType {} // error TS2422

// Declaration Merging - only interface ------------------------
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
// mi.  //a, b 다 나옴
