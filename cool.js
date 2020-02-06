let arr = [1,2,3,4,5,6,7];

function shuffle(array){
    array.sort(()=>{ Math.random() - 0.5});
}


arr = shuffle(arr)

console.log(arr)