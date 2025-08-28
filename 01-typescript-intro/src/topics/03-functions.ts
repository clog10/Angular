

function add(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): number => a + b;


function multiply(
  firstNumber: number,
  secondNumber: number,
  base: number = 2
): number {
  return (firstNumber + secondNumber) * base;
}


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

console.table(strider);
healCharacter(strider, 20);
strider.showHp();


const result: number = add(2, 3);
console.log({result});

const resultArrow: number = addNumbersArrow(4, 6);
console.log({resultArrow});

const multiplyed: number = multiply(2, 3);
console.log({multiplyed});

export {}
