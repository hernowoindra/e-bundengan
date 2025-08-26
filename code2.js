gdjs.TeamCode = {};
gdjs.TeamCode.localVariables = [];
gdjs.TeamCode.GDbg_9595teamObjects1= [];
gdjs.TeamCode.GDbg_9595teamObjects2= [];
gdjs.TeamCode.GDtbl_9595KembaliObjects1= [];
gdjs.TeamCode.GDtbl_9595KembaliObjects2= [];


gdjs.TeamCode.mapOfGDgdjs_9546TeamCode_9546GDtbl_95959595KembaliObjects1Objects = Hashtable.newFrom({"tbl_Kembali": gdjs.TeamCode.GDtbl_9595KembaliObjects1});
gdjs.TeamCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tbl_Kembali"), gdjs.TeamCode.GDtbl_9595KembaliObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TeamCode.GDtbl_9595KembaliObjects1.length;i<l;++i) {
    if ( gdjs.TeamCode.GDtbl_9595KembaliObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TeamCode.GDtbl_9595KembaliObjects1[k] = gdjs.TeamCode.GDtbl_9595KembaliObjects1[i];
        ++k;
    }
}
gdjs.TeamCode.GDtbl_9595KembaliObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TeamCode.mapOfGDgdjs_9546TeamCode_9546GDtbl_95959595KembaliObjects1Objects, runtimeScene, true, false);
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

gdjs.TeamCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TeamCode.GDbg_9595teamObjects1.length = 0;
gdjs.TeamCode.GDbg_9595teamObjects2.length = 0;
gdjs.TeamCode.GDtbl_9595KembaliObjects1.length = 0;
gdjs.TeamCode.GDtbl_9595KembaliObjects2.length = 0;

gdjs.TeamCode.eventsList0(runtimeScene);
gdjs.TeamCode.GDbg_9595teamObjects1.length = 0;
gdjs.TeamCode.GDbg_9595teamObjects2.length = 0;
gdjs.TeamCode.GDtbl_9595KembaliObjects1.length = 0;
gdjs.TeamCode.GDtbl_9595KembaliObjects2.length = 0;


return;

}

gdjs['TeamCode'] = gdjs.TeamCode;
