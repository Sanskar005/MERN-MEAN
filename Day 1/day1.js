var n=1;
function even(){
    console.log("Even numbers till 10")
while(n<10)
{
    if(n%2==0)
    {
        console.log(n);
    }
    n++;
}
}
function prime(){
    console.log("Prime numbers till 10")
    for (var i = 2; i <= 10; i++) {
        var isPrime = true;
        for (var j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
    
}
even();
prime();