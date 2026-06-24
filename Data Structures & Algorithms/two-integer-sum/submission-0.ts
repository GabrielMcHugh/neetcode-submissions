class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        /**
         * First attempt: Hashmap solution
         * Create a hashmap/Map for each entry as you iterate. Its value should be = target - entry.
         * If value is true, we know that is the only solution in the input. We return the object key position and the current
         * position in the input 
         */

        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const entry = nums[i]
            const complement = target - entry;
            if (map.has(complement)) {
                //we know it exists already so it will be the smaller index and should go first
                return [map.get(complement), i]
            }
            if (!map.has(entry)) {
                map.set(entry, i)
            }
        }
        return []
    }
}
