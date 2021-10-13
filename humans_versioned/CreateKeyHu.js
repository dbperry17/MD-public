//Shared
/*
Imported files: 
 - all_libraries/misc.js
*/
function leadingZeros(n)
{
  return ('000'+n).slice(-3);
}

function createKey(e)
{
  let key1 = getSP(e) + "—"
           + getGI(e)
           + getCI(e)
           + getST(e)
           + getOR(e)
           + getCH(e);

  let key2 = getGI(e) + getOR(e) + "—" + e.field("Abbreviation");

  //let key = "Char" + field("Order introduced") + "—Chap" + field("Valid as of")[0].field("Chapter #");

  if(includes (e.field("Name"), " (copy)"))
    key += "—C";

  return [key1,key2];
}

function getSP(e)
{
  log("SP start");
  return "SP" + e.field("Spoiler Sort");
  //return "—SP" + 0;
}

function getGI(e)
{
  log("GI Start");

  return "GI" + e.field("General Importance Sort");
/*
  let myList = ["Main Character", "Important Side Character", "Important in TWSA only", "Briefly Important", "Lucky to have a name"];

  let myFieldName = "General Importance";

  let gSort = (+mySort(myFieldName, myList));

  return "GI" + gSort;
*/
}

function getCI(e)
{
  log("CI start");

  return "—CI" + e.field("Current Importance Sort");
  //return "—CI" + 1;
}

function getST(e)
{
  log("ST start");

  return "—ST" + e.field("Status Sort");
  /*log("Status = ");
  log(e.field("Current Status"));
  var stList = ["Alive", "Unconscious", "Missing", "Unknown", "Dead",];
  var st = mySort(e.field("Current Status"), stList);

  return "—ST" + st;*/
}

function getOR(e)
{
  log("OR start");
  return "—OR" + leadingZeros(e.field("Order introduced"));
}

function getCH(e)
{
  log("CH start");
  return "—CH" + leadingZeros(e.field("Chapter Sort"));
  //var ch = e.field("Valid as of")[0].field("Chapter #");

  //return  "—CH" + leadingZeros(ch);
}
