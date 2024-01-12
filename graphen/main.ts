type AdjacencyList<T> = Map<T, T[]>;

class Graph<T> {
    adjacencyList: AdjacencyList<T> = new Map();

    addVertex(vertex: T) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: T, vertex2: T) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1)!.push(vertex2);
            this.adjacencyList.get(vertex2)!.push(vertex1);
        }
    }

    removeEdge(vertex1: T, vertex2: T) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(
                vertex1,
                this.adjacencyList.get(vertex1)!.filter((a: T) => a !== vertex2)
            );
            this.adjacencyList.set(
                vertex2,
                this.adjacencyList.get(vertex2)!.filter((a: T) => a !== vertex1)
            );
        }
    }
    removeVertex(vertex: T) {
        while (this.adjacencyList.get(vertex)?.length) {
            this.removeEdge(vertex, this.adjacencyList.get(vertex)?.pop() as T);
        }
        this.adjacencyList.delete(vertex);
    }

    //Iterativ depthfirst search
    depthFirst(startVertex: T) {
        const stack = [startVertex];
        const result: T[] = [];
        const visited: { [key: string]: boolean } = {};
        let currentVertex: T | null = null;
        visited[startVertex as string] = true;
        while (stack.length) {
            currentVertex = stack.pop() as T;
            result.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.forEach((neighbor) => {
                if (!visited[neighbor as string]) {
                    visited[neighbor as string] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    //Depth First Search Recursive
    depthFirstRec(startVertex: T): T[] {
        const result: T[] = [];
        const visited: { [key: string]: boolean } = {};
        const dfs = (vertex: T) => {
            if (!vertex) return null;
            visited[vertex as string] = true;
            result.push(vertex);
            this.adjacencyList.get(vertex)?.forEach((neighbor) => {
                if (!visited[neighbor as string]) {
                    dfs(neighbor);
                }
            });
        };
        dfs(startVertex);
        return result;
    }
    breadthFirst(startVertex: T) {
        const queue = [startVertex];
        const result: T[] = [];
        const visited: { [key: string]: boolean } = {};
        visited[startVertex as string] = true;

        while (queue.length) {
            const currentVertex = queue.shift() as T;
            result.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.forEach((neighbor) => {
                if (!visited[neighbor as string]) {
                    visited[neighbor as string] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    breadthFirstRecursive(startVertex: T) {
        const queue = [startVertex];
        const visited: T[] = [];
        let currentVertex: T | null = null;
        const bfs = () => {
            currentVertex = queue.shift() as T;
            visited.push(currentVertex);
            this.adjacencyList
                .get(currentVertex)
                ?.slice()
                ?.reverse()
                ?.forEach((node) => {
                    if (!visited.includes(node) && !queue.includes(node)) {
                        queue.push(node);
                    }
                });
            if (queue.length) bfs();
        };
        bfs();
        return visited;
    }
}
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