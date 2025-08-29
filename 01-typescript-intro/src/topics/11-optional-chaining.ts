

export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Carlos',
};

const passenger2: Passenger = {
  name: 'Edgar',
  children: ['Rosalba', 'Edgar Jr.'],
};

export const printChildren = (passenger: Passenger): void => {
  const howManyChildren = passenger.children?.length ?? 0;
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);