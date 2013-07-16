function scale(object, region){
    
    var scaleX = region.width / object.width;
    var scaleY = region.height / object.height;
    return scaleX > scaleY ?
        { width : object.width * scaleY, height : region.height} :  
        { width : region.width, height : object.height * scaleX};
}

