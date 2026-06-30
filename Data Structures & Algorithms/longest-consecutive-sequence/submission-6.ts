class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        /**
         * First attempt:
         * They mention a union find -> So a set.
         *
         * Idea: Iterate over the array and check the set for the number -1 and +1
         * If there is no number, add that number to a new set.
         * If one of those numbers exist. Add the number to that set.
         * If both those numbers exists, join both sets into a one
         * Return the size of the largest group
         */

        const numSet = new Set(nums);
        let longestStreak = 0;

        for (let num of numSet) {
            //Check if num is start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                //Count how far the sequence goes
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
}
