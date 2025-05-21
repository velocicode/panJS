export function saveSetupData(numCards, numEscCards, numPlayers) {
    localStorage.setItem('numCards', numCards);
    localStorage.setItem('numEscCards', numEscCards);
    localStorage.setItem('numPlayers', numPlayers);
}

export function getSetupData() {
    return {
        numCards: parseInt(localStorage.getItem('numCards') || '0'),
        numEscCards: parseInt(localStorage.getItem('numEscCards') || '0'),
        numPlayers: parseInt(localStorage.getItem('numPlayers') || '0')
    };
}

export function savePlayerNames(namesArray) {
    localStorage.setItem('playerNames', JSON.stringify(namesArray));
}

export function getPlayerNames() {
    return JSON.parse(localStorage.getItem('playerNames') || '[]');
}