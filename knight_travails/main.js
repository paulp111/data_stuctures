var Knight = /** @class */ (function () {
    function Knight() {
        this.queue = [];
        this.visited = new Set();
        this.path = [];
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
    Knight.prototype.isValid = function (pos) {
        return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
    };
    //BFS
    Knight.prototype.moves = function (start, end) {
        var _this = this;
        this.visited.add(start);
        this.queue.push({ possibleMove: start, currentPath: start });
        var currentData;
        var next;
        while (this.queue.length) {
            currentData = this.queue.shift();
            if (currentData.possibleMove[0] === end[0] &&
                currentData.possibleMove[1] === end[1]) {
                this.path = currentData.currentPath;
                break;
            }
            this.possibleMoves.forEach(function (move) {
                next = [
                    currentData.possibleMove[0] + move[0],
                    currentData.possibleMove[1] + move[1],
                ];
                if (_this.isValid(next) && !_this.visited.has(next)) {
                    _this.visited.add(next);
                    _this.queue.push({
                        possibleMove: next,
                        currentPath: currentData.currentPath.concat(next),
                    });
                }
            });
        }
    };
    return Knight;
}());
var knight = new Knight();
knight.moves([3, 3], [0, 0]);
