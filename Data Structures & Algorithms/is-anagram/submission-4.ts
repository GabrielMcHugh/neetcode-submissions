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
