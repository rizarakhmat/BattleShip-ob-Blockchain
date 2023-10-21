# BattleShip game based on Blockchain
BattleShip game implemented with MerkleTree structure to prevent falsifications with results of ship coordinations.

## Aim of the project 
The aim of the project is to develop the Battleship game on Ethereum blockchain. The blockchain is exploited: 
• to guarantee that the initial choice of the ship locations made in the placement phase is not modified 
by a cheater after the placement phase; 
• to guarantee that the initial placement of the ships is valid; 
• to guarantee, at each turn, that a player does not cheat about the exact outcome of the previous 
torpedo shot made by their adversary (i.e. hit or miss); 
• to implement a rewarding system for winning players, through some tokens or cryptocurrency stored 
in the smart contract balance; 
• to define a penalty mechanism for cheating players and for players taking no action at a particular 
turn, so freezing the deposit of money in the smart contract. 

## Structure
 • contracts: which contains the file BattleShipGame.sol with the solidity
 code;
 • src: which contains the front-end structure with index.html, js folder with
 the app.js and others javascript code and the css folder with style.css

## User manual
 To try out the project is needed Ganache, Truffle and Metamask as saw at laboratory lessons. So first of all is necessary to execute Ganache and start an appropriate workspace. 
 The second thing to do is compile the contract, to  do this in the P2P Project/migrations folder is necessary to run the command  ”truffle migrate”. 
 After this in the P2P Project folder to execute the code is possible to run
 ”npm run dev” and a browser page is opened automatically. Assuming to have
 already a network created on Metamask the only things to do is log in and choose
 an account. To use another account on the same network is necessary to open
 ”http://localhost :3001/” and disable all the synchronization settings. After this
 it is possible to open another browser page and go to ”http://localhost:3000/”
 being careful to change the account on Metamask.

