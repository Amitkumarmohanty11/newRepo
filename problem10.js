function AlternateRearrange(arr, n)
{
    
    arr.sort((a,b)=>a-b);
 
    var v1 = []; 
    var v2 = []; 
 
    for (var i = 0; i < n; i++)
        if (arr[i] % 2 == 0)
            v1.push(arr[i]);
        else
            v2.push(arr[i]);
 
    var index = 0, i = 0, j = 0;
 
    var flag = false;
 
    
    if (arr[0] % 2 == 0)
        flag = true;
 
    
    while (index < n) {
 
        
        if (flag == true) {
            arr[index++] = v1[i++];
            flag = !flag;
        }
 
      
        else {
            arr[index++] = v2[j++];
            flag = !flag;
        }
    }
 
    
    for (i = 0; i < n; i++)
        console.log( arr[i] + " ");
}
 

var arr = [5,3,9,1,44,6];
var n = arr.length;
AlternateRearrange(arr,n);
