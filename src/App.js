import "./App.css";

import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Test from './components/Test/Test'; 

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  toggleBlockHandler = () => {
    this.setState((prev) => ({ showBlock: !prev.showBlock }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animation</h1>
        <button className="Button" onClick={this.toggleBlockHandler}>
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "all 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} onClose={this.closeModalHandler} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModalHandler}>
          Open Modal
        </button>
        <h3>Animation List</h3>
        <List />
        <Test />
      </div>
    );
  }
}

export default App;
