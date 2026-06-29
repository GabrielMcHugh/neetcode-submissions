class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        /**
         * Pattern: Lookup Table (hash based lookup)
         *
         * Set solution
         *
         * O(1) if sudoku, but O(n^2) in general
         *
         */

        const createSets: () => Set<string>[] = () => Array.from({ length: 9, }, () => new Set<string>())

        //0. Create maps for each column
        //const rowMaps: Map<string, boolean>[] = new Array(board.length).fill(map); //O(n)
        const columnMaps: Set<string>[] = createSets(); //O(n)
        const squareMaps: Set<string>[] = createSets(); //O(n)

        for (const [rowIndex, row] of board.entries()) {
            const singleRowMap = new Set<string>(); //number, if it already exists
            for (let i = 0; i < row.length; i++) {
                if (row[i] === ".") continue;
                //Step 1: check rows
                    if (singleRowMap.has(row[i])) return false;
                    singleRowMap.add(row[i])
                //Step 2: check columns
                    if (columnMaps[i].has(row[i])) return false;
                    columnMaps[i].add(row[i])
                //Step 3: check squares
                    let square = Math.floor(rowIndex/3)*3+Math.floor(i/3)
                    if (squareMaps[square].has(row[i])) return false;
                    squareMaps[square].add(row[i])
            }
        }

        return true;
    }
}
