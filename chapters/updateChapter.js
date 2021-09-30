//by default, MD outputs entries in an array that is sorted by creation date.
function getAndSortCh()
{
  var oList = lib().entries();

  //sort by chapter
  return sortProp(oList, "Chapter #");
}

function setChapter(eList, start, lc)
{
  log ("Start set Chapter");
  var len = eList.length;

  const charList = [];
  const scenList = [];
  const statList = [];

  for(var i = start; i < len; i++)
  {
    var e = eList[i];
    let eCh = e.field("Chapter #");

    if(eCh > lc)
    {
      e.set("Read?", false);
      setHumanSpoiler(e, "Future Entry");
      setScenarioSpoiler(e, "Future Entry")
      setStationSpoiler (e, "Future Entry");
    } 
    else
    {
      e.set("Read?", true);
      statList = setStationSpoiler (e, "Old Entry");
      //charList = setHumanSpoiler(e, "Old Entry");
      var tempListH = setHumanSpoiler(e, "Old Entry");
      for (h in tempListH)
        charList.push(tempListH[h]);
      var tempListS = setScenarioSpoiler(e, "Old Entry");
    
      if(eCh == lc)
        for(s in tempListS)
          scenList.push(tempListS[s]);
    }
  }

  log("Finished chapters, starting humans setup");
  setHumans(charList);
  log("Finished humans starting scenarios");
  setScenarios(scenList);
  log ("Finished scenarios, starting stations.");
  setStations(statList);
  log("Finished Stations.");
}
