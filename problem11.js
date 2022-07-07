function sortByFreq(arr, n) {
  
  var maxE = -1;

  for (var i = 0; i < n; i++) {
    maxE = Math.max(maxE, arr[i]);
  }

  var freq = new Array(maxE + 1).fill(0);

  for (var i = 0; i < n; i++) {
    freq[arr[i]]++;
  }
  var cnt = 0;

  for (var i = 0; i <= maxE; i++) {
    
    if (freq[i] > 0) {
      var value = 100000 - i;
      arr[cnt] = 100000 * freq[i] + value;
      cnt++;
    }
  }

  
  return cnt;
}


function printSortedArray(arr, cnt) {
  
  for (var i = 0; i < cnt; i++) {
    
    var frequency = parseInt(arr[i] / 100000);

    
    var value = 100000 - (arr[i] % 100000);

    
    for (var j = 0; j < frequency; j++) {
     console.log(value + " ");
    }
  }
}

var arr = [3,3,4,4,7,8];


var n = arr.length;
var cnt = sortByFreq(arr, n);

arr.sort((a, b) => b+a);

printSortedArray(arr, cnt);
