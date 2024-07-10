
var WordDictionary = function() {
    //Trie data structure using a hashmap
    this.children = {};
    this.wordCount = 0;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this;
    word = word.toLowerCase();

    for(let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i);
        let key = code - 97;

        if(current.children[key]) {
            current = current.children[key];
        } else {
            current.children[key] = new WordDictionary();
            current = current.children[key];
        }
    }
     current.wordCount++;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  //BFS
  let nodes = [this];
  let index = 0;
  return searchHelper(word, 0, [this]);
};

let searchHelper = (word, index, nodes) => {
    let newNodes = [];
    let n = word.length - 1;
    let code = word.charCodeAt(index);
    let key = code - 97;

    if(index === word.length ) {
        return false;
    }

    for(let i = 0; i < nodes.length; i++) {
        let node = nodes[i];

        if(word[index] === '.') {
            for(let key in node.children ) {
                newNodes.push(node.children[key]);
            }
        } else {
            if(node.children[key]) {
                newNodes.push(node.children[key])
            }
        }
    }

    if(index === n) {
        return findMatch(newNodes);
    }

    return searchHelper(word, index + 1, newNodes);
}

const findMatch = (nodes) => {
    for(let i = 0; i < nodes.length; i++) {
        if(nodes[i].wordCount) {
            return true;
        }
    }

    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */