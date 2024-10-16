import { ActionFormData } from "@minecraft/server-ui";

export default function GamemodeChanger(): ActionFormData {
  return new ActionFormData()
    .title("Gamemode Changer")
    .body("Change your Gamemode")
    .button("Default", "textures/items/cookie")
    .button("Survival", "textures/items/iron_sword")
    .button("Creative", "textures/items/diamond_pickaxe")
    .button("Adventure", "textures/items/bow_pulling_0");
}