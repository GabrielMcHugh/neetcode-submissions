public class Solution {
    public bool hasDuplicate(int[] nums) {
        var hashSet = new HashSet<int>();
        
        foreach (int num in nums)
        {
            if (hashSet.Contains(num))
            {
                return true; // Fix 2: Added semicolon
            } 
            else 
            {
                hashSet.Add(num); // Fix 3: Added semicolon
            }
        }

        return false; // Fix 4: Added semicolon
    }
}