import store from '@/store'

const joinTayType = function(val){
    let item = store.state.joinWayType.find(t => t.key == val)
    return item ? item.value : val
}

//秒转换为时间
const formatSeconds = function(value) {
    var theTime = parseInt(value); // 需要转换的时间秒 
    var theTime1 = 0; // 分 
    var theTime2 = 0; // 小时 
    var theTime3 = 0; // 天
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
            if (theTime2 > 24) {
                //大于24小时
                theTime3 = parseInt(theTime2 / 24);
                theTime2 = parseInt(theTime2 % 24);
            }
        }
    }
    var result = '';
    if (theTime > 0) {
        result = "" + parseInt(theTime) + "秒";
    }
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "分" + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + "小时" + result;
    }
    if (theTime3 > 0) {
        result = "" + parseInt(theTime3) + "天" + result;
    }
    return result;
}

export default {
    joinTayType,
    formatSeconds
}