# Tic-Tac-Toe

This is a simple Tic-Tac-Toe game built with React. The project demonstrates the use of React hooks, specifically the `useState` hook, to manage the game state. 

## Features

- Play a classic game of Tic-Tac-Toe
- Keeps track of the game state and player turns
- Allows for resetting the game
- Stores the game state in localStorage, so you can continue where you left off even after refreshing the page

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gioakol/Tic-Tac-Toe.git

2. Navigate to the project directory:
   ```bash
   cd Tic-Tac-Toe
  
3. Install the dependencies:
   ```bash
   npm install

4. Install canvas-confetti: 
   ```bash
   npm install canvas-confetti -E

   
5. Running the Application, to start the development server, run:
   ```bash
   npm start

## Usage
- Click on any square to make a move.
- The game will indicate the current player's turn.
- Once a player wins or the game ends in a draw, a message will appear.
- Click the "Restart" button to reset the game.


## Code Overview

### App.js
This file contains the main component of the application, managing the game state using the useState hook.

### Square.jsx
A functional component representing each square on the board. It also uses the useState hook to handle its internal state.

### WinnerModal.jsx
A functional component that displays the winner of the game.

### constants.js
This file contains constants used throughout the application, such as player symbols.

### board.js
Contains utility functions for checking the game winner.

## Exercise Objective
The primary objective of this project is to practice and validate the use of the useState hook in React. By building this Tic-Tac-Toe game, you will gain a better understanding of how to manage state in a React functional component.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

##Acknowledgments
Inspired by the classic Tic-Tac-Toe game.
Thanks to the React team for creating such an amazing library.
