class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        /**
         * Basic implementations: Brute force Hashmap
         * 2. Iterate over array of strings
         * 3. Check if an array of maps exists for that number of letters,
         * if not make a new one
         * 4. Create a map for the anagram
         * 5. Iterate over groups of existing, comparing. If theres is a match, add that on
         * to the group of anagrams.
         * 6. If not, make a new sub array to the array of anagrams
         */
        const createMap = (anagram): Map<string, number> => {
            let charMap = new Map<string, number>();
            for (let char of anagram) {
                //Can simplify
                if (charMap.has(char)) {
                    charMap.set(char, charMap.get(char) + 1);
                } else {
                    charMap.set(char, 1);
                }
            }
            return charMap
        };
        
        const anagramMaps: Map<string, number>[] = []
        const results: string[][] = []

        //iterate over strings
        stringLoop: for (const str of strs) {
            //create charMap
            let charMap = createMap(str)
            //iterate over anagramMaps (which are empty at the start, so will need to add
            //if iteration fails)
            
            anagramLoop: for (const [index, anagramMap] of anagramMaps.entries()) {
                //exit early if number of letters dont match
                if (str.length !== results[index][0].length) continue anagramLoop;

                //iterate over charMap keys and compare against anagram keys
                for (const key of charMap.keys()) {
                    //if Map doesn't contain char, or same char value, move to next anagram
                    if (!(anagramMap.has(key)) || anagramMap.get(key) !== charMap.get(key)) { 
                        continue anagramLoop;
                    }
                }
                //if pass anagram loop (matching exactly), then add to anagram array in
                //result and move to next str of Strs
                results[index].push(str);
                continue stringLoop;
            }
            //if pass anagrammap loop, add a new entry to results and anagrammaps
            anagramMaps.push(charMap)
            results.push([str])
        }

        return results
    }
}










