//Shared
/*
Imported Files:
 - humans/copyCurrentToGenericHu.js
 - stations/copyCurrentToGenericSt.js
*/

//MD (on Android, at least) has an old version of JavaScript
//This function is needed as a workaround for functions built in to later versions of JavaScript.
//Unfortunately, it appears that I failed to note the source of this bit of code after confirming it worked.
//Needed for getCurrentEntries()
function objectValues(obj) {
  var res = [];
  for (var i in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
          res.push(obj[i]);
      }
  }
  return res;
}

function getCurrentEntries(array)
{
  const gk = "General Key";
  const chSo = "Chapter Sort";  
  //const arrUnique = filterByID(array); //Remove duplicates

  //https://stackoverflow.com/a/53042397
  //Note: MD uses an old version of JavaScript, so objectValues() function needed to be written, as seen above
  //This code should go through the list of entries that are NOT labeled "Future Entry", and if it finds an entry with the same "General Key" (which is thus a different version of the same character), it will only add the one with the largest chapter number to filteredArray (that is, the most recent version of a character)
  let filteredArray = 
    objectValues(array.reduce((unique, o) =>
    {
      if(!unique[o.field(gk)] || (+(o.field(chSo))
        > +(unique[o.field(gk)].field(chSo))))
          unique[o.field(gk)] = o;
      return unique;
    }, {}));

  return filteredArray;
}

function setEntriesCurrent(entList, isHuman)
{
  //Filter entList so that the only entry for each item is based on the entry with the largest Chapter Sort value (only among entries without the Spoiler Status of "Future Entry")
  const filteredArray = getCurrentEntries(entList); 

  //Once all current entries are found, copy fields from current versioned entry to generalized entry
  for (let i in filteredArray)
  {
    //Don't use setLinkedEntrySpoiler() because it results in looping through the list twice (more if used within this loop)
    let cur = filteredArray [i]!
    filteredArray[i].set("Spoiler Status", "Current Entry");
    let gen = cur.field("Generalized Entry")[0];
    if(isHuman)
      copyCurrentToGenericHu(gen, cur)
    else
      copyCurrentToGenericSt(gen);
  }
}
