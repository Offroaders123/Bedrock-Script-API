import { world } from "@minecraft/server";
import GamemodeChanger from "./GamemodeChanger.js";

import type { CommandResult, Player } from "@minecraft/server";
import type { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

const form: ActionFormData = GamemodeChanger();

world.afterEvents.itemUse.subscribe(async result => {
  if (result.itemStack.typeId !== "minecraft:compass") return;
  const player: Player = result.source;

  const response: ActionFormResponse = await form.show(player);
  let commandResult: CommandResult | null;

  switch (response.selection) {
    case 0: commandResult = await player.runCommandAsync("gamemode default @s"); break;
    case 1: commandResult = await player.runCommandAsync("gamemode survival @s"); break;
    case 2: commandResult = await player.runCommandAsync("gamemode creative @s"); break;
    case 3: commandResult = await player.runCommandAsync("gamemode adventure @s"); break;
    default: commandResult = null; player.sendMessage("Didn't pick an option."); break;
  }

  if (commandResult === null) return;

  player.sendMessage(`Gamemode change success: ${commandResult.successCount}`);
});