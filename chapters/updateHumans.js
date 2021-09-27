/**********
 * HUMANS *
 **********/

function setHumans(charList)
{
  log("charList length: " + charList.length);
  const filteredArray = getCurrentEntries(charList);
  log("Finished humans setup, starting humans.");
  const fLen = filteredArray.length;

  for(var i = 0; i < fLen; i++)
  {
    let h = filteredArray [i];
    //log("FILTERED LIST: Human: " + h.field("Abbreviation") + ", " + h.field("Custom Entry Name"));
    filteredArray[i].set("Spoiler Status", "Current Entry");
  }

  for (let h in filteredArray)
  {
    let v = filteredArray[h].field("Generalized Entry")[0];
    //log(v.field("Name"))
    copyCurrentToGenericHu(v);
    //v.set("Introduced?", true);
  }
}

/***************/

function setHumanSpoiler(e, spoiler)
{
  var list = libByName("Humans — Versioned"). linksTo(e);

  //testing why Cheon Inho messes up
  //list = sortProp(list, "Status Sort");

  let eCh = e.field("Chapter #");
  
  var validList = validHumanList(eCh, list);

  let len = validList.length;

  log("\nChapter " + eCh)

  for (let i = 0; i < len; i++)
  {
    let h = validList[i];
    //log("Human: " + h.field("Abbreviation") + ", " + h.field("Custom Entry Name") + ", " + spoiler);
    h.set("Spoiler Status", spoiler);
  }

  return validList;
}

/*****************/

function validHumanList(ch, list)
{
  var validList = [];
  let len = list.length;

  for (let i = 0; i < len; i++)
  {
  
    let h = list[i];
    let hCh = h.field("Chapter Sort");
    if(hCh == ch)
      validList.push(h);
  }

  return validList;
}
