function makeArr(num) {

    var arr = [];

    for ( var i =0; i <= num; i++ ) {

        arr.push(i);

    }

    return arr;

};

var outputArr = makeArr(3);

function sumArr(arr) {

    var res = 0;

    for ( var i=0; i < arr.length; i++ ) {

        res+=arr[i];

    }

    return res;

}

sumArr( outputArr );