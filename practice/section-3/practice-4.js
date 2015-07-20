function createNewC(collection_a){
    var cnt = 1;
    var obj;
    var c = [];
    for( var i = 0; i < collection_a.length; i++ ){
        if(collection_a[i] === collection_a[i+1]){
            cnt++;
        }else{
            if(collection_a[i].length>1){
                obj = {key:collection_a[i].charAt(0),count:collection_a[i].charAt(2)-0};
            }else{
                obj = {key:collection_a[i],count:cnt};
            }
            c.push(obj);
            cnt = 1;
        }
    }
    return c;
}


function checkEquals(c,object_b){
    for ( var i = 0; i < c.length; i++ ){
        for( var k = 0; k < object_b.value.length; k++){
            if(c[i].key === object_b.value[k]){
                c[i].count = c[i].count - Math.floor( c[i].count/3 );
            }
        }
    }
    return c;
}

function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var result = [];
    var c = createNewC(collection_a);
    result = checkEquals(c,object_b);
    return result;
}
