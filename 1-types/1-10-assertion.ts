{
  /**
   * Type Assertions 💩
   * 100% 장담할 때만 쓰기
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as String).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 🤷‍♀️무족건.

  const button = document.querySelector('class')!; // 100% 장담
}
