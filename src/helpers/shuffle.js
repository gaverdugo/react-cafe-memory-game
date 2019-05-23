// Fisher-Yates shuffling algorithm
// obtained from https://javascript.info/task/shuffle

/*
  This algorithm walks the array backwards, then swaps
  the current element with a random one that has not yet
  been swapped.
*/
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
};

export default shuffle;
