function rejectAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("slow");
    }, 2000);
  });
}

function rejectAfter1Second() {
  console.log("starting fast promise");
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("fast");
    }, 1000);
  });
}

console.log("== starting ==");

const errorHandler = (e) => {
  console.log(`it broke! ${e}`);
}
const slow = rejectAfter2Seconds().catch(errorHandler);
const fast = rejectAfter1Second().catch(errorHandler);

  console.log(await fast);
  console.log(await slow);


console.log("== done ==");