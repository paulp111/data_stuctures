var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    Graph.prototype.addVertex = function (vertex) {
        this.adjacencyList.set(vertex, []);
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    };
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter(function (a) { return a !== vertex2; }));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter(function (a) { return a !== vertex1; }));
        }
    };
    Graph.prototype.removeVertex = function (vertex) {
        var _a, _b;
        while ((_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.length) {
            this.removeEdge(vertex, (_b = this.adjacencyList.get(vertex)) === null || _b === void 0 ? void 0 : _b.pop());
        }
        this.adjacencyList.delete(vertex);
    };
    //Iterativ depthfirst search
    Graph.prototype.depthFirst = function (startVertex) {
        var _a;
        var stack = [startVertex];
        var result = [];
        var visited = {};
        var currentVertex = null;
        visited[startVertex] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach(function (neighbor) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    };
    //Depth First Search Recursive
    Graph.prototype.depthFirstRec = function (startVertex) {
        var _this = this;
        var result = [];
        var visited = {};
        var dfs = function (vertex) {
            var _a;
            if (!vertex)
                return null;
            visited[vertex] = true;
            result.push(vertex);
            (_a = _this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.forEach(function (neighbor) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };
        dfs(startVertex);
        return result;
    };
    Graph.prototype.breadthFirst = function (startVertex) {
        var _a;
        var queue = [startVertex];
        var result = [];
        var visited = {};
        visited[startVertex] = true;
        while (queue.length) {
            var currentVertex = queue.shift();
            result.push(currentVertex);
            (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach(function (neighbor) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    };
    Graph.prototype.breadthFirstRecursive = function (startVertex) {
        var _this = this;
        var queue = [startVertex];
        var visited = [];
        var currentVertex = null;
        var bfs = function () {
            var _a, _b, _c;
            currentVertex = queue.shift();
            visited.push(currentVertex);
            (_c = (_b = (_a = _this.adjacencyList
                .get(currentVertex)) === null || _a === void 0 ? void 0 : _a.slice()) === null || _b === void 0 ? void 0 : _b.reverse()) === null || _c === void 0 ? void 0 : _c.forEach(function (node) {
                if (!visited.includes(node) && !queue.includes(node)) {
                    queue.push(node);
                }
            });
            if (queue.length)
                bfs();
        };
        bfs();
        return visited;
    };
    return Graph;
}());
/*
const graph = new Graph<string>();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("A", "B");
graph.addVertex("A", "C");
graph.addVertex("B", "D");
graph.addVertex("C", "E");
graph.addVertex("E", "D");
graph.addVertex("E", "F");
graph.addVertex("F", "D");





console.log(graph.adjacencyList);*/ 
