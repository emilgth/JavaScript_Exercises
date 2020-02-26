let nums = [10, 10];

hoistMe(nums);
hoistMe(nums2);

function hoistMe(array) {
    var hoisted = [4, 2];
    if (array !== undefined) {
        console.log(array.reduce((a, b) => a + b));
    } else {
        console.log("Not defined")
    }
    console.log(hoisted.reduce((a, b) => a + b));
}

var nums2 = [5, 5];
