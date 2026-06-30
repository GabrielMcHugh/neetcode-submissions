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

        const unionSet = new Map<number, Set<number>>();
        let largestSet = 0;

        for (let num of nums) {
            if (unionSet.has(num)) continue;
            const smallerInt = num - 1;
            const largerInt = num + 1;
            let newUnion: Set<number>;
            if (unionSet.has(smallerInt) && unionSet.has(largerInt)) {
                newUnion = new Set([...unionSet.get(smallerInt), ...unionSet.get(largerInt)]);
                newUnion.add(num);
                //join the two sets
for (let n of newUnion) {
              unionSet.set(n, newUnion);
          }
            } else if (unionSet.has(smallerInt)) {
                //set num set to the smallerInt set
                newUnion = unionSet.get(smallerInt);
                newUnion.add(num);
                for (let n of newUnion) {
                    unionSet.set(n, newUnion);
                }
            } else if (unionSet.has(largerInt)) {
                //set largerInt set to num set
                newUnion = unionSet.get(largerInt);
                newUnion.add(num);
                for (let n of newUnion) {
              unionSet.set(n, newUnion);
          }
            } else {
                newUnion = new Set<number>().add(num);
                unionSet.set(num, newUnion);
            }
            if (newUnion.size > largestSet) largestSet = newUnion.size;
        }

        return largestSet;
    }
}
