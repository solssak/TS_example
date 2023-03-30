function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

// 호출법 2가지
helloBasic<string, number>("solssak", 26); // 타입 지정
helloBasic(26, 24); // 타입 추론
