//argCur used in case current has already been found in the method calling this one.
function updateGenericToCurrentHu(e, argCur)
{

let getStart = start();
let getEnd = "";
	let cur = argCur;
	if(cur===null || cur===undefined)
{
		cur = getCurrentHu(e);
getEnd = end(getStart);
}
	let flds = getManualFieldsHu();

// let nullStart = start();
// 	setAllToNullHu(e, flds);
// let nullEnd =  end(nullStart);
  
let setCurStart = start();
	setCurrentHu(e, cur);
let setCurEnd = end(setCurStart);

let setFldsStart = start();
	setGenFieldsToCurHu(e, cur, flds);
let setFldsEnd = end(setFldsStart);

if((e.field("General Key")). equals ("GI1—OR008—YJH"))
{
  if(!getEnd.equals(""))
    output ("Junghyeok's getCurrent", getEnd);
  //output ("Junghyeok's setNull", nullEnd);
  output ("Junghyeok's setCur", setCurEnd);
  output ("Junghyeok's setFlds", setFldsEnd);
}
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
	e.set("Current Version", []);
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
		{
			for(let j in cf)
			{
				let ca = cf[j].attr(att);
				e.field(fld)[j].setAttr(att, ca);
			}
		}
	}	
}
