  
var fieldList = {
      
  all: function()
  {
    return [{field:"Picture"},
    {field:"Name"},
    {field:"Title/Nickname"},
    {field:"Hangul"},
    {field:"Abbreviation"},
    {field:"Listen"},
    {field:"Current Version"},
    {field:"Valid as of"},
    {field:"First Appearance"},
    {field:"Current Importance"},
    {field:"General Importance"},
    {field:"Current Status"},
    {field:"Last status update"},
    {field:"Originally in TWSA?"},
    {field:"Role in TWSA"},
    {field:"TWSA Notes"},
    {field:"Relationship to Dokja"},
    {field:"Personality"},
    {field:"Other notes"},
    {field:"Achievements"},
    {field:"Age"},
    {field:"Supporting Constellation"},
    {field:"Stigma", attr:"Stigma:Level"},
    {field:"Personal Attributes", attr:"Personal Attributes:Extra notes"},
    {field:"Personal Skills", attr:"Personal Skills:Level"},
    {field:"Any stats known?"},
    {field:"Stamina"},
    {field:"Strength"},
    {field:"Agility"},
    {field:"Mana"},
    {field:"Unknown distribution"},
    {field:"Sum of Stats"},
    {field:"Overall Evaluation"},
    {field:"Extra Notes"},
    {field:"Placeholder"},
    {field:"Main Scenario #4: Flag Color"},
    {field:"Home Station"},
    {field:"Important Items"},
    {field:"Single Use Items", attr:"Single Use Items:Amount owned (if known)"},
    {field:"Liked by"},
    {field:"Disliked by"},
    {field:"Neither liked nor disliked by"},
    {field:"Any Scenario Data?"},
    {field:"Main Scenario #4 activated?"},
    {field:"Mission 4: Flag Holder?"},
    {field:"Entry Description"},
    {field:"Sorting Key"},
    {field:"General Key"},
    {field:"Updated Chapter"},
    {field:"All Versions"},
    {field:"General Importance Sort"},
    {field:"Current Importance Sort"},
    {field:"Status Sort"},
    {field:"Order introduced"}];
  },

  /*
  //Attributes of fields
  field("Stigma").attr("Level")
  field("Personal Attributes").attr("Extra notes"
  field("Personal Skills").attr("Level")
  field("Single Use Items").attr("Amount owned (if known)"
  */

  attrFields: function()
  {
    return ["Stigma", "Personal Attributes", "Personal Skills", "Single Use Items"];
  },

  attrs: function()
  {
    return ["Level", "Extra notes", "Level", "Amount owned (if known)"];
  },

  versioned: function ()
  {
    //Field names to copy to another lib
    const fields=[{field:"Picture"},
    {field:"Name"},
    {field:"Title/Nickname"},
    {field:"Hangul"},
    {field:"Abbreviation"},
    {field:"Listen"},
    {field:"Valid as of"},
    {field:"First Appearance"},
    {field:"Current Importance"},
    {field:"General Importance"},
    {field:"Status"},
    {field:"Last status update"},
    {field:"Originally in TWSA?"},
    {field:"Role in TWSA"},
    {field:"TWSA Notes"},
    {field:"Relationship to Dokja"},
    {field:"Personality"},
    {field:"Other notes"},
    {field:"Achievements"},
    {field:"Age"},
    {field:"Supporting Constellation"},
    {field:"Stigma", attr:"Stigma:Level"},
    {field:"Personal Attributes", attr:"Personal Attributes:Extra notes"},
    {field:"Personal Skills", attr:"Personal Skills:Level"},
    {field:"Any stats known?"},
    {field:"Stamina"},
    {field:"Strength"},
    {field:"Agility"},
    {field:"Mana"},
    {field:"Unknown distribution"},
    {field:"Sum of Stats"},
    {field:"Overall Evaluation"},
    {field:"Extra Notes"},
    {field:"Placeholder"},
    {field:"Main Scenario #4: Flag Color"},
    {field:"Home Station"},
    {field:"Important Items"},
    {field:"Single Use Items", attr:"Single Use Items:Amount owned (if known)"},
    {field:"Liked by"},
    {field:"Disliked by"},
    {field:"Neither liked nor disliked by"},
    {field:"Any Scenario Data?"},
    {field:"Main Scenario #4 activated?"},
    {field:"Mission 4: Flag Holder?"},
    {field:"Entry Description"},
    {field:"Custom Description"},
    {field:"mykey"},
    {field:"General Key"},
    {field:"Custom Entry Name"},
    {field:"Spoiler Status"},
    {field:"Previous Version"},
    {field:"Copy?"},
    {field:"General Importance Sort"},
    {field:"Current Importance Sort"},
    {field:"Status Sort"},
    {field:"Order introduced"},
    {field:"Chapter Sort"},
    {field:"Spoiler Sort"}];

      return fields;
  },

  sorting: function()
  {
    return ["General Importance Sort", "Current Importance Sort", "Status Sort", "Order Introduced", "Chapter Sort", "Spoiler Sort"];
  },

  removed: function()
  {
    return ["Custom Description", "Custom Entry Name", "Spoiler Status", "Copy?", "Chapter Sort", "Spoiler Sort"];
  },

  changed: function()
  {
    return [{ver:"Status", gen:"Current Status"}];
    //{ver:"mykey", gen:"Sorting Key"},
    //{ver:"Previous Version", gen:"All Versions"}];
  },

  added: function()
  {
    return ["Current Version", "Updated Chapter"];
  },

  shared: function()
  {
    return ["Picture",
    "Name",
    "Title/Nickname",
    "Hangul",
    "Abbreviation",
    "Listen",
    "Valid as of",
    "First Appearance",
    "Current Importance",
    "General Importance",
    "Last status update",
    "Originally in TWSA?",
    "Role in TWSA",
    "TWSA Notes",
    "Relationship to Dokja",
    "Personality",
    "Other notes",
    "Achievements",
    "Age",
    "Supporting Constellation",
    "Stigma",
    "Personal Attributes",
    "Personal Skills",
    "Any stats known?",
    "Stamina",
    "Strength",
    "Agility",
    "Mana",
    "Unknown distribution",
    "Sum of Stats",
    "Overall Evaluation",
    "Extra Notes",
    "Placeholder",
    "Main Scenario #4: Flag Color",
    "Home Station",
    "Important Items",
    "Single Use Items",
    "Liked by",
    "Disliked by",
    "Neither liked nor disliked by",
    "Any Scenario Data?",
    "Main Scenario #4 activated?",
    "Mission 4: Flag Holder?",
    "Entry Description",
    "General Key",
    "General Importance Sort",
    "Current Importance Sort",
    "Status Sort",
    "Order introduced"];
  }
}
