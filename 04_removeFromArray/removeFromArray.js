const removeFromArray = function(values, ...removeList) {
    let i = 0;
    while (i < values.length) {
        if (removeList.indexOf(values[i]) >= 0) {
            values.splice(i, 1);
        } else {
            i++;
        }
    }
    return values;
};

// Do not edit below this line
module.exports = removeFromArray;
