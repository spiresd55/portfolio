const longestCommonSubstring = (str1, str2) => {
    let dt = [];

    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++) {
            let isMatch = str1[i] === str2[j];
            console.log(isMatch, str1[i], str2[j])
            if(j === 0) {
                dt[i] = [];
            } 
            
            if(i === 0 && j === 0 ) {
                dt[i][j] = isMatch ? 1 : 0;
            } else if(i === 0) {
                dt[i][j] = isMatch ? 1 : 0
            } else {
                dt[i][j] = dt[i - 1][j] + (isMatch ? 1 : 0);
            }



        }
    }

    return dt;
}

console.log(longestCommonSubstring('ABAZDC', 'BACBAD'));