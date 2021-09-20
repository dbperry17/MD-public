function copyCurrentToGeneric(e)
{
  setAllToNull(e);
  let cur = getCurrent(e);
  setCurrent(e, cur);
  setGenFieldsToCur(e, cur);
}

//To make sure outdated data isn't accidentally kept in
//Leave list of versions alone!

function setAllToNull(e)
{
  const flds = getVersionedFields();
  for (i in flds)
  {
    let f = flds[i].field;
    if(!(f.equals("All Versions")))
        clearUnlink(e, f);
  }
}

//get version entry labeled current
function getCurrent(e)
{
  let cur = null;

  const versions = e.field("All Versions");

  for (i in versions)
  {
    let v = versions [i];
    if(v.field("Spoiler Status"). equals ("Current Entry"))
    {
      cur = v;
      if(cur.field("Valid as of")[0].field("Read?"))
        e.set("Introduced?", true);
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
function setCurrent(e, cur)
{
  //prevent duplicates
  let curList = e.field("Current Version");
  if(curList.length > 0)
    for(i in curList)
      e.unlink("Current Version", curList[i]);

  e.link("Current Version", cur);
}

//Set the generalized fields to match the "current" version
function setGenFieldsToCur(e, cur)
{
  let sharedFields = getVersionedFields();

  //Get&Set fields identical between generic and versioned
  for (i in sharedFields)
  {
    let fld = sharedFields[i];
    let cf = cur.field(fld);
    e.set(fld, cf);
  }
}