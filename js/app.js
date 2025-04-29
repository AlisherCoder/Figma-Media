const countEl = document.querySelector(".count");

let offset = 0;

function inc() {
   if (offset == 1000) {
      return null;
   } else if (offset >= 100) {
      offset += 100;
   } else if (offset >= 10) {
      offset += 10;
   } else {
      offset++;
   }
   countEl.innerHTML = offset;
}

function dec() {
   if (offset == 0) {
      return null;
   } else if (offset > 100) {
      offset -= 100;
   } else if (offset >= 10) {
      offset += 10;
   } else {
      offset++;
   }
}

function res() {
   offset = 0;
   countEl.innerHTML = offset;
}
