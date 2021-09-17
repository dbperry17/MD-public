//(possible JS libraries for JS fields must be separate from JS libraries for MD libraries)


//When choosing a field to sort by, MD does it alphabetically.
//Using this function, one can create a JavaScript field that takes
//the possible values of the sorted field in the order you place importance,
//with values going from low to high.
//Note that this version is for use in JavaScript fields only,
//as no entry is specified. For use in trigger/action/shared scripts,
//use mySort(), which is defined in all_libraries-misc.js.
/*
//Example usage:
var myList = ["Equipment", "Reusable Item", "Equipable Item", "Consumable", "Unknown"];
var myFieldName = "Usage";
sortField(myFieldName, myList);
*/

function sortField(fieldName, myList)
{
  var myField = field(fieldName);
  var length = myList.length;

  for (var i = 0; i < length; i++)
    if(myField == myList[i])
      return "i + 1 = " + (i + 1);
      //return i+1;

  return "that's weird";
}
