//Allows sorting entries in a library by a specific field
function sortProp(arr, prop)
{
  arr.sort({compare:function(a,b){return parseInt(a.field(prop)) - parseInt(b.field(prop))}});

  return arr;
}

//MD (on Android, at least) has an old version of JavaScript
//This function is needed as a workaround for functions built in to later versions of JavaScript.
//Needed for getCurrentChars
function objectValues(obj) {
    var res = [];
    for (var i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
            res.push(obj[i]);
        }
    }
    return res;
}

//Shortcut function
function isArray(e, fld)
{
  return e.field(fld) instanceof Array;
}

//For use in setting a field whether it is an array of entries, an array of something else, or not an aray
function setLink(e, fld, value)
{
  if(isArray(e, fld))
  {
    for (i in value)
    {
      if(value[0].constructor == String)
        e.set(fld, value);
      else if(value[0] instanceof Entry)
        e.link(fld, value[i]);
      else
        str+="Error: type not accounted for";
    }
  }
  else
    e.set(fld, value);
}

//Same as setLink, but empties entries from arrays and sets other fields to null
function clearUnlink(e, fld)
{
  if(isArray(e, fld))
  {
    let value = e.field(fld);
    for (i in value)
    {
      if(value[0].constructor == String)
        e.set(fld, null); //move outside for-loop?
      else if(value[0] instanceof Entry)
      {
          e.unlink(fld, value [i]);
      }
      else
        str+="Error: type not accounted for";
    }
  }
  else
    e.set(fld, null);
}

//MD uses an old version of JavaScript, so must write own includes() function
function includes(arr, item)
{
    return (arr.indexOf(item) > -1);
}

//When choosing a field to sort by, MD does it alphabetically.
//Using this function, one can create a JavaScript field that takes
//the possible values of the sorted field in the order you place importance,
//with values going from low to high.
//Note that this version is for use in JavaScript fields only,
//as no entry is specified. For use in trigger/action/shared scripts,
//use mySort(), the function listed after this one.

/*
//Example usage:
var myList = ["Equipment", "Reusable Item", "Equipable Item", "Consumable", "Unknown"];
var myFieldName = "Usage";
sortField(myFieldName, myList);
*/

function sortField(fieldName, myList)
{
    //var myField = field(fieldName);
  var myField = fieldName;
  var length = myList.length;

  for (var i = 0; i < length; i++)
    if(myField == myList[i])
      return i+1;
}

//Version for use in trigger/action/shared scripts
function mySort(fieldVal, myList)
{
  var length = myList.length;

  for (var i = 0; i < length; i++)
    if(fieldVal == myList[i])
      return i+1;
}
