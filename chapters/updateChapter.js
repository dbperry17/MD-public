//uses uniq.js, found at https://gist.github.com/dbperry17/c40f1bfd89a7cc3d567bff4c761c7883
//because the version of JavaScript used in MD doesn't have "Set()"

//by default, MD outputs entries in an array that is sorted by creation date.
function getAndSortCh()
{
  var oList = lib().entries();

  //sort by chapter
  return sortProp(oList, "Chapter #");
}

//eList = chapters sorted from earliest to latest (often all chapters)
//lc = latest chapter read
function setChapter(eList, lc)
{
 	charList = []
 	scenList = []
 	statList = []

  let len = eList.length;

 	for(var i = 0; i < len; i++)
 	{
  		var e = eList[i];
  		let eCh = e.field("Chapter #");
		
    log(eCh + " > " + lc + "? " + (eCh > lc));
  		if(eCh > lc) //If chapter # is greater than that of the latest chapter
  		{
      let sp = "Future Entry";
      log(sp);
   			e.set("Read?", false);
  	 		setHumanSpoiler(e, sp);
	   		setScenarioSpoiler(e, sp)
	   		setStationSpoiler (e, sp);
	  	}
	  	else
	  	{
      let sp = "Old Entry";
      log(sp);
	   		e.set("Read?", true);
			
		  	//Keep track of all entries not labeled "future"
	  		uniqueArray(statList.concat(setStationSpoiler (e, sp)));
      uniqueArray(charList.concat(setHumanSpoiler(e, sp)));
      uniqueArray(statList.concat(setScenarioSpoiler(e, sp)));
	  	}
 	}
	
	 setEntriesCurrent(charList, true);
  setScenariosCurrent(scenList);
  setEntriesCurrent(statList, false);
}

function validAsOfList(ch, list)
{
  var validList = [];
  let len = list.length;

  for (let i = 0; i < len; i++)
  {
  
   	//le: linked entry
    let le = list[i];
    let leCh = le.field("Chapter Sort"); //Get chapter number of this version of the entry
	//alternatively, the above can be written as:
		//let leCh = le.field("Valid as of").field("Chapter #");

/*
    let lCEN = le.field("Custom Entry Name");
    if(ch == 1)
      log(lCEN + "\n" + leCh + " == " + ch + "? " + (leCh == ch));
*/

    if(leCh == ch) //if chapter number for this linked entry is identical to current chapter number
      {
        validList.push(le); //push to validList
        uniqueArray(validList);
      }
  }

/*
  if(validList.length > 0)
    if(ch == 1)
    {
      log("validList = ")
      for (let j in validList)
        log(validList[j].field("Custom Entry Name"));
    }
*/
  return validList;
}

function setLinkedEntrySpoiler(list, spoiler)
{
	let len = list.length;
	
	for (let i = 0; i < len; i++)
	{
		let h = list[i];
		h.set("Spoiler Status", spoiler); //set versionedEntry's spoiler status to provided argument
	}

	return list; //return list of versionedHuman objects that have the "Valid as of" field set as e
}

function setHumanSpoiler(e, spoiler)
{
 	//Get all versioned humans that link to the chapter entry
 	var list = libByName("Humans — Versioned"). linksTo(e);

 	//get chapter #
 	let eCh = e.field("Chapter #");

 	var validList = validAsOfList(eCh, list); //filter list to only have entries that are linked via "Valid as of" field
 	//this means entries linked to the chapter only via "First Appearance" or any other field is ignored;
	
for (i in validList)
{
  let h = validList[i];
  if((h.field("Abbreviation")).equals("KDJ"))
    log("Setting KDJ (Ch. " + h.field("Chapter Sort") + ") to spoiler status: " + spoiler);
}
 	return setLinkedEntrySpoiler(validList, spoiler);
}

//functionally identical to setHumanSpoiler(), just working with Stations instead
function setStationSpoiler(e, spoiler)
{
  var list = libByName("Stations — Versioned"). linksTo(e);

  let eCh = e.field("Chapter #");  
  var validList = validAsOfList(eCh, list);
  
  return setLinkedEntrySpoiler(validList, spoiler);
}

//Same as setHumanSpoiler(), but these can be found in a field in e, so no need to filter list
function setScenarioSpoiler(e, spoiler)
{
  let scenList = e.field("Ongoing Scenario(s)");
  
  return setLinkedEntrySpoiler(scenList, spoiler);
}

/********/

function setScenariosCurrent(scenList)
{
  for (k in scenList)
  {
    let l = scenList[k];
    let a = l.attr("Timing");

    if(a.equals("Start") || a.equals("Ongoing"))
      l.set("Spoiler Status", "Current Entry");
  }
}
