import { useState, useEffect } from 'react';
import { gameConfig } from './game';
import Phaser from 'phaser';
import './App.css';
import { BootScene } from './game/scenes/Boot';

type SceneObject = {
  [key: string]: Phaser.Scene;
};

function App() {
  const [phaserGame, setPhaserGame] = useState<Phaser.Game>();
  const [gameScenes, setGameScenes] = useState<SceneObject | null>(null);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const game = new Phaser.Game(gameConfig);
    setPhaserGame(game);
    setGameScenes(game.scene.keys);

    game.events.on('hello', eventHandler);
    game.events.on('saveScore', setScore);

    return () => {
      game.destroy(true);
    };
  }, []);

  function eventHandler(e: any) {
    console.log(e);
  }

  useEffect(() => {
    if (!gameScenes) return;

    const bootScene = gameScenes['BootScene'] as BootScene;
    // bootScene.sayHi();
  }, [gameScenes]);

  return (
    <>
      <div id='game-container' />
      <h2>Score: {score}</h2>
    </>
  );
}

export default App;
