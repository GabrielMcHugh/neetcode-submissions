class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        /**Basic attempt:
         * Look up. This apparently is a serialisationa nd delimitation problem; it asks me
         * to combine multiple pieces of data into a single flat string/stream (serialise it)
         * and reconstruct it later. And the BIG red flag, it says the data can contain ANY
         * character.
         *
         * So for the solution, we need a lengthbased delimiter. We must check the length
         * and use that as a mark for the delimiter of that string, so that when we try to
         * reconstruct it later, we know what each words length should be
         *
         * O(n)
         */
        let result: string[] = [];
        for (const str of strs) {
            result.push(`${str.length}#${str}`);
        }

        let returnresult = result.join("");
        return returnresult;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
       /**Second attempt:
        * I can just use a while loop. Apparently that is standard for a two pointer
        */
        let result: string[] = []
        let i = 0;

        //loop by block! interesting
        while (i < str.length) {
            //1. Find where the delimiter is
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            //2. Parse the length of the upcoming string
            let lenNum = parseInt(str.substring(i, j)) //not in inclusive of # so not +1
            
            //3. Extract the string using substring (i didnt use this last time,
            //i tried to construct the string because i thought it would save time
            //but apparently all implementations of this will be O(k) so...)
            let decodedStr = str.substring(j + 1, j + 1 + lenNum) //should be inclusive of last so + 1
            //to move past the last char
            result.push(decodedStr)

            //4. Move i to the next block
            i = j + 1 + lenNum //since start is inclusive, dont need to move further
        }

        return result
    }
}
