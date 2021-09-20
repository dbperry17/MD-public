function epName(e)
{

  var names = ["Three Ways to Survive in a Ruined World",
               "Starting the Paid Service",
               "Protagonist",
               "Contract",
               "Line of Hypocrisy",
               "Warden of the Dark",
               "Time of Judgment",
               "Landlord",
               "Emergency Defense",
               "Omniscient Sunfish",
               "Future War"];

  var num = e.field("Episode #");
  var name = names[num];
  var desc = "";

  if(num == 0)
    desc = "Prologue";
  else
    desc = "Ep. " + num;

  desc += " — " + name;

  e.set("Episode Name", name);
  e.set("eDesc", desc);

}

//by default, MD outputs entries in an array that is sorted by creation date.
function getAndSortCh()
{
  var oList = lib().entries();

  //sort by chapter
  return sortProp(oList, "Chapter #");
}

function setChapter(eList, start, lc)
{
  log ("Start set Chapter");
  var len = eList.length;

  const charList = [];
  const scenList = [];

  for(var i = start; i < len; i++)
  {
    var e = eList[i];
    let eCh = e.field("Chapter #");

    if(eCh > lc)
    {
      e.set("Read?", false);
      setHumanSpoiler(e, "Future Entry");
      setScenarioSpoiler(e, "Future Entry")
    } 
    else
    {
      e.set("Read?", true);
      var tempListH = setHumanSpoiler(e, "Old Entry");
      for (h in tempListH)
        charList.push(tempListH[h]);
      var tempListS = setScenarioSpoiler(e, "Old Entry");
    
      if(eCh == lc)
        for(s in tempListS)
          scenList.push(tempListS[s]);
    }
  }

  log("Finished chapters, starting humans setup");
  setHumans(charList);
  log("Finished humans starting scenarios");
  setScenarios(scenList);
  log ("Finished scenarios.");
}

function setHumans(charList)
{
  const filteredArray = getCurrentChars(charList);
  log("Finished humans setup, starting humans.");
  const fLen = filteredArray.length;

  for(var i = 0; i < fLen; i++)
  {
    filteredArray[i].set("Spoiler Status", "Current Entry");
  }

  let genListH = filteredArray;
 //= libByName("Humans — Versioned"). entries ();

  for (let h in genListH)
  {
    let v = genListH[h].field("Generalized Entry")[0];
    //log(v.field("Name"))
    copyCurrentToGeneric(v);
    v.set("Introduced?", true);
  }
}

function setScenarios (scenList)
{
  for (k in scenList)
  {
    let l = scenList[k];
    let a = l.attr("Timing");

    if(a.equals("Start") || a.equals("Ongoing"))
      l.set("Spoiler Status", "Current Entry");
  }
}

function setHumanSpoiler(e, spoiler)
{
  var list = libByName("Humans — Versioned"). linksTo(e);

  let eCh = e.field("Chapter #");
  
  var validList = validHumanList(eCh, list);

  let len = validList.length;

  for (let i = 0; i < len; i++)
  {
    let h = validList[i];
    h.set("Spoiler Status", spoiler);
  }

  return validList;
}

function validHumanList(ch, list)
{
  var validList = [];
  let len = list.length;

  for (let i = 0; i < len; i++)
  {
  
    let h = list[i];
    let hCh = h.field("Valid as of")[0].field("Chapter #");
    if(hCh == ch)
      validList.push(h);
  }

  return validList;
}

function setScenarioSpoiler(e, status)
{
  let scenList = e.field("Ongoing Scenario(s)");
  let len = scenList.length;


  for(var i = 0; i < len; i++)
  {
    let scen = scenList[i];
    scen.set("Spoiler Status", status);
  }

  return scenList;
}

const na = "Name";
const or = "Order introduced";
const chSo = "Chapter Sort";

//https://stackoverflow.com/a/53042397
//Note: MD uses an old version of JavaScript, so objectValues() function needed to be written.
//It is in all_libraries/misc.js
function getCurrentChars(array)
{
  let filteredArray = objectValues(array.reduce((unique, o) => {
    if(!unique[o.field(or)] || (+(o.field(chSo)) > +(unique[o.field(or)].field(chSo))))
      unique[o.field(or)] = o;
    return unique;
  }, {}));

  return filteredArray;
}
