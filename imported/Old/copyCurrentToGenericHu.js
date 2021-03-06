//curFound used in case current has already been found while setting chapters.
//will be false if this script is called elsewhere
function copyCurrentToGenericHu(e, argCur)
{
  setAllToNullHu(e);
  let cur = argCur;
  if(cur == null)
    cur = getCurrentHu(e);

  log("Current: " + cur.field("Custom Entry Name"));

  let x = cur.field("Status Sort") != 5;
  if(x)
    e.set("Introduced?", true);

  setCurrentHu(e, cur);
  setGenFieldsToCurHu(e, cur);
  e.set("Sorting Key", getKey (e));
  e.set("Current Status", cur.field("Status"));

  let i = (e.field("General Importance Sort") < 3) || e.field("Current Importance");
  e.set("List among important characters?", i);
}

//To make sure outdated data isn't accidentally kept in
//Leave list of versions alone!
//Also leave Abbreviation alone, because that never changes and it's useful for debugging.

function setAllToNullHu(e)
{
  let ignoredFields = ["All Versions", "Abbreviation", "General Thumbnail", "Hangul Verified?"];
  const flds = getAllFieldsHu();
  for (i in flds)
  {
    let f = flds[i].field;
    if(!includes(ignoredFields, f))
        clearUnlink(e, f);
  }
}

//get version entry labeled current
function getCurrentHu(e)
{
  let allV = e.field("All Versions");
  for(let i in allV)
  {
    let v = allV[i];
    log("Checking " + v.field("Custom Entry Name") + ". Spoiler Sort = " + v.field("Spoiler Sort"));
    if(v.field("Spoiler Sort") == 1)
    {
      log("Current: " + v.field("Custom Entry Name"));
      return v;
    }
  }

  log("current not found");
  return allV[allV.length - 1];
/*
  log("Finding current version of " + e.field("Abbreviation"));
  e.set("Introduced?", false);
  let cur = null;

  const versions = e.field("All Versions");

  for (i in versions)
  {
    log("i = " + i);
    const chSt = "Chapter Sort";
    const spSt = "Spoiler Status";
    if(i == 0)
      continue;

    let v = versions [i];
    let vPrev = versions [i - 1];

    let cond1 = v.field("Spoiler Status"). equals ("Future Entry");
    let cond2 = vPrev.field("Spoiler Status"). equals ("Old Entry");
    log("Chapter " + vPrev.field(chSt) + " spoiler status: " + vPrev.field(spSt));
    log("Chapter " + v.field(chSt) + " spoiler status: " + v.field(spSt));
    log("cond1 = " + cond1 + ", cond2 = " + cond2 + ", (cond1 && cond2) = " + (cond1 && cond2));
    //let cond3 = ((versions.length - 1) == i);
    //if(cond3)
      //vPrev = v;

    if((cond1 && cond2))
    {
      log("Found Current; Chapter " + vPrev.field("Chapter Sort") + " version.");
      cur = vPrev;
      let x = !((cur.field("Status")). equals("Future Character"));
      if(x)
        e.set("Introduced?", true);
      break;
    }

    log("Looping...");
  }

  if(cur == null)
  {
    cur = versions [versions.length - 1];
    log("cur == null, so using Chapter " + cur.field("Chapter Sort") + " version.");
  }
  else
    log("cur was not null");


  return cur;
*/
}

//set a specific version entry as the most current one
function setCurrentHu(e, cur)
{
  //cur.set("Spoiler Status", "Current Entry");
  //prevent duplicates
  let curList = e.field("Current Version");
  if(curList.length > 0)
    for(i in curList)
      e.unlink("Current Version", curList[i]);

  e.link("Current Version", cur);
}

//Set the generalized fields to match the "current" version
function setGenFieldsToCurHu(e, cur)
{
  let sharedFields = getSharedFieldsHu();

  //Get&Set fields identical between generic and versioned
  for (i in sharedFields)
  {
    let fld = sharedFields[i];
    let cf = cur.field(fld);
    e.set(fld, cf);
  }

  //Get&Set Attributes of those shared fields to match current
  let aFields = getAttrFieldsHu();
  let attrList = getFieldAttrsHu();

  for(j in aFields)
  {
    let fld = aFields[j];
    let att = attrList[j];
    let cf = cur.field(fld);
    for(k in cf)
    {
      e.field(fld)[k].setAttr(att, cf[k].attr(att));
    }
  }

  //setPicture(e, cur);
}

//Set picture to same thumbnail as current, if it exists
function setPicture(e, cur)
{
  if(cur.field("Picture").length > 0)
    e.set("Picture", cur.field("Picture")[0]);
  else
    message ("No picture available");
}

//Gey the key used to sort generic entries
//Based on General Importance, Current Status of character, and Order Introduced
function getKey(e)
{
  let output = "";
  let curList = e.field("Current Version");
  if(curList.length > 0)
  {
    let cur = curList[0];
    output = cur.field("General Key");
    let arr = output.split("???");
    let temp = "ST" + cur.field("Status Sort");

    arr.splice(1, 0, temp);
    output = arr.join("???");
  }
  return output;
}
