class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let sumConsecutiveNum = 0;
        const len = nums.length;
        for(let i= 0 ; i< len ; i++){
            let cnt = 0;
           for(let j = i ; j< len ; j++){
            if(nums[j] === 0) break;
            cnt ++;
           }
           sumConsecutiveNum = Math.max(sumConsecutiveNum,cnt)
        }
        return sumConsecutiveNum ;
    }
}

