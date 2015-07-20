
function count_same_elements(collection) {
    //在这里写入代码
    var result = [];
    var cnt=1;
    var obj;
    for(var i = 0 ; i < collection.length ; i++){
        if(collection [i] === collection[i+1]){
            cnt++;
        }else{
            if(collection[i].length>1){
                obj = {key:collection[i].charAt(0),count:collection[i].charAt(2)-0};
            }else{
                obj = {key:collection[i],count:cnt};
            }
            result.push(obj);
            cnt = 1;
        }
    }
    return result;
}
