// Module-scoped cached variables
let numCards = parseInt(localStorage.getItem('numCards') || '0');
let numEscCards = parseInt(localStorage.getItem('numEscCards') || '0');
let numPlayers = parseInt(localStorage.getItem('numPlayers') || '0');
let playerNames = JSON.parse(localStorage.getItem('playerNames') || '[]');

// Save values to localStorage
export function saveSetupData(cards, escCards, players) {
    localStorage.setItem('numCards', cards);
    localStorage.setItem('numEscCards', escCards);
    localStorage.setItem('numPlayers', players);

    // Update internal variables
    numCards = cards;
    numEscCards = escCards;
    numPlayers = players;
}

// Save player names
export function savePlayerNames(names) {
    localStorage.setItem('playerNames', JSON.stringify(names));
    playerNames = names;
}

// Reload from localStorage (in case the page changed or values updated elsewhere)
export function refreshData() {
    numCards = parseInt(localStorage.getItem('numCards') || '0');
    numEscCards = parseInt(localStorage.getItem('numEscCards') || '0');
    numPlayers = parseInt(localStorage.getItem('numPlayers') || '0');
    playerNames = JSON.parse(localStorage.getItem('playerNames') || '[]');
}

// Accessors
export function getNumCards() {
    return numCards;
}

export function getNumEscCards() {
    return numEscCards;
}

export function getNumPlayers() {
    return numPlayers;
}

export function getPlayerNames() {
    return playerNames;
}


// Example usage
export function logSetupSummary() {
    console.log("Deck cards:", numCards);
    console.log("Escalation cards:", numEscCards);
    console.log("Players:", numPlayers);
    console.log("Player names:", playerNames);
}


export function getSetupData() {
    return {
        numCards: parseInt(localStorage.getItem('numCards') || '0'),
        numEscCards: parseInt(localStorage.getItem('numEscCards') || '0'),
        numPlayers: parseInt(localStorage.getItem('numPlayers') || '0')
    };
}



// Optional class example
export class GameSetup {
    constructor() {
        refreshData();
    }

    summary() {
        return {
            cards: numCards,
            escCards: numEscCards,
            players: numPlayers,
            names: playerNames
        };
    }

    logSummary() {
        console.log(this.summary());
    }
}

console.log("numCards", numCards);
console.log("numEscCards", numEscCards);
console.log("numPlayers", numPlayers);
