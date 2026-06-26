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
        //Solve this myself but took a while;
        //The start of the prefixes should be one as theres nothing to multiply
        prefixes[0] = 1
        //We are getting the product from the previous elements so multiply the last
        //product by the current value. We insert into i+1 of prefixes array as were getting the product
        //of all values up until and including the current position, but that is just the **prefix**
        //of the next entry in the nums array.
        for (let i = 0; i < nums.length-1; i++) {
            let prefixProduct = prefixes[i]*nums[i]
            prefixes[i+1] = (prefixProduct)
        }
        
        //2. Suffix
        const suffixes: number[] = new Array(nums.length);
        suffixes[nums.length - 1] = 1
        //The same logic applies to suffixes. Going in reverse, the first entry
        //of suffixes will be 1. So we start inserting from the second loop the products
        //of the suffixes
        for (let i = nums.length - 1; i >= 1; i--) {
            let suffixProduct = suffixes[i]*nums[i]
            suffixes[i-1] = (suffixProduct)
        }
        
        //3. ProductExceptSelf
        const result: number[] = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            result[i] =(prefixes[i]*suffixes[i])
        }

        //need to exclude the last prefix/suffix in the arrays and add a 1 to the end of the suffix and a 1 to the start of the prefix

        return result

    }
}
