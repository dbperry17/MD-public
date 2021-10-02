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

	for(var i = 0; i < len; i++)
	{
		var e = eList[i];
		let eCh = e.field("Chapter #");
		
		if(eCh > lc) //If chapter # is greater than that of the latest chapter
		{
			e.set("Read?", false);
			setHumanSpoiler(e, "Future Entry");
			setScenarioSpoiler(e, "Future Entry")
			setStationSpoiler (e, "Future Entry");
		}
		else
		{
			e.set("Read?", true);
			
			//Keep track of all entries not labeled "future"
			statList.push(setStationSpoiler (e, "Old Entry"));
			charList.push(setHumanSpoiler(e, "Old Entry"));
			statList.push(setScenarioSpoiler(e, "Old Entry"));
		}
	}
	
	setEntriesCurrent(charList);
  setScenariosCurrent(scenList);
	setEntriesCurrent(statList);
}

function validAsOfList(ch, list)
{
  var validList = [];
  let len = list.length;

  for (let i = 0; i < len; i++)
  {
  
	//le: linked entry
    let le = list[i];
    let leCh = le.field("Chapter Sort")[0]; ////Get chapter number of this version of the entry
	//alternatively, the above can be written as:
		//let leCh = le.field("Valid as of").field("Chapter #");
	
    if(leCh == ch) //if chapter number for this linked entry is identical to current chapter number
      validList.push(le); //push to validList
  }

  return validList;
}

function setLinkedEntrySpoiler(list, spoiler)
{
	let len = validList.length;
	
	for (let i = 0; i < len; i++)
	{
		let h = validList[i];
		h.set("Spoiler Status", spoiler); //set versionedEntry's spoiler status to provided argument
	}

	return validList; //return list of versionedHuman objects that have the "Valid as of" field set as e
}

function setHumanSpoiler(e, spoiler)
{
	//Get all versioned humans that link to the chapter entry
	var list = libByName("Humans — Versioned"). linksTo(e);

	//get chapter #
	let eCh = e.field("Chapter #");

	var validList = validAsOfList(eCh, list); //filter list to only have entries that are linked via "Valid as of" field
	//this means entres linked to the chapter only via "First Appearance" or any other field is ignored.
	
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
function setScenarioSpoiler(e, status)
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
