function calculateDamage(baseDamage, critChance, critMultiplier) {
    const isCriticalHit = Math.random() < critChance;
    return isCriticalHit ? baseDamage * critMultiplier : baseDamage;
}

function calculateCritChance(baseChance, tension) {
    return Math.min(1, baseChance + (tension * 0.1));
}

function calculateTension(currentTension, changeAmount) {
    return Math.max(0, currentTension + changeAmount);
}

function calculateFishRewards(baseReward, tension) {
    return baseReward * (1 + (tension * 0.05));
}

// Add more game mechanics functions as needed...