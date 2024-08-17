const createPet = function(name){
    var sex;

    const pet = {
        setName(newname){
            name = newname
        },
    
        getName(){
            return name;
        },
    
        getSex(){
            return sex;
        },
    
        setSex(newSex){
            if(typeof newSex === "string" && 
                (newSex.toLowerCase() === "male") || (newSex.toLowerCase() === "female")){
                    sex = newSex;
                }
        },
    };

    return pet;
}

const pet = createPet("rusty");
console.log(pet.getName()); //rusty

pet.setName("Oliver");
console.log(pet.getName()); // Oliver
pet.setSex("Male");
console.log(pet.getSex()) // Male 


