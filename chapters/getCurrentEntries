//probably rewrite a bunch of this now that I have a solid goal

//https://stackoverflow.com/a/53042397
//Note: MD uses an old version of JavaScript, so objectValues() function needed to be written.
//It is in all_libraries/misc.js
function getCurrentEntries(array1)
{
  const na = "Name";
  const or = "Order introduced";
  const chSo = "Chapter Sort";

  log("Array pre-filter: (len = " + array1.length + ")");
  for (a in array1)
{
    let h = array1[a];
    log("a = " + a + ", Human: " + h.field("Abbreviation") + ", " + h.field("Custom Entry Name") + ", id = " + h.id);
}

const array = filterByID(array1);

  log("Array post-first-filter: (len = " + array.length + ")");
  for (a in array)
{
    let h = array[a];
    log("a = " + a + ", Human: " + h.field("Abbreviation") + ", " + h.field("Custom Entry Name") + ", id = " + h.id);
}

  let filteredArray = objectValues(array.reduce((unique, o) => {
    if(!unique[o.field(or)] || (+(o.field(chSo)) > +(unique[o.field(or)].field(chSo))))
      unique[o.field(or)] = o;
    return unique;
  }, {}));

  log("Array post-filter: (len = " + filteredArray.length + ")");
  for (f in filteredArray)
{
    let h = filteredArray[f];
    log("f = " + f + ", Human: " + h.field("Abbreviation") + ", " + h.field("Custom Entry Name") + ", id = " + h.id);
}

  return filteredArray;
}

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
