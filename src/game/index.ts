import Phaser from 'phaser';
import { BootScene } from './scenes/Boot';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  //   width: 600,
  //   height: 800,
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: '100%',
    height: '100%',
  },
  parent: 'game-container',
  physics: {
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [BootScene],
};
