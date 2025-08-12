/*Keyboard Events
Event	Trigger
keydown	Key is pressed (fires repeatedly if held)
keypress (deprecated)	Key pressed (character-producing keys only)
keyup	Key is released*/

// 1.keydown	Key is pressed (fires repeatedly if held)
document.addEventListener('keydown', (e) => {
//   console.log('KeyDown:', e.key);
});


// 2.keypress (deprecated)	Key pressed (character-producing keys only)
document.addEventListener('keypress', (e) => {
//   console.log(`KeyPress: ${e.key}`);
});

// 3.keyup	Key is released*/
document.addEventListener('keyup', (e) => {
//   console.log(`KeyUpp: ${e.key}`);
});