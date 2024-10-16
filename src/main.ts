import { type Player, world } from "@minecraft/server";

const players: Player[] = world.getAllPlayers();

for (const player of players) {
  world.sendMessage(player.dimension.id);
}