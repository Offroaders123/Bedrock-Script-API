import { system, world } from "@minecraft/server";

system.runInterval(() => {
  world.sendMessage("hello world!");
}, 40);