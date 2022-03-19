/*
 * Because JavaScript in fields is slightly different than in Library Scripts, this file is to be the only one imported for JavaScript fields, and should never be used in library scripts.
 */

//When choosing a field to sort by, MD does it alphabetically.
//Using this function, one can create a JavaScript field that takes the possible values of the sorted field in the order you place importance, with values going from low to high.
//Note that this version is for use in JavaScript fields only, as no entry is specified. For use in trigger/action/shared scripts, use mySort(), which is defined in all_libraries/misc.js.

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
      return i+1;

  return -1;
}

function leadingZeros(n)
{
  return ('000'+n).slice(-3);
}
/*
function getTypeEntry()
{
  let e = null;
  let type = field("Type");

  e = field("Concept

  switch(type)
  {
    case "Achievement":
      e = field("Concept (Achievement)")[0];
      break;
    case "Attribute":
      e = field("Concept (Attribute)")[0];
      break;
    case "Contract":
      e = field("Concept (Contract)")[0];
      break;
    case "Deus ex Machina":
      e = field("Concept (Deus ex Machina)")[0];
      break;
    case "Item":
      e = field("Concept (Item)")[0];
      break;
    case "Scenario":
      e = field("Concept (Scenario)")[0];
      break;
    case "Skill":
      e = field("Concept (Skill)")[0];
      break;
    case "Station":
      e = field("Concept (Station)")[0];
      break;
    case "Stigma":
      e = field("Concept (Stigma)")[0];
      break;
    case "Term":
      e = field("Concept (Term)")[0];
      break;
    default:
      message ("No entry found.");
      break;
  }

  return e;
}
*/
