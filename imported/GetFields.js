function getManualFieldsHu()
{
  return [{field:"Picture", type:"Array"},
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
  {field:"Contracts", type:"Array"},
  {field:"Current Version", type:"Array"}];
}

//Whittle down later when I can, just getting it on github
function getManualFieldsCon()
{
  return [{field:"Picture", type: ""},
  {field:"Screen Name", type: ""},
  {field:"Order Introduced", type: ""},
  {field:"Alternate Translations", type: ""},
  {field:"Real Name", type: ""},
  {field:"Alignment", type: ""},
  {field:"Type", type: ""},
  {field:"Dokja's Analysis", type: ""},
  {field:"Trivia", type: ""},
  {field:"Extra Notes", type: ""},
  {field:"Contracts", type: ""},
  {field:"Stigmas", type: ""},
  {field:"Incarnations", type: ""},
  {field:"Total Spent", type: ""},
  {field:"Total Earned", type: ""},
  {field:"Total Coins Spent Helping Dokja", type: ""},
  {field:"Total Coins Spent Hindering Dokja", type: ""},
  {field:"Spoiler Status", type: ""},
  {field:"Chapters with coins spent", type: ""},
  {field:"Chapters with coins spent:Coins Spent Helping Dokja", type: ""},
  {field:"Chapters with coins spent:Coins Spent Hindering Dokja", type: ""},
  {field:"Chapters with coins spent:Coins Spent (Total)", type: ""},
  {field:"Entry Name", type: ""},
  {field:"Sort All", type: ""},
  {field:"Identifier", type: ""},
  {field:"Generic Thumbnail", type: ""},
  {field:"Chapter Sort", type: ""},
  {field:"globals", type: ""},
  {field:"All Characters Entry", type: ""},
  {field:"Current Version", type: ""},
  {field:"First Appearance", type: ""},
  {field:"All Versions"}];
}
