function $_GET(){

    let get = new Array();

    let curParams = window.location.search.substr(1);
    let curParamsList = curParams.split('&');

    let cpt = 0;
    let len = curParamsList.length;
    let cur = null;

    for(cpt=0; cpt<len; cpt++){
        cur = curParamsList[cpt];
        curDet = cur.split('=');
        get[curDet[0]]=curDet[1];
    }
    return get;

}

function getObjectValue(obj, key, replace){

    if(obj.hasOwnProperty(key)){
        let value = obj[key];
        if(value && value !=null && value != ''){
            return value;
        }
    }
    return replace;
}