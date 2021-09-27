/************
 * STATIONS *
 ************/

function setStations(statList)
{
  const filteredArray = getCurrentEntries(statList);
  log("Finished stations setup, starting stations.");
  const fLen = filteredArray.length;

  for(var i = 0; i < fLen; i++)
  {
    filteredArray[i].set("Spoiler Status", "Current Entry");
  }

  for (let s in filteredArray)
  {
    let v = filteredArray[s].field("Generalized Entry")[0];
    copyCurrentToGenericSt(v);
  }
}

function setStationSpoiler(e, spoiler)
{
  var list = libByName("Stations — Versioned"). linksTo(e);

  let eCh = e.field("Chapter #");
  
  var validList = validStationList(eCh, list);

  let len = validList.length;

  for (let i = 0; i < len; i++)
  {
    let s = validList[i];
    s.set("Spoiler Status", spoiler);
  }

  return validList;
}

function validStationList(ch, list)
{
  var validList = [];
  let len = list.length;

  for (let i = 0; i < len; i++)
  {
  
    let s = list[i];
    let sCh = s.field("Chapter Sort")[0];
    if(sCh == ch)
      validList.push(h);
  }

  return validList;
}
