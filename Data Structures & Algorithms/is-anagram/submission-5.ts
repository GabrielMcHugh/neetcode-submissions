class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        /**
         * First Attempt:
         * Create a dictionary with letters and increment letter count if it exist
         * for first word. Then do the same for the second word then compare values.
         *
         */
        const countLetters = (dict: Record<string, number>, word: string) => {
            for (const char of word) {
                if (char in dict) {
                    let curr = dict[char];
                    dict[char] = curr + 1;
                } else {
                    dict[char] = 0;
                }
            }
        };

        const word1: Record<string, number> = {};
        countLetters(word1, s)

        const word2: Record<string, number> = {};
        countLetters(word2, t)

        const letters1 = Object.keys(word1)
        const letters2 = Object.keys(word2)

        //edge case: more letters in b than a
        if (letters1.length !== letters2.length) return false;

        for (const letter of letters1) {
            if (!(letter in word2)) return false;
            if (word1[letter] !== word2[letter]) return false;
        }
        return true
    }
}

/**The beautiful solution: 
 * Both keys increment the same (++ for the first and -- for the second). Thus if they are equal, each key value should be 0
*/
// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s: string, t: string): boolean {
//         const map: Record<string, number> = {};

//         if (s.length !== t.length) return false;

//         for (let i = 0; i < s.length; i++) {
//             const sKey = s[i]!;
//             const tKey = t[i]!;

//             if (!map[sKey]) map[sKey] = 0;
//             if (!map[tKey]) map[tKey] = 0;

//             map[sKey]++;
//             map[tKey]--;
//         }

//         const values = Object.values(map);

//         return values.every((v) => v === 0);
//     }
// }



