let clickedCard = null;
let preventClick = false;
let count = 0;

let colorsOfCards = [
"red",
"blue",
"pink",
"yellow",
"purple",
"green",
"aqua",
"orange",
]



function onCardClicked(e) {
  let target = e.currentTarget;

  if(preventClick || target === clickedCard || target.className.includes('done')) {
      return;
  }
  target.className = target.className.replace("card-hidden", "").trim();

  target.className += ' done'

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
      
    if (
      clickedCard.getAttribute("card-color") !==
      target.getAttribute("card-color")
    ) {
      preventClick= true;
  
        setTimeout(() => {
            clickedCard.className = clickedCard.className.replace('done','').trim() + ' card-hidden';
            target.className = target.className.replace('done','').trim() + ' card-hidden';
            clickedCard = null;
            preventClick = false;
        }, 1000);
    } else {
        clickedCard = null;
        count++;
      }
  }
  if(count == 8){
    alert("You Won!!!")
  }
}
