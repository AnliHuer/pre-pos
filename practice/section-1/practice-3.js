function checkEquals( key , object_b ){
    for( var k = 0; k < object_b.value.length; k++ ){
        if( key === object_b.value[k] ){
            return key;
        }
    }
}
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
    var result = [];
    for( var i = 0 ; i < collection_a.length; i++ ){
        var key = checkEquals( collection_a[i],object_b );

        if(key){
            result.push(key);
        }
    }
    return result;
}

