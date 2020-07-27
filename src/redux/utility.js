export const updateShallowObject = (oldState,updates) => {
    return {
        ...oldState,
        ...updates
    }
}

export const getRandomNumber = () => {
    const min = 1;
    const max = 100;
    return (min + Math.random() * (max - min)).toFixed(0);
}