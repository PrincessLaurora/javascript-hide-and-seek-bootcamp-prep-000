function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}
function deepestChild() {
 var element = document.getElementById('grand-node');
 var child = element.children[0];
 while (child) {
   element = child;
   child = element.children[0];
 } return element;
}
   
   function increaseRankBy(n) {
    const ranghi = document.getElementById("app")
  .querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranghi.length; i++) {
   ranghi[i].innerHTML = parseInt(ranghi[i].innerHTML) + n
    }
   }