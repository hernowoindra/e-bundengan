gdjs.MelodyCode = {};
gdjs.MelodyCode.localVariables = [];
gdjs.MelodyCode.GDbg_9595meloObjects1= [];
gdjs.MelodyCode.GDbg_9595meloObjects2= [];
gdjs.MelodyCode.GDmelody_9595s1Objects1= [];
gdjs.MelodyCode.GDmelody_9595s1Objects2= [];
gdjs.MelodyCode.GDmelody_9595s2Objects1= [];
gdjs.MelodyCode.GDmelody_9595s2Objects2= [];
gdjs.MelodyCode.GDmelody_9595s3Objects1= [];
gdjs.MelodyCode.GDmelody_9595s3Objects2= [];
gdjs.MelodyCode.GDtbl_9595backObjects1= [];
gdjs.MelodyCode.GDtbl_9595backObjects2= [];


gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDtbl_95959595backObjects1Objects = Hashtable.newFrom({"tbl_back": gdjs.MelodyCode.GDtbl_9595backObjects1});
gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDmelody_95959595s1Objects1Objects = Hashtable.newFrom({"melody_s1": gdjs.MelodyCode.GDmelody_9595s1Objects1});
gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDmelody_95959595s2Objects1Objects = Hashtable.newFrom({"melody_s2": gdjs.MelodyCode.GDmelody_9595s2Objects1});
gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDmelody_95959595s3Objects1Objects = Hashtable.newFrom({"melody_s3": gdjs.MelodyCode.GDmelody_9595s3Objects1});
gdjs.MelodyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tbl_back"), gdjs.MelodyCode.GDtbl_9595backObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MelodyCode.GDtbl_9595backObjects1.length;i<l;++i) {
    if ( gdjs.MelodyCode.GDtbl_9595backObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MelodyCode.GDtbl_9595backObjects1[k] = gdjs.MelodyCode.GDtbl_9595backObjects1[i];
        ++k;
    }
}
gdjs.MelodyCode.GDtbl_9595backObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDtbl_95959595backObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("melody_s1"), gdjs.MelodyCode.GDmelody_9595s1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MelodyCode.GDmelody_9595s1Objects1.length;i<l;++i) {
    if ( gdjs.MelodyCode.GDmelody_9595s1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MelodyCode.GDmelody_9595s1Objects1[k] = gdjs.MelodyCode.GDmelody_9595s1Objects1[i];
        ++k;
    }
}
gdjs.MelodyCode.GDmelody_9595s1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDmelody_95959595s1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10597468);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MelodyCode.GDmelody_9595s1Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Melody_s1_Mi(d).mp3", 5, false, 100, 1);
}{for(var i = 0, len = gdjs.MelodyCode.GDmelody_9595s1Objects1.length ;i < len;++i) {
    gdjs.MelodyCode.GDmelody_9595s1Objects1[i].setAnimationName("getar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("melody_s2"), gdjs.MelodyCode.GDmelody_9595s2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MelodyCode.GDmelody_9595s2Objects1.length;i<l;++i) {
    if ( gdjs.MelodyCode.GDmelody_9595s2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MelodyCode.GDmelody_9595s2Objects1[k] = gdjs.MelodyCode.GDmelody_9595s2Objects1[i];
        ++k;
    }
}
gdjs.MelodyCode.GDmelody_9595s2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDmelody_95959595s2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10599092);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MelodyCode.GDmelody_9595s2Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Melody_s2_Sol(f).mp3", 6, false, 100, 1);
}{for(var i = 0, len = gdjs.MelodyCode.GDmelody_9595s2Objects1.length ;i < len;++i) {
    gdjs.MelodyCode.GDmelody_9595s2Objects1[i].setAnimationName("getar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("melody_s3"), gdjs.MelodyCode.GDmelody_9595s3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MelodyCode.GDmelody_9595s3Objects1.length;i<l;++i) {
    if ( gdjs.MelodyCode.GDmelody_9595s3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MelodyCode.GDmelody_9595s3Objects1[k] = gdjs.MelodyCode.GDmelody_9595s3Objects1[i];
        ++k;
    }
}
gdjs.MelodyCode.GDmelody_9595s3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MelodyCode.mapOfGDgdjs_9546MelodyCode_9546GDmelody_95959595s3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10600740);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MelodyCode.GDmelody_9595s3Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Melody_s3_Do(a_kres).mp3", 7, false, 100, 1);
}{for(var i = 0, len = gdjs.MelodyCode.GDmelody_9595s3Objects1.length ;i < len;++i) {
    gdjs.MelodyCode.GDmelody_9595s3Objects1[i].setAnimationName("getar");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("melody_s1"), gdjs.MelodyCode.GDmelody_9595s1Objects1);
gdjs.copyArray(runtimeScene.getObjects("melody_s2"), gdjs.MelodyCode.GDmelody_9595s2Objects1);
gdjs.copyArray(runtimeScene.getObjects("melody_s3"), gdjs.MelodyCode.GDmelody_9595s3Objects1);
{for(var i = 0, len = gdjs.MelodyCode.GDmelody_9595s1Objects1.length ;i < len;++i) {
    gdjs.MelodyCode.GDmelody_9595s1Objects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.MelodyCode.GDmelody_9595s2Objects1.length ;i < len;++i) {
    gdjs.MelodyCode.GDmelody_9595s2Objects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.MelodyCode.GDmelody_9595s3Objects1.length ;i < len;++i) {
    gdjs.MelodyCode.GDmelody_9595s3Objects1[i].setAnimationName("idle");
}
}}

}


};

gdjs.MelodyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MelodyCode.GDbg_9595meloObjects1.length = 0;
gdjs.MelodyCode.GDbg_9595meloObjects2.length = 0;
gdjs.MelodyCode.GDmelody_9595s1Objects1.length = 0;
gdjs.MelodyCode.GDmelody_9595s1Objects2.length = 0;
gdjs.MelodyCode.GDmelody_9595s2Objects1.length = 0;
gdjs.MelodyCode.GDmelody_9595s2Objects2.length = 0;
gdjs.MelodyCode.GDmelody_9595s3Objects1.length = 0;
gdjs.MelodyCode.GDmelody_9595s3Objects2.length = 0;
gdjs.MelodyCode.GDtbl_9595backObjects1.length = 0;
gdjs.MelodyCode.GDtbl_9595backObjects2.length = 0;

gdjs.MelodyCode.eventsList0(runtimeScene);
gdjs.MelodyCode.GDbg_9595meloObjects1.length = 0;
gdjs.MelodyCode.GDbg_9595meloObjects2.length = 0;
gdjs.MelodyCode.GDmelody_9595s1Objects1.length = 0;
gdjs.MelodyCode.GDmelody_9595s1Objects2.length = 0;
gdjs.MelodyCode.GDmelody_9595s2Objects1.length = 0;
gdjs.MelodyCode.GDmelody_9595s2Objects2.length = 0;
gdjs.MelodyCode.GDmelody_9595s3Objects1.length = 0;
gdjs.MelodyCode.GDmelody_9595s3Objects2.length = 0;
gdjs.MelodyCode.GDtbl_9595backObjects1.length = 0;
gdjs.MelodyCode.GDtbl_9595backObjects2.length = 0;


return;

}

gdjs['MelodyCode'] = gdjs.MelodyCode;
