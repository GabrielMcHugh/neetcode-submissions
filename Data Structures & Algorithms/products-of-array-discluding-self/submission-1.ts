class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        /**
         * Prefix & Suffix Pattern: correct way
         * Loop over it three times, first building the prefix multiply then
         * the second time loop multiply the suffixes
         * 
         * Then as the final you could multiple the suffix and prefix and it 
         * would naturally exclude the entry from the product
         */

        //1. Prefix
        const prefixes: number[] = new Array(nums.length);
        let prefixProduct = 1;
        for (let i = 0; i < nums.length-1; i++) {
            prefixProduct = prefixProduct*nums[i]
            prefixes[i+1] = (prefixProduct)
        }
        //The start of the prefixes should be one as theres nothing to multiple
        prefixes[0] = 1
        //2. Suffix
        const suffixes: number[] = new Array(nums.length);
        let suffixProduct = 1;
        for (let i = nums.length - 1; i >= 1; i--) {
            suffixProduct = suffixProduct*nums[i]
            suffixes[i-1] = (suffixProduct)
        }
        suffixes[nums.length - 1] = 1
        //3. ProductExceptSelf
        const result: number[] = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            result[i] =(prefixes[i]*suffixes[i])
        }

        //need to exclude the last prefix/suffix in the arrays and add a 1 to the end of the suffix and a 1 to the start of the prefix

        return result

    }
}
