class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sortFunction= (char)=>{
            return char.split("").sort().join("")
        }
        const charS = sortFunction(s)
        const charT = sortFunction(t)

        return charS === charT ? true : false 
    }
}
