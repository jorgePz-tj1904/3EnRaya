export const bot = (grilla, turno) => {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // Primero, verifica si el bot tiene una combinación ganadora disponible
    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (grilla[a] === turno && grilla[b] === turno && grilla[c] === null) {
            return c;
        }
        if (grilla[a] === turno && grilla[b] === null && grilla[c] === turno) {
            return b;
        }
        if (grilla[a] === null && grilla[b] === turno && grilla[c] === turno) {
            return a;
        }
    }

    // Si no hay combinaciones ganadoras disponibles, selecciona un movimiento aleatorio
    const casillasDisponibles = grilla.reduce((acc, val, index) => {
        if (val === null) acc.push(index);
        return acc;
    }, []);

    const indiceElegido = casillasDisponibles[Math.floor(Math.random() * casillasDisponibles.length)];
    return indiceElegido;
}
