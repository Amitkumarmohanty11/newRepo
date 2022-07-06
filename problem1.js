var num = 0;
if(num==0)
{
    console.log("The factorial value will be=1");

}
else if(num<0)
{
    console.log("Invalid Number");
}
else
{
var fact = 1;
for(var i=1;i<=num;i++)
{
    fact*=i;
}
console.log("The factorial value will be =",fact);
}
