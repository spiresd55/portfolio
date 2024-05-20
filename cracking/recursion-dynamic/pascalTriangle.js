
const formPascalsTriangle = (n, levels = [], currentLevel = 0) => {
    if(currentLevel === n) {
        return levels;
    } else if(currentLevel === 0) {
        levels.push([1]);
    } else {
        let level = []
        for(let i = 0; i <= currentLevel; i++) {
            if(i === 0 || i === currentLevel) {
                level.push(1);
            } else {
                let prevLevel = levels[currentLevel - 1];
                level.push(prevLevel[i - 1] + prevLevel[i])
            }
        }
        levels.push(level);
    }

    return formPascalsTriangle(n , levels, currentLevel + 1);
}

const repeat = (char, count) => {
    let str = '';
    for(let i = 0; i < count; i++) {
        str += char;
    }
    return str;
}

const printPascalsTriangle = (n) => {
    const triangle = formPascalsTriangle(n);
    for(let i = 0; i < triangle.length; i++) {
        let padding = Math.ceil( (n - triangle[i].length) / 2);
        let line = repeat(' ', padding);
        for(let j = 0; j < triangle[i].length; j++) {
            line += `_${triangle[i][j]}_`;
        }
        console.log(line);
    }
   
}

printPascalsTriangle(10);