class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        /**
         * First attempt:
         * Do I need to solve the sudoku before checking? I don't. So I just need to efficiently check
         * the design presented to see if its invalid or not.
         *
         * How would I do that? I would use a hashmap/Map for the rows and columns. There should be an n*2
         * maps columns and dictionaries (V2: or maybe just one and reset it each time?)
         *
         * Since its an array of arrays, we need to check the columns at the same time as we loop over the
         * rows. We need a map for each column so the look up time is O(1) and we can keep the loop O(n)
         *
         * Notes:
         * 1. Ill do this first by creating a map for each row
         *
         *
         */

        const createMaps = () => Array.from({ length: 9, }, () => new Map<string, boolean>())

        //0. Create maps for each column
        //const rowMaps: Map<string, boolean>[] = new Array(board.length).fill(map); //O(n)
        const columnMaps: Map<string, boolean>[] = createMaps(); //O(n)
        const squareMaps: Map<string, boolean>[] = createMaps(); //O(n)

        for (const [rowIndex, row] of board.entries()) {
            const singleRowMap = new Map<string, boolean>(); //number, if it already exists
            for (let i = 0; i < row.length; i++) {
                if (row[i] === ".") continue;
                //Step 1: check rows
                    if (singleRowMap.get(row[i]) === true) return false;
                    singleRowMap.set(row[i], true)
                //Step 2: check columns
                    if (columnMaps[i].get(row[i]) === true) return false;
                    columnMaps[i].set(row[i], true)
                //Step 3: check squares
                    let square = Math.floor(rowIndex/3)*3+Math.floor(i/3)
                    if (squareMaps[square].get(row[i]) === true) return false;
                    squareMaps[square].set(row[i], true)
            }
        }

        return true;
    }
}
