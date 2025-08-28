

export function whatsMyType<T>(argument: T): T {
  return argument;
}


let rtaString = whatsMyType('Hola Mundo');

console.log('rtaString :', rtaString);