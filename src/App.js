import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var gameData = initScenes();
  gameData.currentScene = "menu";
  return update(gameData);
}

function update(gameData) {
  return(
    <div className="App">
      {drawScene(gameData)}
    </div>
  );
}

/**
 * Draw the following appropriate scene
 */
function drawScene(gameData) {
  console.log(gameData.currentScene);
  switch(gameData.currentScene) {
    case "menu":
      return generateMenu(gameData);
    case "catalog":
      return generateCatalog(gameData);
    case "editor":
      return generateEditor(gameData);
    case "finale":
      return generateFinale(gameData);
    default:
      return;
  }
}

/**
 * Reassign the currentScene of the game data and draw the new scene
 */
function changeScene(gameData, newScene) {
  gameData.currentScene = newScene;
  return update(gameData);
}

/**
 * Present the main menu
 */
function generateMenu(gameData) {
  return(
    <div className="titleScreen">
      <h1>Styledollz 2.0</h1>
      <button onClick={() => changeScene(gameData, "catalog")}>Start!</button>
    </div>
  );
}

/**
 * Present the catalog and canvas
 */
function generateCatalog(gameData) {
  return(
    <div className="titleScreen">
      <h1>BIRTCHES</h1>
      <button onClick={() => changeScene(gameData, "editor")}>Start!</button>
    </div>
  );
}

/**
 * Present canvasItem editor
 */
function generateEditor() {}

/**
 * Present editable final stage
 */
function generateFinale() {}

/**
 * Initialize all of the scenes
 */
function initScenes() {
  var gameObj = {
    currentScene: "menu"
  };

  const allScenes = new Set(["menu", "catalog", "editor", "finale"]);
  allScenes.forEach(element => {
    gameObj[element] = {name: element};
  });

  return gameObj;
}

export default App;
