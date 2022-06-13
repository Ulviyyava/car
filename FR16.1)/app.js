var japoncar ={
    name:'Mazda',
    country:'Japon'

}
var general ={
    general:function(car){
        return "Car Name:" + car.name +"/ Country: "+ car.country
    }
}
console.log(general.general(japoncar))