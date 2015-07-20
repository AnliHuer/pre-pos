function checkEquals( key , collection_b ){
    for( var k = 0; k < collection_b[0].length; k++ ){
        if( key === collection_b[0][k] ){
            return key;
        }
    }
}
function collect_same_elements( collection_a, collection_b ) {
    var result = [];
    for( var i = 0 ; i < collection_a.length; i++ ){
        var key = checkEquals( collection_a[i],collection_b );
        if(key){
            result.push(key);
        }
    }
    return result;
}