//Priority Queue
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.values = [];
    }
    PriorityQueue.prototype.enqueue = function (val, priority) {
        this.values.push({ val: val, priority: priority });
        this.sort();
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.values.shift();
    };
    PriorityQueue.prototype.sort = function () {
        this.values.sort(function (a, b) { return a.priority - b.priority; });
    };
    return PriorityQueue;
}());
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph() {
        this.adjacencyList = new Map();
    }
    WeightedGraph.prototype.addVertex = function (vertex) {
        this.adjacencyList.set(vertex, []);
    };
    WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push({ node: vertex2, edge: weight });
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push({ node: vertex1, edge: weight });
        }
    };
    WeightedGraph.prototype.dijkstraSearch = function (start, end) {
        var _a, _b;
        var nodes = new PriorityQueue();
        var distances = {};
        var previous = {};
        var smallest;
        var nextNode;
        var sumOfDist = 0;
        var path = [];
        this.adjacencyList.forEach(function (_, key) {
            if (key === start) {
                distances[key] = 0;
                nodes.enqueue(key, 0);
            }
            else {
                distances[key] = Infinity;
                nodes.enqueue(key, Infinity);
            }
            previous[key] = null;
        });
        //loop through graph
        while (nodes.values.length) {
            var smallest_1 = (_a = nodes.dequeue()) === null || _a === void 0 ? void 0 : _a.val;
            //if end 
            if (smallest_1 === end) {
                while (previous[smallest_1]) {
                    path.push(smallest_1);
                    smallest_1 = previous[smallest_1];
                }
                break;
            }
            if (smallest_1 || distances[smallest_1] !== Infinity) {
                for (var neighbor in this.adjacencyList.get(smallest_1)) {
                    nextNode = (_b = this.adjacencyList.get(smallest_1)) === null || _b === void 0 ? void 0 : _b.at(neighbor);
                    //calculate distances
                    sumOfDist = distances[smallest_1] + nextNode.edge;
                    //update Liste
                    if (sumOfDist < distances[nextNode === null || nextNode === void 0 ? void 0 : nextNode.node]) {
                        distances[nextNode === null || nextNode === void 0 ? void 0 : nextNode.node] = sumOfDist;
                        previous[nextNode === null || nextNode === void 0 ? void 0 : nextNode.node] = smallest_1;
                        nodes.enqueue(nextNode.node, sumOfDist);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
        /*console.log(
            "distances: ",
            distances,
            "Priority Queue: ",
            nodes,
            "Previous: ",
            previous
        );*/
    };
    return WeightedGraph;
}());
var dijkstraGraph = new WeightedGraph();
//Create Vertices
dijkstraGraph.addVertex("A");
dijkstraGraph.addVertex("B");
dijkstraGraph.addVertex("C");
dijkstraGraph.addVertex("D");
dijkstraGraph.addVertex("E");
dijkstraGraph.addVertex("F");
//Create Edges
dijkstraGraph.addEdge("A", "B", 5);
dijkstraGraph.addEdge("A", "D", 5);
dijkstraGraph.addEdge("B", "E", 5);
dijkstraGraph.addEdge("C", "D", 5);
dijkstraGraph.addEdge("C", "F", 5);
dijkstraGraph.addEdge("D", "F", 5);
dijkstraGraph.addEdge("D", "E", 5);
dijkstraGraph.addEdge("E", "F", 5);
console.log(dijkstraGraph.adjacencyList);
console.log(dijkstraGraph.dijkstraSearch("A", "E"));
