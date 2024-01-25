const binary_search = (list: number[], item: number) => {
  let initialPosition = 0;
  let finallyPosition = list.length - 1;
  while (initialPosition <= finallyPosition) {
    let midlePosition = Math.floor((initialPosition + finallyPosition) / 2);
    if (list[midlePosition] == item) {
      return midlePosition;
    } else if (list[midlePosition] > item) {
      finallyPosition = midlePosition - 1;
    } else if (list[midlePosition] < item) {
      initialPosition = midlePosition + 1;
    }
  }
  return null;
};

const list: number[] = [];
for (let i = 0; i < 1000000; i++) {
  list.push(i);
}
console.log(list.length);

console.time("timeBF");
binary_search(list, 5);
console.timeEnd("timeBF");

console.time("timeBF2");
list.findIndex((value) => value == 5);
console.timeEnd("timeBF2");

console.time("timeBF3");
list.forEach((valorAtual, i) => {
  if ((valorAtual = 5)) i;
});
console.timeEnd("timeBF3");
