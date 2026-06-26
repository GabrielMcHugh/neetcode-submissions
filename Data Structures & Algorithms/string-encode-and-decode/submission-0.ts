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
        console.log(returnresult);
        return returnresult;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        /**
         * Two Pointer technique: is what we need to use apparently. So we set the first pointer
         * as the start of the input then have to iterate over the string and when we find the hash
         * we know everything between those two pointers is the length. We move ahead that length
         * marking it all as the string, then everything from that point to the next hash is the
         * the length. The logic is fullproof and should be O(n) as we traverse once
         */
        let i = 0;
        let len: string[] = [];
        let decodingStr: string[] = [];
        let result: string[] = [];

        for (let j = 0; j <= str.length; j++) {
            if (j === i) {
                if (i !== 0) {
                    let decodedStr = decodingStr.join("");
                    decodingStr = []
                    result.push(decodedStr);
                }
                len.push(str[j]);
            } else if (j < i) {
                decodingStr.push(str[j]);
            } else {
                //finding length
                if (str[j] === "#") {
                    //from j (j + lenNum) is where the end of the word is, so we continue along building
                    //the string until we reach that length. We also move to the start of the new word.
                    //i is just a marker for when j should add letters to len instead of decodedStr
                    //So need a condition for that (if j < i).

                    //get the length
                    let lenNum: number = parseInt(len.join(""));
                    len = []
                    console.log("lenNum", lenNum);
                    //move i to start of next delimiter
                    i = j + lenNum + 1;
                } else {
                    len.push(str[j]);
                }
            }
        }

        return result;
    }
}
