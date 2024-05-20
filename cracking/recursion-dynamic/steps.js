let buildString = (c, count) => {
    let str = '';
    for(let i = 0; i < count; i++) {
        str += c;
    }

    return str;
}

const steps = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(buildString(' ', n - i)  + buildString('#', i)); 
    }
}

steps(30);