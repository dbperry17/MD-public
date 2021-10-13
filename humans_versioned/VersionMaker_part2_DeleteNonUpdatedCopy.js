//Update, after saving
let e = entry();

if(e.field(spSt). equals (curStr))
{
  if(e.field(prStr).length > 0)
  {
    let delEnt = e.field(prStr)[0];
    if(delEnt.field("Copy?"))
    {
      if(e.field("Updated Chapter"). equals ("Yes"))
      {
        delEnt.set("Name", e.field("Name"));
        delEnt.set("Copy?", false);
      }
      else
      {
        let prevEnt = delEnt.field(prStr);
        e.set(prStr, prevEnt);
        delEnt.trash();
      }
    }
  }
}
