import { Scene } from 'phaser';

export class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  preload() {}
  create() {
    this.add.text(200, 200, 'Hello World', {
      fontSize: '48px',
      color: 'limegreen',
      fontFamily: 'monospace',
    });

    // this.events.emit("hello", "Hello from BootScene")
    this.game.events.emit('hello', 'Hello from BootScene');

    const circle = this.add.circle(400, 400, 100, 0xff0000);
    circle.setInteractive();
    circle.on('pointerdown', () => {
      this.saveScore();
    });
  }
  update() {}

  sayHi() {
    console.log('Hello');
  }

  saveScore() {
    this.game.events.emit('saveScore', 100);
  }
}
