var pet = function(name){
    var getname = function(){
        return name;
    }
    return getname;
}

dogName = pet("tiger");
console.log(dogName()); // tiger
