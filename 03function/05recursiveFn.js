function loop(x){
    console.log(x)
    if (x >= 5){
        return
    }
    loop(x+1); // recursive call
}

loop(0);