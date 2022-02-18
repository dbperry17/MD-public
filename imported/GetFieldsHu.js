function getManualFieldsHu()
{
  return [{field:"Picture"},
  {field:"Originally in TWSA?"},
  {field:"Read TWSA?"},
  {field:"Achievements"},
  {field:"Contracts"},
  {field:"Supporting Constellation"},
  {field:"Stigma", attr:"Level"},
  {field:"Personal Attributes", attr:"Extra notes"},
  {field:"Personal Skills", attr:"Level"},
  {field:"Any stats known?"},
  {field:"Important Items"},
  {field:"Single Use Items", attr:"Amount owned"},
  {field:"Liked by"},
  {field:"Disliked by"},
  {field:"Neither liked nor disliked by"},
  {field:"Any Scenario Data?"},
  {field:"Main Scenario #4 activated?"},
  {field:"Mission 4: Flag Holder?"},
  {field:"Sorting Key"}];
}

/*
//Attributes of fields
field("Stigma").attr("Level")
field("Personal Attributes").attr("Extra notes")
field("Personal Skills").attr("Level")
field("Single Use Items").attr("Amount owned")
*/
function getAttrFieldsHu()
{
  return ["Stigma", "Personal Attributes", "Personal Skills", "Single Use Items"];
}

function getFieldAttrsHu()
{
  return ["Level", "Extra notes", "Level", "Amount owned"];
}