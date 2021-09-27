function copyCurrentToGenericHu(e)
{
  setAllToNullHu(e);
  let cur = getCurrentHu(e);
  setCurrentHu(e, cur);
  setGenFieldsToCurHu(e, cur);
  e.set("Sorting Key", getKey (e));
  e.set("Current Status", cur.field("Status"));
}

//To make sure outdated data isn't accidentally kept in
//Leave list of versions alone!

function setAllToNullHu(e)
{
  const flds = getAllFieldsHu();
  for (i in flds)
  {
    let f = flds[i].field;
    if(!(f.equals("All Versions")))
        clearUnlink(e, f);
  }
}

//get version entry labeled current
function getCurrentHu(e)
{
  e.set("Introduced?", false);
  let cur = null;

  const versions = e.field("All Versions");

  for (i in versions)
  {
    let v = versions [i];
    if(v.field("Spoiler Status"). equals ("Current Entry"))
    {
      cur = v;
      //Commented out because testing
      //if(!(cur.field("Status"). equals("Future Character")));
        //e.set("Introduced?", true);
      break;
    }
  }

  if(cur == null)
  {
    cur = versions [0];
  }

  return cur;

}

//set a specific version entry as the most current one
function setCurrentHu(e, cur)
{
  cur.set("Spoiler Status", "Current Entry");
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
    let arr = output.split("—");
    let temp = "ST" + cur.field("Status Sort");

    arr.splice(1, 0, temp);
    output = arr.join("—");
  }
  return output;
}
