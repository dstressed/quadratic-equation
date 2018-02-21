module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
    var a = arr[0];
    var b = (arr[3] == '-') ? -arr[4] : arr[4];
    var c = (arr[7] == '-') ? -arr[8] : arr[8];
    var d = (b * b) - (4 * a * c);
    switch(d) {
        case d < 0: {
            return [];
        }
        break;
        case d == 0: {
            return [(-b + Math.sqrt(d)) / (2 * a)];
        }
        break;
        default: {
            var root1 = (-b + Math.sqrt(d)) / (2 * a);
            var root2 = (-b - Math.sqrt(d)) / (2 * a);
            root1 = Math.round(root1 * 10) / 10;
            root2 = Math.round(root2 * 10) / 10;
            if (root1 < root2) return [root1, root2];
            else return [root2, root1];
        }
    }
};
