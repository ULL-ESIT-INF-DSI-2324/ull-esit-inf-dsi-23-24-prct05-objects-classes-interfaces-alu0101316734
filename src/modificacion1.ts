export function checkatack(tablero: string[][]): boolean | undefined {
  const direccionx: number[] = [-1, -1, 1, 1];
  const direcciony: number[] = [-1, 1, -1, 1];
  let is_undefined: boolean = false;
  let atack: boolean = false;
  let black_queen_one: number = 0;
  let white_queen_one: number = 0;

  if (tablero.length != 8) return undefined;

  tablero.forEach((fila) => {
    if (fila.length != 8) is_undefined = true;
  });

  tablero.forEach((fila) => {
    fila.forEach((celda) => {
      switch (celda) {
        case "_":
          break;
        case "N":
          black_queen_one++;
          break;
        case "B":
          white_queen_one++;
          break;
        default:
          is_undefined = true;
      }
    });
  });

  if (black_queen_one != 1 || white_queen_one != 1 || is_undefined)
    return undefined;

  tablero.forEach((fila, index) => {
    fila.forEach((celda, index_fila) => {
      if (celda === "B" || celda === "N") {
        for (let i = 0; i < 8; i++)
          if (
            (tablero[index][i] === "N" || tablero[index][i] === "B") &&
            i != index_fila
          )
            atack = true;
        for (let i = 0; i < 8; i++)
          if (
            (tablero[i][index_fila] === "N" ||
              tablero[i][index_fila] === "B") &&
            i != index
          )
            atack = true;

        const fila: number = index;
        const columna: number = index_fila;
        direccionx.forEach((x, index1) => {
          let fila_temp: number = fila;
          let columna_temp: number = columna;
          while (
            fila_temp + x >= 0 &&
            fila_temp + x < 8 &&
            columna_temp + direcciony[index1] >= 0 &&
            columna_temp + direcciony[index1] < 8
          ) {
            fila_temp += x;
            columna_temp += direcciony[index1];
            if (
              tablero[fila_temp][columna_temp] === "N" ||
              tablero[fila_temp][columna_temp] === "B"
            ) {
              atack = true;
            }
          }
        });
      }
    });
  });
  return atack;
}
