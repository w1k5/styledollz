import React, { useState } from 'react';
import './App.css';

function App() {
  const [current, setScene] = useState("menu");
  
  const allNames = new Set(["menu", "catalog", "editor", "finale"]);
  var gameData = [];
  allNames.forEach(element => {
    gameData.push(<Scene type={element} currentScene={current} setScene={setScene} key={element} />);
  });

  return(
    <div className="App">
      {gameData.filter(scene => scene.props.type === scene.props.currentScene)}
    </div>
  );
}

class Scene extends React.Component {
  render() {
    switch(this.props.type) {
      case "menu":
        return this.generateMenu();
      case "catalog":
        return this.generateCatalog();
      case "editor":
        return this.generateEditor();
      case "finale":
        return this.generateFinale();
      default:
        return;
    }
  }

  generateMenu() {
    return(
    <div className="titleScreen">
      <h1>Styledollz 2.0</h1>
      <button type="button" onClick={() => this.props.setScene("catalog")}>Start!</button>
    </div>
    );
  }

  generateCatalog() {
  return(
    <div className="catalogScreen">
      <Catalog />
    </div>
  );
  }
 
  generateEditor() {
    return;
  }

  generateFinale() {
    return;
  }
}

class Catalog extends React.Component {

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item)));
    console.log(images);
    return images;
  }

  generateTopInfo() {
     const images = this.importAll(require.context('./assets/blonde_heads', false, /\.(gif)$/));
     return images;
  }

  render() {
    this.generateTopInfo('./assets/blonde_heads', 'gif');
    return (
      <>
      {this.tabs(this.majorTabs)}
      <div className="catalogBody">
          <Canvas />
          <div className="catalog">
            {this.tabs(this.minorTabs)}
            {this.displayItems()}
          </div>
        </div></>
    );
  }

  tabs(listOfTabs) {
    return (
      <ul className="catalogTabs">
        <li className="catalogTabs-item">item1</li>
        <li className="catalogTabs-item">item2</li>
        <li className="catalogTabs-item">item3</li>
        <li className="catalogTabs-item">item1</li>
        <li className="catalogTabs-item">item2</li>
        <li className="catalogTabs-item">item3</li>
      </ul>
    );
  }

  displayItems(items) {
    return (
      <div className="catalogDisplay">
        <div className="catalogItem">ITEM</div>
        <div className="catalogItem">ITEM</div>
        <div className="catalogItem">ITEM</div>
      </div>
    );
  }
}

class Canvas extends React.Component {
  render() {
    return (
      <div className="canvas">
        <center>Styledollz 2.0 Canvas</center>
      </div>
    );
  }
}

class CatalogItem extends React.Component {
  render() {
    return;
  }
}

class CanvasItem extends React.Component {
  reader() {
    return;
  }
}

export default App;
