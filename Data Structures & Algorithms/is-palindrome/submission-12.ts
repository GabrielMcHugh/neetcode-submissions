class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        /**
         * Two Pointer: cleaner attempt
         * 
         * 1. Clean String
         * 2. Two pointer
         */

        //clean string
        let c = s.replace(/[^a-z0-9]/ig, "").toLowerCase()

        let mid = c.length/2
        let j = c.length - 1
        for (let i = 0; i < mid; i ++) {
            if (c[i] !== c[j]) return false;
            j--;
        }

        return true
    }
}
