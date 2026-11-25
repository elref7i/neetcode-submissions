class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const lenS = s.length;
        const lenT = t.length;
        if(lenS !== lenT || (lenS<1 || lenT<1) ){
            return false
        }
        const checkCarFrequance =(char ,charLen)=>{
            const charFreq = {};
            for(let i = 0 ; i <charLen ; i++ ){
                let currentChar = char[i]
                charFreq[currentChar] = (charFreq[currentChar] || 0 ) + 1;
            }
            return charFreq; 
        }

        const charFreqS = checkCarFrequance(s,lenS);
        const charFreqT = checkCarFrequance(t,lenT);

        for(const charS of s){
            if(charFreqS[charS] !== charFreqT[charS]){
                return false
            }
        }
        return true
    }
}
