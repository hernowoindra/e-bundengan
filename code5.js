gdjs.KendangCode = {};
gdjs.KendangCode.localVariables = [];
gdjs.KendangCode.GDbg_9595kendangObjects1= [];
gdjs.KendangCode.GDbg_9595kendangObjects2= [];
gdjs.KendangCode.GDkendang_9595dengObjects1= [];
gdjs.KendangCode.GDkendang_9595dengObjects2= [];
gdjs.KendangCode.GDkendang_9595dungObjects1= [];
gdjs.KendangCode.GDkendang_9595dungObjects2= [];
gdjs.KendangCode.GDkendang_9595takObjects1= [];
gdjs.KendangCode.GDkendang_9595takObjects2= [];
gdjs.KendangCode.GDtbl_9595backObjects1= [];
gdjs.KendangCode.GDtbl_9595backObjects2= [];


gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDtbl_95959595backObjects1Objects = Hashtable.newFrom({"tbl_back": gdjs.KendangCode.GDtbl_9595backObjects1});
gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDkendang_95959595takObjects1Objects = Hashtable.newFrom({"kendang_tak": gdjs.KendangCode.GDkendang_9595takObjects1});
gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDkendang_95959595dungObjects1Objects = Hashtable.newFrom({"kendang_dung": gdjs.KendangCode.GDkendang_9595dungObjects1});
gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDkendang_95959595dengObjects1Objects = Hashtable.newFrom({"kendang_deng": gdjs.KendangCode.GDkendang_9595dengObjects1});
gdjs.KendangCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tbl_back"), gdjs.KendangCode.GDtbl_9595backObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KendangCode.GDtbl_9595backObjects1.length;i<l;++i) {
    if ( gdjs.KendangCode.GDtbl_9595backObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.KendangCode.GDtbl_9595backObjects1[k] = gdjs.KendangCode.GDtbl_9595backObjects1[i];
        ++k;
    }
}
gdjs.KendangCode.GDtbl_9595backObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDtbl_95959595backObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuUtama", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kendang_tak"), gdjs.KendangCode.GDkendang_9595takObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KendangCode.GDkendang_9595takObjects1.length;i<l;++i) {
    if ( gdjs.KendangCode.GDkendang_9595takObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.KendangCode.GDkendang_9595takObjects1[k] = gdjs.KendangCode.GDkendang_9595takObjects1[i];
        ++k;
    }
}
gdjs.KendangCode.GDkendang_9595takObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDkendang_95959595takObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10620604);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.KendangCode.GDkendang_9595takObjects1 */
{for(var i = 0, len = gdjs.KendangCode.GDkendang_9595takObjects1.length ;i < len;++i) {
    gdjs.KendangCode.GDkendang_9595takObjects1[i].setAnimationName("getar");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Kendang_Tak.mp3", 8, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kendang_dung"), gdjs.KendangCode.GDkendang_9595dungObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KendangCode.GDkendang_9595dungObjects1.length;i<l;++i) {
    if ( gdjs.KendangCode.GDkendang_9595dungObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.KendangCode.GDkendang_9595dungObjects1[k] = gdjs.KendangCode.GDkendang_9595dungObjects1[i];
        ++k;
    }
}
gdjs.KendangCode.GDkendang_9595dungObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDkendang_95959595dungObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10622324);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.KendangCode.GDkendang_9595dungObjects1 */
{for(var i = 0, len = gdjs.KendangCode.GDkendang_9595dungObjects1.length ;i < len;++i) {
    gdjs.KendangCode.GDkendang_9595dungObjects1[i].setAnimationName("getar");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Kendang_Tung.mp3", 9, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kendang_deng"), gdjs.KendangCode.GDkendang_9595dengObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KendangCode.GDkendang_9595dengObjects1.length;i<l;++i) {
    if ( gdjs.KendangCode.GDkendang_9595dengObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.KendangCode.GDkendang_9595dengObjects1[k] = gdjs.KendangCode.GDkendang_9595dengObjects1[i];
        ++k;
    }
}
gdjs.KendangCode.GDkendang_9595dengObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.KendangCode.mapOfGDgdjs_9546KendangCode_9546GDkendang_95959595dengObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10624044);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.KendangCode.GDkendang_9595dengObjects1 */
{for(var i = 0, len = gdjs.KendangCode.GDkendang_9595dengObjects1.length ;i < len;++i) {
    gdjs.KendangCode.GDkendang_9595dengObjects1[i].setAnimationName("getar");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Kendang_Deng.mp3", 10, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("kendang_deng"), gdjs.KendangCode.GDkendang_9595dengObjects1);
gdjs.copyArray(runtimeScene.getObjects("kendang_dung"), gdjs.KendangCode.GDkendang_9595dungObjects1);
gdjs.copyArray(runtimeScene.getObjects("kendang_tak"), gdjs.KendangCode.GDkendang_9595takObjects1);
{for(var i = 0, len = gdjs.KendangCode.GDkendang_9595dengObjects1.length ;i < len;++i) {
    gdjs.KendangCode.GDkendang_9595dengObjects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.KendangCode.GDkendang_9595dungObjects1.length ;i < len;++i) {
    gdjs.KendangCode.GDkendang_9595dungObjects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.KendangCode.GDkendang_9595takObjects1.length ;i < len;++i) {
    gdjs.KendangCode.GDkendang_9595takObjects1[i].setAnimationName("idle");
}
}}

}


};

gdjs.KendangCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.KendangCode.GDbg_9595kendangObjects1.length = 0;
gdjs.KendangCode.GDbg_9595kendangObjects2.length = 0;
gdjs.KendangCode.GDkendang_9595dengObjects1.length = 0;
gdjs.KendangCode.GDkendang_9595dengObjects2.length = 0;
gdjs.KendangCode.GDkendang_9595dungObjects1.length = 0;
gdjs.KendangCode.GDkendang_9595dungObjects2.length = 0;
gdjs.KendangCode.GDkendang_9595takObjects1.length = 0;
gdjs.KendangCode.GDkendang_9595takObjects2.length = 0;
gdjs.KendangCode.GDtbl_9595backObjects1.length = 0;
gdjs.KendangCode.GDtbl_9595backObjects2.length = 0;

gdjs.KendangCode.eventsList0(runtimeScene);
gdjs.KendangCode.GDbg_9595kendangObjects1.length = 0;
gdjs.KendangCode.GDbg_9595kendangObjects2.length = 0;
gdjs.KendangCode.GDkendang_9595dengObjects1.length = 0;
gdjs.KendangCode.GDkendang_9595dengObjects2.length = 0;
gdjs.KendangCode.GDkendang_9595dungObjects1.length = 0;
gdjs.KendangCode.GDkendang_9595dungObjects2.length = 0;
gdjs.KendangCode.GDkendang_9595takObjects1.length = 0;
gdjs.KendangCode.GDkendang_9595takObjects2.length = 0;
gdjs.KendangCode.GDtbl_9595backObjects1.length = 0;
gdjs.KendangCode.GDtbl_9595backObjects2.length = 0;


return;

}

gdjs['KendangCode'] = gdjs.KendangCode;
