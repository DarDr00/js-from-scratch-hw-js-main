const = MIN_ENERGY = 0;
const CRITICAL_ENERGY_LEVEL = 3;
const INITIAL_ENERGY = 10
let energy = INITIAL_ENERGY;

 while(energy >= MIN_ENERGY) {
    console.log ("Level of energy: " + energy);

if (energy === MIN_ENERGY) {
    console.log("Я устал. Больше не могу работать");
} else if (energy <= CRITICAL_ENERGY_LEVEL) {
    console.log("Я проголодался. Хочу кушать");
} else console.log("Я сыт и прекрасно себя чувствую");

    // energy = energy - 1
    // energy -= 1
    energy -- 
 }
