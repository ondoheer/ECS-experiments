function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}