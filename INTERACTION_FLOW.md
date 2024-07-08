# Monopoly Game Interaction Flow

## Game Lobby

- The frontend calls the backend REST API to fetch and display game lobbies.
- Users can create or join lobbies via frontend actions, which are processed by the backend Game Lobby Service.

## Game Setup

- The frontend sends game configuration data to the backend Game Logic Service via REST API.
- The backend stores the game configuration in memory for the game session.

## Core Gameplay

- The backend Game Logic Service computes game logic (dice rolls, player movement) and sends real-time updates to the frontend Game Board UI via WebSocket.

## Property Purchase and Rent Payment

- The backend Property Management Service manages property ownership, rent calculations, and transactions.
- Real-time updates are sent to the frontend Property Management UI via WebSocket.

## Trading

- Trade proposals are sent from the frontend Trading Interface to the backend Trading Service via WebSocket.
- The backend processes trades and sends updates back to the frontend.

## Financial Management

- The backend Financial Management Service handles financial transactions and updates player finances.
- Real-time financial updates are sent to the frontend Financial Dashboard via WebSocket.

## Jail Mechanic

- The backend Jail Mechanic Service manages jail-related actions (turn skipping, early release).
- The frontend Jail Mechanic UI receives updates and action options via WebSocket.

## In-Game Chat

- Messages sent via the frontend In-Game Chat Interface are broadcasted to all players through the backend Chat Service via WebSocket.
