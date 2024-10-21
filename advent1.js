
// const findFirstRepeated = (giftIds)=> {
//     const seen = new Set()
//     for (const giftId of giftIds) {
//         if (seen.has(giftId)) {
//             return giftId
//         }
//         seen.add(giftId)
//     }
//     return -1
// }
// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3)

// function manufacture(gifts, materials) {
//     let result = []
//     for (const gift of gifts) {
//         const giftMaterials = new Set(gift)
//         for (const material of materials) {
//             if (giftMaterials.has(material)) {
//                 giftMaterials.delete(material)
//             }
//         }
//         if (giftMaterials.size === 0) {
//             result.push(gift)
//         }
//     }

//     return result
// }
// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// console.log(manufacture(gifts, materials))

// function findNaughtyStep(original, modified) {
//     const minLength = Math.min(original.length, modified.length);
//     for (let i = 0; i < minLength; i++) {
//         if (original[i] !== modified[i]) {
//             return modified.length > original.length ? modified[i] : original[i];
//         }
//     }
//     if (original.length !== modified.length) {
//         return modified.length > original.length ? modified[minLength] : original[minLength];
//     }
//     return '';
//   }

// const original1 = 'stepfor'
// const modified1 = 'stepor'
// console.log(findNaughtyStep(original1, modified1)) 
// const original = 'abcd'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)) 
// const original2 = 'abcde'
// const modified2 = 'abcde'
// console.log(findNaughtyStep(original2, modified2)) 

// cadena inversa sa(u(cla)atn)s => santaclaus 
function decode(message){
    let stack = [] // creamos una pila
    for (let char of message) // iteramos sobre la cadena 
    {
        if(char === ')')
        {
            let temp = '';
            while(stack.length && stack[stack.length -1 ] !== '(') // siempre y cuando exista la pila y que la pila no sea ( entrara
            {
                temp += stack.pop() // quitamos el ultimo elemento de la pila
            }
            stack.pop() // nos desasemos del (
            for (let c of temp){
                stack.push(c) // cargamos la pila con la cadena ya invertida
            }
        }else{
            stack.push(char) // cargamos la pila siempre y cuando no exta la cadena )
        }
    }
    return stack.join(''); // unimos la pila
}
