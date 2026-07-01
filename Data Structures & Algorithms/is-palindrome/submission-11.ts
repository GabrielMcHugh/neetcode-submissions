class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        /**
         * First attempt: Two pointers
         * Pretty straight forward. Loop and compare the last to the first (two pointers)
         * 
         * I tried doing this in one loop, but it would be cleaner to process the string first
         * I'm going to continue with this solution then attempt the cleaner one next.
         */

        function isAlphanumeric(char: string): boolean {
            return /^[a-z0-9]$/i.test(char);
        }

        let j = s.length - 1
        let removedChar = 0
        let mid = s.length / 2

        function removeChar() {
            removedChar++;
            mid = (s.length - removedChar)/2
        }


        for (let i = 0; i < mid; i++) //if length is odd then that middle will always be excluded
        {   
            if (!isAlphanumeric(s[i])) {
                removeChar()
                continue
            }
            while (!isAlphanumeric(s[j]) && j >= mid) {
                removeChar()
                j--;
            }
            console.log(s[i], s[j])
            if (s[i].toLowerCase() != s[j].toLowerCase()) return false;
            j--;
        }
        return true
    }
}
