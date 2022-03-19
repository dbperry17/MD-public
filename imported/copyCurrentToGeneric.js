//argCur used in case current has already been found in the method calling this one.
function updateGenericToCurrentHu(e, argCur)
{
	let cur = argCur;
	if(cur===null || cur===undefined)
		cur = getCurrent(e, "Humans");

	let flds = getManualFieldsHu();

	setCurrent(e, cur);
	syncFields(e, cur, flds, true);
}

//argCur used in case current has already been found in the method calling this one.
function updateGenericToCurrentDk(e, argCur)
{
	let cur = argCur;
	if(cur===null || cur===undefined)
		cur = getCurrent(e, "Dokkaebi");

	let flds = getManualFieldsDk();

	setCurrent(e, cur);
	syncFields(e, cur, flds, false);
}

//argCur used in case current has already been found in the method calling this one.
function updateGenericToCurrentCon(e, argCur)
{
	let cur = argCur;
	if(cur===null || cur===undefined)
		cur = getCurrent(e, "Constellations");

	let flds = getManualFieldsCon();

	setCurrent(e, cur);
	syncFields(e, cur, flds, false);
}

//Is this function used anymore? Commenting out to check
/*function setAllToNull(e, flds)
{
	for (i in flds)
	{
		let f = flds[i].field;
		clearUnlink(e, f);
	}
}*/

//get version entry labeled current
function getCurrent(e, type)
{
	let versList = libByName("globals").entries()[0].field("Latest Chapter")[0].field("Current Versioned " + type);
  
	return findMatchingVersion(versList, e.field("General Key"));
}

//set a specific version entry as the most current one
function setCurrent(e, cur)
{
	e.set("Current Version", []);
	e.link("Current Version", cur);
}

//Set the generalized fields to match the "current" version
function syncFields(e, cur, flds, hasAttr)
{
	if(hasAttr)
	{
		for (let i in flds)
		{
			let fld = flds[i].field;
			let att = flds[i].attr;
			let cf = cur.field(fld);
			e.set(fld, cf);
		
			if(!(att===undefined))
			{
				for(let j in cf)
				{
					let ca = cf[j].attr(att);
					e.field(fld)[j].setAttr(att, ca);
				}
			}
		}
	}
	else
	{
		for (let i in flds)
		{
			let fld = flds[i].field;
			let cf = cur.field(fld);
			e.set(fld, cf);
		}
	}
}
