function getTypeEntry(e)
{
  let ent = null;
  let type = e.field("Type");

  switch(type)
  {
    case "Achievement":
      ent = e.field("Concept (Achievement)")[0];
      break;
    case "Attribute":
      ent = e.field("Concept (Attribute)")[0];
      break;
    case "Contract":
      ent = e.field("Concept (Contract)")[0];
      break;
    case "Deus ex Machina":
      ent = e.field("Concept (Deus ex Machina)")[0];
      break;
    case "Item":
      ent = e.field("Concept (Item)")[0];
      break;
    case "Scenario":
      ent = e.field("Concept (Scenario)")[0];
      break;
    case "Skill":
      ent = e.field("Concept (Skill)")[0];
      break;
    case "Station":
      ent = e.field("Concept (Station)")[0];
      break;
    case "Stigma":
      ent = e.field("Concept (Stigma)")[0];
      break;
    case "Term":
      ent = e.field("Concept (Term)")[0];
      break;
    default:
      message ("No entry found.");
      break;
  }

  return ent;;
}
