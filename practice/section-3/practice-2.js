
function checkEquals( coll_a, object_b) {
    for (var k = 0; k < object_b.value.length; k++) {
        if (coll_a.key === object_b.value[k]) {
            return coll_a.count - Math.floor(coll_a.count/3) ;
        }
    }
}


function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var result = [];
    for (var i = 0; i < collection_a.length; i++) {
        var coll_a_count = checkEquals(collection_a[i], object_b);
        if(coll_a_count){
            collection_a[i].count = coll_a_count;
        }
    }
    return collection_a;
}

