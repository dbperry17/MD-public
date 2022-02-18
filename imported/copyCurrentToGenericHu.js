//argCur used in case current has already been found in the method calling this one.
function updateGenericToCurrentHu(e, argCur)
{
  let flds = getManualFieldsHu();
	setAllToNullHu(e, flds);
	let cur = argCur;
	if(cur===null)
		cur = getCurrentHu(e);
  
  log("Current: " + cur.field("Custom Entry Name"));
  setCurrentHu(e, cur);
	setGenFieldsToCurHu(e, cur, flds);
}

function setAllToNullHu(e, flds)
{
	for (i in flds)
	{
		let f = flds[i].field;
		clearUnlink(e, f);
	}
}

//get version entry labeled current
function getCurrentHu(e)
{
  let versList = libByName("globals").entries()[0].field("Latest Chapter")[0].field("Current Versioned Humans");
  
  return findMatchingVersion(versList, e.field("General Key"));
}

//set a specific version entry as the most current one
function setCurrentHu(e, cur)
{
	//cur.set("Spoiler Status", "Current Entry");
	//prevent duplicates
	let curList = e.field("Current Version");
	if(curList.length > 0)
	  for(i in curList) //should theoretically only be one entry, but just in case
		  e.unlink("Current Version", curList[i]);
  e.link("Current Version", cur);
}

//Set the generalized fields to match the "current" version
function setGenFieldsToCurHu(e, cur, flds)
{
	for (i in flds)
	{
		let fld = flds[i];
		let cf = cur.field(fld);
		e.set(fld, cf);
	}	//Get&Set Attributes of those shared fields to match current
	let aFields = getAttrFieldsHu();
	let attrList = getFieldAttrsHu();	for(j in aFields)
	{
		let fld = aFields[j];
		let att = attrList[j];
		let cf = cur.field(fld);
		for(k in cf)
		{
			e.field(fld)[k].setAttr(att, cf[k].attr(att));
		}
	}
}