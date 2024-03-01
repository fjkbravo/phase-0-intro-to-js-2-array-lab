const cats = []
    cats.push("Milo", "Otis", "Garfield");
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    var name_1 = [...cats, name];
    return name_1;
}
function prependCat(name){
    var name_2 = [name, ...cats];
    return name_2;
}
function removeLastCat(){
    var newArray= cats.slice(0,cats.length-1);
    return newArray;
}
function removeFirstCat(){
    var newArray2= cats.slice(1);
    return newArray2;
}