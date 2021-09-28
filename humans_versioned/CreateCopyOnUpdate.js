//Updating, opening edit entry card
//Field names to copy to another lib
const fields=getAllFields();

let ent = entry();

if(ent.field(spSt).equals (curStr))
{
  //Create empty object
  let newLogEntry = new Object();
    
  //create new entry
  let newEntry = lib().create(newLogEntry);
    
  //Fill new log entry with values from state
  for (let i of fields)
  {
    var fn = i.field;

    newEntry.set(fn, ent.field(fn));
    if(fn.equals("Stigma") || fn.equals ("Personal Skills") || fn.equals ("Personal Attributes") || fn.equals ("Single Use Items"))
    {
      var len = ent.field(fn).length
      for(var j = 0; j < len; j++)
        newEntry.field(fn)[j]. setAttr(i.attr, ent.field(fn)[j]. attr(i.attr)); 
    }
  }

  ent.set("Updated Chapter", null)

  newEntry.set(spSt, oldStr);
  newEntry.set("Copy?", true);
  newEntry.set("myKey", ent.field("myKey") + "C");

  if(ent.field(prStr).length > 0)
    ent.unlink(prStr, ent.field(prStr)[0]);
  ent.link(prStr, newEntry);
}
