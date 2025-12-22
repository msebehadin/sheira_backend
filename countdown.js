let count=10;
const timer=setInterval(()=>{
    console.log(count)
    if (count==0){
        console.log('time is up')
        clearInterval(timer)
    }
    count--

},1000)