function count_same_elements(collection) {
  //在这里写入代码
    var result = [];
    var count=1;

    for(var i = 0 ; i < collection.length ; i++){
        if(collection [i] === collection[i+1]){
            count++;
        }else{
            var obj = {key:collection[i],count:count};
            result.push(obj);
            count = 1;
        }
    }
    return result;
}
