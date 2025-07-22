function freqMapping (arr) {
    return arr.reduce((arr, cuurentEle)=>{
        arr[cuurentEle] = (arr[cuurentEle] || 0) + 1
        return arr
    }, {})
}


let arr = [1, 2, 2, 3, 3, 3]
console.log(freqMapping(arr));
