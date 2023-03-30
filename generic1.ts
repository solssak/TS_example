function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any {
  return message;
}

console.log(hello("최현준"));
console.log(hello(123));

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("최현준").length);
console.log(helloGeneric(26));
console.log(helloGeneric(true));
