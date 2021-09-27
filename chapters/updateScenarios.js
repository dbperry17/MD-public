/*************
 * SCENARIOS *
 ************/

function setScenarios (scenList)
{
  for (k in scenList)
  {
    let l = scenList[k];
    let a = l.attr("Timing");

    if(a.equals("Start") || a.equals("Ongoing"))
      l.set("Spoiler Status", "Current Entry");
  }
}

function setScenarioSpoiler(e, status)
{
  let scenList = e.field("Ongoing Scenario(s)");
  let len = scenList.length;


  for(var i = 0; i < len; i++)
  {
    let scen = scenList[i];
    scen.set("Spoiler Status", status);
  }

  return scenList;
}
