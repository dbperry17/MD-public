function getManualFieldsHu()
{
  return [{field:"Picture", type:"Array"},
  {field:"Valid As Of", type:"Array"},
  {field:"Current Status", type:"String"},
  {field:"Originally in TWSA?", type:"Boolean"}, //Must be boolean instead of JS field because of dependencies
  {field:"Read TWSA?", type:"Boolean"}, //Must be boolean instead of JS field because of dependencies
  {field:"Achievements", type:"Array"},
  {field:"Contracts", type:"Array"},
  {field:"Supporting Constellation", type:"Array"},
  {field:"Stigma", attr:"Level", type:"Array"},
  {field:"Personal Attributes", attr:"Extra notes", type:"Array"},
  {field:"Personal Skills", attr:"Level", type:"Array"},
  {field:"Any stats known?", type:"Boolean"}, //Must be boolean instead of JS field because of dependencies
  {field:"Important Items", type:"Array"},
  {field:"Single Use Items", attr:"Amount owned", type:"Array"},
  {field:"Liked by", type:"Array"},
  {field:"Disliked by", type:"Array"},
  {field:"Neither liked nor disliked by", type:"Array"},
  {field:"Any Scenario Data?", type:"Boolean"}, //Must be boolean instead of JS field because of dependencies
  {field:"Main Scenario #4 activated?", type:"Boolean"}, //Must be boolean instead of JS field because of dependencies
  {field:"Mission 4: Flag Holder?", type:"Boolean"}]; //Must be boolean instead of JS field because of dependencies
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


function getManualFieldsDk()
{
  return [{field:"Picture", type:"Array"},
  {field:"Valid As Of", type:"Array"},
  {field:"Contracts", type:"Array"}];
}

function getManualFieldsCon()
{
  return [{field:"Picture", type: "Array"},
  {field:"Valid As Of", type:"Array"},
  {field:"Contracts", type: "Array"},
  {field:"Stigmas", type: "Array"},
  {field:"Incarnations", type: "Array"}];
}

function getManualFieldsSt()
{
  return [{field: "Valid as of", type: "Array"},
          {field: "Flag Color", type: "String"}, //must be manual because colors/icons
          {field: "Target Station", type: "Array"},
          {field: "Targeted by", type: "Array"},
          {field: "Allies", type: "Array"},
          {field: "Leader", type: "Array"},
          {field: "Members", type: "Array"}];
}
