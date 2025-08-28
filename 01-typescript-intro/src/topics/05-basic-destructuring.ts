
interface AudioPlayer {
    volume: number; // 0 to 100
    second: number; // 0 to 3600
    song: string;
    details: Details;
}

interface Details { 
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details: {  
        author: 'Ed Sheeran',
        year: 2015
    }
}


const {} = audioPlayer;
const { volume, second, song, details } = audioPlayer;
const { author, year } = details;

console.log('Destructuring de objetos');
console.log('El volumen actual es: ', volume);
console.log('El segundo actual es: ', second);
console.log('La canción actual es: ', song);
console.log('El autor es: ', author);
console.log('El año es: ', year);   


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;

console.log('Destructuring de arreglos');
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);


export {}; // Evitar el error: 'Cannot redeclare block-scoped variable' al tener varios archivos .ts