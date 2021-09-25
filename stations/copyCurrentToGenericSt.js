function copyCurrentToGenericSt(e)
{
  setAllToNullSt(e);
  let cur = getCurrentSt(e);
  let color = cur.field("Spoiler Status color");
  e.set("Spoiler Status color",color)
  setCurrentSt(e, cur);
  setGenFieldsToCurSt(e, cur);
}

function setColor(e, cur)
{
 let color = cur.field("Spoiler Status color");
  e.set("Spoiler Status color", color)
}

//To make sure outdated data isn't accidentally kept in
//Leave list of versions alone!

function setAllToNullSt(e)
{
  const flds = getSharedFieldsSt();
  for (i in flds)
  {
    let f = flds[i];
    if(!(f.equals("All Versions")))
        clearUnlink(e, f);
  }
}

//get version entry labeled current
function getCurrentSt(e)
{
  let cur = null;

  const versions = e.field("All Versions");

  for (i in versions)
  {
    let v = versions [i];
    if(v.field("Spoiler Status"). equals ("Current Entry"))
    {
      cur = v;
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
function setCurrentSt(e, cur)
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
function setGenFieldsToCurSt(e, cur)
{
  let sharedFields = getSharedFieldsSt();

  //Get&Set fields identical between generic and versioned
  for (i in sharedFields)
  {
    let fld = sharedFields[i];
    let cf = cur.field(fld);
    e.set(fld, cf);
  }
}
