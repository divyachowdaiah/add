let count=0;
function increment() {
    count++;
    document.getElementById("add").innerHTML =  count;
}
function decrease() {
    if(count>=1)
    {
        document.getElementById("add").innerHTML =    count;
        count--;
        
    }
    else{
       document.getElementById("add").innerHTML = "Add to cart atleast ones";
    }

}