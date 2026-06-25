class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        /**
         * Basic Hashmap:
         * Add numbers to a map and at the end iterate over the map to find the k most frequent
         * To find the most frequent I need to sort the result
         * O(2n) = O(n)
         */

        const map = new Map<number, number>() // integer, frequency
        const results: number[] = []
        for (const num of nums) {
            map.set(num, (map.has(num) ? map.get(num) : 0) + 1)
        }
        const mapEntries = Array.from(map.entries())
        mapEntries.sort((a,b) => b[1] - a[1])
        for (let i = 0; i < k; i++) {
            results.push(mapEntries[i][0])
        }

        return results;
    }
}
