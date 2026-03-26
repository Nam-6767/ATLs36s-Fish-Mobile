// src/types/index.ts

export interface GameState {
    isGameOver: boolean;
    currentPlayer: Player;
    turn: number;
    fishCaught: Fish[];
}

export interface Fish {
    id: number;
    name: string;
    weight: number;
    value: number;
}

export interface Rod {
    id: number;
    name: string;
    strength: number;
    length: number;
}

export interface Island {
    id: number;
    name: string;
    location: string;
    availableFish: Fish[];
}

export interface Player {
    id: number;
    name: string;
    score: number;
    currentRod: Rod;
    currentIsland: Island;
}