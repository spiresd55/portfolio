
var Trie = function() {
    this.children = new Array(26).fill(null);
    this.wordCount = 0;
};


/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    word = word.toLowerCase();
    let current = this.children;
    for(let i = 0; i < word.length; i++) {
        let charCode = word.charCodeAt(i);

        //Character code begins at 97 for lowercase alphabet
        let key = charCode - 97;
        if(current[key]) {
            current = current[key];
        } else {
            current[key] = new Trie();
            current = current[key];
        }

    }

    current.wordCount++;
    return word;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.children;
    for(let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i);
        let key = code - 97;

        if(!current[key]) {
            return false
        } else {
            current = current[key];
        }
    }

    return current.wordCount > 0;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     let current = this.children;
    for(let i = 0; i < prefix.length; i++) {
        let code = prefix.charCodeAt(i);
        let key = code - 97;

        if(!current[key]) {
            return false
        } else {
            current = current[key];
        }
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */