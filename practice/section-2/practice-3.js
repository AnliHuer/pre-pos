function calCount(str){
    var cnt = 0;
    if(str.length>3){
        cnt = str.substring(2,str.indexOf("]"))-0;
    }else if(str.length === 1 ){
            cnt = 1
    }else{
        cnt = str.charAt(2)-0;
}
    return cnt;
}

function count_same_elements(collection) {
  //在这里写入代码
    var result = [];
    var obj;
    var cnt = 1;
    for(var i = 0; i < collection.length-1; i++){
        if(collection[i].charAt(0) === collection[i+1].charAt(0)){
            cnt += calCount(collection[i+1]);
        }else{
            if(cnt == 1){
                cnt = calCount(collection[i])
            }
            obj = {name:collection[i].charAt(0),summary:cnt};
            result.push(obj);
            cnt = 1;


        }
    }
    if(collection[collection.length-2].charAt(0) != collection[collection.length-1].charAt(0)){
        obj = {name:collection[collection.length-1].charAt(0),summary:collection[collection.length-1].charAt(2)-0};
        result.push(obj);
    }

    return result;
}






