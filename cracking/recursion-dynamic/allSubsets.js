
const powerSet = (set) => {
    let subset = [];
    let sets = [];

    let dfs = (i) => {
        if(i >= set.length) {
            sets.push([...subset])
            return;
        }

        // include nums[i]
        subset.push(set[i])
        dfs(i + 1);

        // do not include
        subset.pop();
        dfs(i + 1);
    }
 
    dfs(0);
    return sets;
}



console.log(powerSet([1,4,5]))