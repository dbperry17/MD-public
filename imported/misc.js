//Allows sorting entries in a library by a specific field
function sortProp(arr, prop)
{
  arr.sort({compare:function(a,b){return parseInt(a.field(prop)) - parseInt(b.field(prop))}});

  return arr;
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
    e.set(fld, []);
  else
    e.set(fld, null);
}

//MD uses an old version of JavaScript, so must write own includes() function
function includes(arr, item)
{
    return (arr.indexOf(item) > -1);
}

//Version for use in trigger/action/shared scripts
function mySort(fieldVal, myList)
{
  var length = myList.length;

  for (var i = 0; i < length; i++)
    if(fieldVal == myList[i])
      return i+1;
}

function findMatchingVersion(versioned, key)
{
	for (let i in versioned)
	{
		let v = versioned [i];
		let vKey = v.field("General Key");
		if(key.equals(vKey))
			return v;
	}
  
  return null;
}
