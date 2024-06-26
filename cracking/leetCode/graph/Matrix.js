class Matrix {
   constructor(data) {
     this.data = data;
     this.n = data.length;
     this.m = data[0].length;
   }

   getLeft(x, y) {
        if(y - 1 >= 0) {
            return {
                data: this.data[x][y - 1],
                x,
                y: y - 1
            };
        }
   }

   getRight(x, y) {
        if(y + 1 <= this.m - 1) {
            return {
                data: this.data[x][y + 1],
                x,
                y: y + 1
            };
        }
   }

   getTop(x, y) {
        if(x - 1 >= 0) {
            return {
                data: this.data[x - 1][y],
                x: x- 1,
                y
            };
        }
   }

   getBottom(x, y) {
        if(x + 1 <= this.n - 1) {
            return {
                data: this.data[x + 1][y],
                x: x + 1,
                y
            };
        }
   }

   getSurroundingCoordinates(x, y) {
        return {
            left: this.getLeft(x,y),
            right: this.getRight(x, y),
            bottom: this.getBottom(x,y),
            top: this.getTop(x,y)
        }
   }
}

module.exports = Matrix;