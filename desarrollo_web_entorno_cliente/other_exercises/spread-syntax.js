// Objects

const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defense: 45 };

// Bad Object Code

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.hp;
pikachu['defense'] = stats.hp;

//Or

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 45});

// Code Object Code
 const lvl0 = {...pikachu, ...stats};
 const lvl1 = {...pikachu, hp: 45};

 // Arrays

 let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

 // Bad Array Code
 pokemon.push('Bulbasaur');
 pokemon.push('Metapod');
 pokemon.push('Weedle');

 // Good Array Code

 // Push
 pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

 // Unshift
 pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon];