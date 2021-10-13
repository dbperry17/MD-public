//Trigger, Creating, After
epName(entry());

var eList = getAndSortCh();

//may change number in future
let lastFew = eList.slice(-5);

let len = lastFew.length;

setChapter(lastFew, len - 1);
