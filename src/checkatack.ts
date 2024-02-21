
/**
 * 
 * @param tablero tablero en donde hay 2 damas
 * @returns devuelve si se atacan
 */
export function checkatack(tablero:string[][]):boolean |undefined
{
    let direccionx:number[]=[-1,-1,1,1]
    let direcciony:number[]=[-1,1,-1,1]
    let is_undefined:boolean = false; 
    let atack:boolean=false;
    let black_quuen_one:number=0
    let white_queen_one:number=0;
    if(tablero.length != 8)
     return undefined;
    tablero.forEach(fila => {
        if(fila.length != 8)
          is_undefined=true;
    });
    tablero.forEach(fila => {
        fila.forEach(celda =>{
            switch(celda)
            {
              case '_':
                break;
              case  'N':
               black_quuen_one++;
               break;
              case  'B':
                white_queen_one++;
                break;
              default:
                is_undefined=true;
            }
        })
    })
    if(black_quuen_one != 1 || white_queen_one != 1 || is_undefined)
      return undefined
    tablero.forEach((fila,index) => {
        fila.forEach((celda,index_fila) => {
            if(celda === 'B' || celda === 'N')
            {
              for(let i=0; i < 8 ; i++)
                 if((tablero[index][i]=== 'N' || tablero[index][i] === 'B') && (celda != tablero[index][i]))
                   atack=true;
              for(let i=0; i< 8 ;i++)
                if((tablero[i][index_fila]=== 'N' || tablero[i][index_fila] === 'B') && (celda != tablero[i][index_fila]))
                    atack=true; 
              let fila:number = index;
              let columna:number = index_fila;
              direccionx.forEach((x,index1) =>{
                while( x + fila >= 0  && direcciony[index1]+columna  >= 0 &&  x+fila < 8 && columna+ direcciony[index1] < 8)
                {
                    fila+=x;
                    columna+=direcciony[index1];
                    if(tablero[columna][fila] === 'N' || tablero[columna][fila] === 'B')
                    {
                      atack=true
                    }
                }
                columna=index_fila;
                fila= index;
            })
            }
        })
    })
   return atack;
}