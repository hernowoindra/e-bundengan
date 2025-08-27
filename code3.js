gdjs.BassCode = {};
gdjs.BassCode.localVariables = [];
gdjs.BassCode.GDbg_9595bassObjects1= [];
gdjs.BassCode.GDbg_9595bassObjects2= [];
gdjs.BassCode.GDbass_9595s1Objects1= [];
gdjs.BassCode.GDbass_9595s1Objects2= [];
gdjs.BassCode.GDbass_9595s2Objects1= [];
gdjs.BassCode.GDbass_9595s2Objects2= [];
gdjs.BassCode.GDbass_9595s3Objects1= [];
gdjs.BassCode.GDbass_9595s3Objects2= [];
gdjs.BassCode.GDbass_9595s4Objects1= [];
gdjs.BassCode.GDbass_9595s4Objects2= [];
gdjs.BassCode.GDtbl_9595KembaliObjects1= [];
gdjs.BassCode.GDtbl_9595KembaliObjects2= [];


gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDtbl_95959595KembaliObjects1Objects = Hashtable.newFrom({"tbl_Kembali": gdjs.BassCode.GDtbl_9595KembaliObjects1});
gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s1Objects1Objects = Hashtable.newFrom({"bass_s1": gdjs.BassCode.GDbass_9595s1Objects1});
gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s2Objects1Objects = Hashtable.newFrom({"bass_s2": gdjs.BassCode.GDbass_9595s2Objects1});
gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s3Objects1Objects = Hashtable.newFrom({"bass_s3": gdjs.BassCode.GDbass_9595s3Objects1});
gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s4Objects1Objects = Hashtable.newFrom({"bass_s4": gdjs.BassCode.GDbass_9595s4Objects1});
gdjs.BassCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tbl_Kembali"), gdjs.BassCode.GDtbl_9595KembaliObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BassCode.GDtbl_9595KembaliObjects1.length;i<l;++i) {
    if ( gdjs.BassCode.GDtbl_9595KembaliObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BassCode.GDtbl_9595KembaliObjects1[k] = gdjs.BassCode.GDtbl_9595KembaliObjects1[i];
        ++k;
    }
}
gdjs.BassCode.GDtbl_9595KembaliObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDtbl_95959595KembaliObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("bass_s1"), gdjs.BassCode.GDbass_9595s1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BassCode.GDbass_9595s1Objects1.length;i<l;++i) {
    if ( gdjs.BassCode.GDbass_9595s1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BassCode.GDbass_9595s1Objects1[k] = gdjs.BassCode.GDbass_9595s1Objects1[i];
        ++k;
    }
}
gdjs.BassCode.GDbass_9595s1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10491084);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BassCode.GDbass_9595s1Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Bass_s1_Sol(F).mp3", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.BassCode.GDbass_9595s1Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s1Objects1[i].setAnimationName("getar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bass_s2"), gdjs.BassCode.GDbass_9595s2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BassCode.GDbass_9595s2Objects1.length;i<l;++i) {
    if ( gdjs.BassCode.GDbass_9595s2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BassCode.GDbass_9595s2Objects1[k] = gdjs.BassCode.GDbass_9595s2Objects1[i];
        ++k;
    }
}
gdjs.BassCode.GDbass_9595s2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10492500);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BassCode.GDbass_9595s2Objects1 */
{for(var i = 0, len = gdjs.BassCode.GDbass_9595s2Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s2Objects1[i].setAnimationName("getar");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Bass_s2_Si(A).mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bass_s3"), gdjs.BassCode.GDbass_9595s3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BassCode.GDbass_9595s3Objects1.length;i<l;++i) {
    if ( gdjs.BassCode.GDbass_9595s3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BassCode.GDbass_9595s3Objects1[k] = gdjs.BassCode.GDbass_9595s3Objects1[i];
        ++k;
    }
}
gdjs.BassCode.GDbass_9595s3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10493300);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BassCode.GDbass_9595s3Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Bass_s3_Do(Akres).mp3", 3, false, 100, 1);
}{for(var i = 0, len = gdjs.BassCode.GDbass_9595s3Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s3Objects1[i].setAnimationName("getar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bass_s4"), gdjs.BassCode.GDbass_9595s4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BassCode.GDbass_9595s4Objects1.length;i<l;++i) {
    if ( gdjs.BassCode.GDbass_9595s4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BassCode.GDbass_9595s4Objects1[k] = gdjs.BassCode.GDbass_9595s4Objects1[i];
        ++k;
    }
}
gdjs.BassCode.GDbass_9595s4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BassCode.mapOfGDgdjs_9546BassCode_9546GDbass_95959595s4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10495268);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BassCode.GDbass_9595s4Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "snd\\01_suara_bundengan\\Bass_s4_Mi(D).mp3", 4, false, 100, 1);
}{for(var i = 0, len = gdjs.BassCode.GDbass_9595s4Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s4Objects1[i].setAnimationName("getar");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bass_s1"), gdjs.BassCode.GDbass_9595s1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bass_s2"), gdjs.BassCode.GDbass_9595s2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bass_s3"), gdjs.BassCode.GDbass_9595s3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bass_s4"), gdjs.BassCode.GDbass_9595s4Objects1);
{for(var i = 0, len = gdjs.BassCode.GDbass_9595s1Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s1Objects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.BassCode.GDbass_9595s2Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s2Objects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.BassCode.GDbass_9595s3Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s3Objects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.BassCode.GDbass_9595s4Objects1.length ;i < len;++i) {
    gdjs.BassCode.GDbass_9595s4Objects1[i].setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BassCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BassCode.GDbg_9595bassObjects1.length = 0;
gdjs.BassCode.GDbg_9595bassObjects2.length = 0;
gdjs.BassCode.GDbass_9595s1Objects1.length = 0;
gdjs.BassCode.GDbass_9595s1Objects2.length = 0;
gdjs.BassCode.GDbass_9595s2Objects1.length = 0;
gdjs.BassCode.GDbass_9595s2Objects2.length = 0;
gdjs.BassCode.GDbass_9595s3Objects1.length = 0;
gdjs.BassCode.GDbass_9595s3Objects2.length = 0;
gdjs.BassCode.GDbass_9595s4Objects1.length = 0;
gdjs.BassCode.GDbass_9595s4Objects2.length = 0;
gdjs.BassCode.GDtbl_9595KembaliObjects1.length = 0;
gdjs.BassCode.GDtbl_9595KembaliObjects2.length = 0;

gdjs.BassCode.eventsList0(runtimeScene);
gdjs.BassCode.GDbg_9595bassObjects1.length = 0;
gdjs.BassCode.GDbg_9595bassObjects2.length = 0;
gdjs.BassCode.GDbass_9595s1Objects1.length = 0;
gdjs.BassCode.GDbass_9595s1Objects2.length = 0;
gdjs.BassCode.GDbass_9595s2Objects1.length = 0;
gdjs.BassCode.GDbass_9595s2Objects2.length = 0;
gdjs.BassCode.GDbass_9595s3Objects1.length = 0;
gdjs.BassCode.GDbass_9595s3Objects2.length = 0;
gdjs.BassCode.GDbass_9595s4Objects1.length = 0;
gdjs.BassCode.GDbass_9595s4Objects2.length = 0;
gdjs.BassCode.GDtbl_9595KembaliObjects1.length = 0;
gdjs.BassCode.GDtbl_9595KembaliObjects2.length = 0;


return;

}

gdjs['BassCode'] = gdjs.BassCode;
