//Shared
function setColor(e)
{
  if(e.field("Spoiler Status"). equals ("Old Entry"))
    e.set("Spoiler Status color", "#0c243c");
  else if(e.field("Spoiler Status"). equals ("Future Entry"))
    e.set("Spoiler Status color", "#b0a8c0");
  else
    e.set("Spoiler Status color", null);
}
