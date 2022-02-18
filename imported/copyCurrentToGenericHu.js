//argCur used in case current has already been found in the method calling this one.
function updateGenericToCurrentHu(e, argCur)
{
	let cur = argCur;
	if(cur===null)
	{
		log ("cur was null for " + e.field("Name") + ". Will use getCurrentHu().");
		cur = getCurrentHu(e);
	}

	let flds = getManualFieldsHu();
	setAllToNullHu(e, flds);
  
	//log("Current: " + cur.field("Custom Entry Name"));
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
	for (let i in flds)
	{
		let fld = flds[i].field;
		let att = flds[i].attr;
		let cf = cur.field(fld);
		e.set(fld, cf);
		
		if(!(att===undefined))
			for(let j in cf)
			{
				let ca = cur.field(fld).attr(att);
				e.field(fld)[j].setAttr(ca, cf[j].attr(att));
			}
	}	
}
