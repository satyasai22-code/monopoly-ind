## Frontend Components

### Game Lobby UI
- **Function**: Displays available game lobbies, allows creating and joining lobbies.
- **Interaction**: Uses REST API to communicate with Game Lobby Service.

### Game Setup UI
- **Function**: Provides UI for selecting game settings.
- **Interaction**: Uses REST API to send game configuration to Game Logic Service.

### Game Board UI
- **Function**: Displays the game board, player tokens, and dice rolls.
- **Interaction**: Uses WebSocket to receive real-time updates from Game Logic Service.

### Property Management UI
- **Function**: Interfaces for purchasing properties and paying rent.
- **Interaction**: Uses WebSocket to interact with Property Management Service.

### Trading Interface
- **Function**: UI for proposing, negotiating, and accepting trades.
- **Interaction**: Uses WebSocket to communicate with Trading Service.

### Financial Dashboard
- **Function**: Displays player finances and manages assets.
- **Interaction**: Uses WebSocket to receive financial updates from Financial Management Service.

### Jail Mechanic UI
- **Function**: Indicates jailed players and manages jail-related actions.
- **Interaction**: Uses WebSocket to interact with Jail Mechanic Service.

### In-Game Chat Interface
- **Function**: Interface for player communication.
- **Interaction**: Uses WebSocket to send and receive messages from Chat Service.

## Backend Services

### Game Lobby Service
- **Function**: Manages the state of game lobbies and handles lobby-related actions.

### Game Logic Service
- **Function**: Implements core game logic, including dice rolls and player movement.

### Property Management Service
- **Function**: Manages property ownership, rent calculations, and transactions.

### Trading Service
- **Function**: Handles trade proposals, negotiations, and execution.

### Financial Management Service
- **Function**: Manages player finances, including cash transactions, property mortgaging, and selling buildings.

### Jail Mechanic Service
- **Function**: Implements jail mechanics, turn skipping, and early release options.

### Chat Service
- **Function**: Provides real-time chat functionality using WebSocket.

## Communication

### WebSocket
- **Used for**: Real-time game updates and in-game chat.

#### Interactions
- Game Board UI <--> Game Logic Service
- Property Management UI <--> Property Management Service
- Trading Interface <--> Trading Service
- Financial Dashboard <--> Financial Management Service
- Jail Mechanic UI <--> Jail Mechanic Service
- In-Game Chat Interface <--> Chat Service

### REST API
- **Used for**: Game setup, lobby management, and non-real-time trading actions.

#### Interactions
- Game Lobby UI <--> Game Lobby Service
- Game Setup UI <--> Game Logic Service
