class Knight {
    private possibleMoves: number[][];
    private queue: { possibleMove: number[]; currentPath: any[] }[] = [];
    private visited = new Set();
    private path: number[][] | number[] = [];
  
    constructor() {
      this.possibleMoves = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
        ];
        }
        
        isValid(pos: number[]) {
        return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
        }
        //BFS
        moves(start: number[], end: number[]) {
        this.visited.add(start);
        this.queue.push({ possibleMove: start, currentPath: start });
        let currentData: { possibleMove: number[]; currentPath: number[] };
        let next: number[];
        while (this.queue.length) {
            currentData = this.queue.shift()!;
            if (
                currentData.possibleMove[0] === end[0] &&
                currentData.possibleMove[1] === end[1]
                
            ) {
                this.path = currentData.currentPath;
                break;
            }
            this.possibleMoves.forEach((move) => {
                next = [
                    currentData.possibleMove[0] + move[0],
                    currentData.possibleMove[1] +move[1],
                ];
                if (this.isValid(next) && !this.visited.has(next)) {
                    this.visited.add(next);
                    this.queue.push ({
                        possibleMove: next,
                        currentPath: currentData.currentPath.concat(next),
                    });
                }
            });
        }
    }
}

const knight = new Knight();
knight.moves([3, 3], [0, 0]);