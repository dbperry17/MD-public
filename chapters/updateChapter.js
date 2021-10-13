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
  let allCh = lib(). entries ();
 	let charList = [];
 	let scenList = [];
 	let statList = [];

  let len = eList.length;

 	for(var i = 0; i < len; i++)
 	{
  		var e = eList[i];
  		let eCh = e.field("Chapter #");
    e.set("Latest Chapter", allCh[allCh.length - lc]);
		
  		if(eCh > lc) //If chapter # is greater than that of the latest chapter
  		{
      let sp = "Future Entry";
   			e.set("Read?", false);
 
  	 		setHumanSpoiler(e, sp);
	   		setScenarioSpoiler(e, sp);
	   		setStationSpoiler (e, sp);
	  	}
	  	else
	  	{
      let sp = "Old Entry";
	   		e.set("Read?", true);
			
		   	//Keep track of all entries not labeled "future"
 	   	let tempStat = setStationSpoiler (e, sp);
      let tempChar = setHumanSpoiler(e, sp);
      let tempScen = setScenarioSpoiler(e, sp);

      statList = Array.prototype.concat.apply(statList, tempStat);
      charList = Array.prototype.concat.apply(charList, tempChar);
      scenList.push(tempScen);
    }
  }

  let uStat = filterByID(statList);
  let uChar = filterByID(charList);
  let uScen = filterByID(scenList);
	
	 setEntriesCurrent(uChar, true);
  setScenariosCurrent(uScen);
  setEntriesCurrent(uStat, false);
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

    if(leCh == ch) //if chapter number for this linked entry is identical to current chapter number
        validList.push(le); //push to validList
  }

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
  for(let j in scenList)
  {
    for (let k in scenList[k])
    {
      let l = scenList[k];
      //log("Scenario #" + k + ": " + l.field("Scenario Name"));
      let a = l.attr("Timing");

      if(a.equals("Start") || a.equals("Ongoing"))
        l.set("Spoiler Status", "Current Entry");
    }
  }
}

//I forgot to note where I found the code I used for this, but I believe this function is to remove duplicates from the array,
//as some entries were added more than once.
function filterByID(array)
{
  let flags = {};
  let retVal = array.filter(function(entry)
  {
    if (flags[entry.id])
    {
      return false;
    }
    flags[entry.id] = true;
    return true;
  });

  return retVal;
}
