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
         * To find the most frequent I need to sort the result. My first attemp was a normal sort
         * but for the second i will use a bucket sort
         * O(nlogn)
         */

        const map = new Map<number, number>() // integer, frequency
        const results: number[] = []
        for (const num of nums) {
            map.set(num, (map.has(num) ? map.get(num) : 0) + 1)
        }

        //Normal sort: O(nlogn)
        // const mapEntries = Array.from(map.entries())
        // mapEntries.sort((a,b) => b[1] - a[1])
        // for (let i = 0; i < k; i++) {
        //     results.push(mapEntries[i][0])
        // }

        //Bucket sort:
        const buckets: number[][] = Array.from({length: nums.length + 1}, () => [])
        for (const [key, value] of map.entries()) {
            buckets[value].push(key)
        }
        //backwards loop as its sorted already from smalles to largest, so getting k largest
        for (let i = buckets.length - 1 ; i >= 0 && results.length < k; i--) {
            results.push(...buckets[i])
        }

        return results;
    }
}
