class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        /**
         * Sorting Strategy:
         * As they are anagrams, if they are sorted alphabetically
         * they will return the same word.
         * 
         * 1. Iterate over word
         * 2. Sort word
         * 3. Check hash map if it exists. If not then add it
         * 4. If it does, add it to that hashmap index
         * 
         * O(N*KlogK) N for the first loop
         */

        const map = new Map<string, number>(); //sorted word, index
        const results: string[][] = []
        for (const [index, str] of strs.entries()) {
            const sortedWord = str.split('').sort().join('');
            if (map.has(sortedWord)) {
                results[map.get(sortedWord)].push(str)
            } else {
                results.push([str]);
                map.set(sortedWord, results.length-1);
            }
        }
        return results

    }
}
