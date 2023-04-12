let jonSnowAttack = 25
let jamieLannisterAttack = 35
if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has better attack than Jamie");
}else if(jonSnowAttack < jamieLannisterAttack){
    console.log("Jamie has better attack than Jon")
}else{
    console.log("Jon and Jamie have same attack")
}
console.log("-------")
let jonSnowHealth = 100
let jonSnowDefense = 5

if (jonSnowHealth <= jamieLannisterAttack){
console.log("Jon has been slain.")}
    else {
        jonSnowHealth -= jamieLannisterAttack
        console.log("Jon's health is down to " + jonSnowHealth)
    }
console.log("-------")
    let coinLandsHeads = false
    if (coinLandsHeads === true){
        console.log("The fight continues")
    } else{
        console.log("Jon is allowed to run away")
    }
    console.log("-------")
//     for (let i = 0; i < 5; i++){

//          if(jonSnowHealth <= 0){
//              console.log("Jon has been slain.")}
//              else{
//          jonSnowHealth -= jamieLannisterAttack
//         console.log(`Jon's health is ${jonSnowHealth}`)
//      }
//  }
    // console.log("Jon's health is " + jonSnowHealth)


    while(jonSnowHealth > 0){
        jonSnowHealth = jonSnowHealth - jamieLannisterAttack
        console.log(`Jon's health is ${jonSnowHealth}`)
        if(jonSnowHealth <= 0){
            console.log("Jon has been slain.")
        }
    }