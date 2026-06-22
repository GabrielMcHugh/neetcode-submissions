class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate1(nums: number[]): any {}

        /*
    Constraints:
    - none
    Edge cases:
    - empty array
    */
    hasDuplicate(nums: number[]): boolean {
        /* 
        Brute force:
        For each element, check against every other entry in the array
        n*n = O(n^2)
        */
        // for (let i = 0; i <= nums.length; i++) {
        //     for (let j = 0; j <= nums.length; j++) {
        //         if (i === j) continue;
        //         if (nums[i] === nums[j]) {
        //             //console.log(nums[i], i, nums[j], j)
        //             return true;
        //         }
        //     }
        // }
        // return false
        // }

        /* Set
        For each element in the array, check if its in the set. 
        If its not, add it to the set and continue. 
        If it is, return true
        */
        const set = new Set<number>();
        for (let i = 0; i <= nums.length; i++) {
            if (set.has(nums[i])) {
                return true;
            } else {
                set.add(nums[i])
            }
        }
        return false
    }
        
}
