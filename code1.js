gdjs.TentangBundenganCode = {};
gdjs.TentangBundenganCode.localVariables = [];
gdjs.TentangBundenganCode.GDscene_9595TentangObjects1= [];
gdjs.TentangBundenganCode.GDscene_9595TentangObjects2= [];
gdjs.TentangBundenganCode.GDtbl_9595XObjects1= [];
gdjs.TentangBundenganCode.GDtbl_9595XObjects2= [];
gdjs.TentangBundenganCode.GDbgObjects1= [];
gdjs.TentangBundenganCode.GDbgObjects2= [];


gdjs.TentangBundenganCode.mapOfGDgdjs_9546TentangBundenganCode_9546GDtbl_95959595XObjects1Objects = Hashtable.newFrom({"tbl_X": gdjs.TentangBundenganCode.GDtbl_9595XObjects1});
gdjs.TentangBundenganCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tbl_X"), gdjs.TentangBundenganCode.GDtbl_9595XObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TentangBundenganCode.GDtbl_9595XObjects1.length;i<l;++i) {
    if ( gdjs.TentangBundenganCode.GDtbl_9595XObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TentangBundenganCode.GDtbl_9595XObjects1[k] = gdjs.TentangBundenganCode.GDtbl_9595XObjects1[i];
        ++k;
    }
}
gdjs.TentangBundenganCode.GDtbl_9595XObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TentangBundenganCode.mapOfGDgdjs_9546TentangBundenganCode_9546GDtbl_95959595XObjects1Objects, runtimeScene, true, false);
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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TentangBundenganCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TentangBundenganCode.GDscene_9595TentangObjects1.length = 0;
gdjs.TentangBundenganCode.GDscene_9595TentangObjects2.length = 0;
gdjs.TentangBundenganCode.GDtbl_9595XObjects1.length = 0;
gdjs.TentangBundenganCode.GDtbl_9595XObjects2.length = 0;
gdjs.TentangBundenganCode.GDbgObjects1.length = 0;
gdjs.TentangBundenganCode.GDbgObjects2.length = 0;

gdjs.TentangBundenganCode.eventsList0(runtimeScene);
gdjs.TentangBundenganCode.GDscene_9595TentangObjects1.length = 0;
gdjs.TentangBundenganCode.GDscene_9595TentangObjects2.length = 0;
gdjs.TentangBundenganCode.GDtbl_9595XObjects1.length = 0;
gdjs.TentangBundenganCode.GDtbl_9595XObjects2.length = 0;
gdjs.TentangBundenganCode.GDbgObjects1.length = 0;
gdjs.TentangBundenganCode.GDbgObjects2.length = 0;


return;

}

gdjs['TentangBundenganCode'] = gdjs.TentangBundenganCode;
