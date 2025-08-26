gdjs.DemoCode = {};
gdjs.DemoCode.localVariables = [];
gdjs.DemoCode.GDbg_9595demoObjects1= [];
gdjs.DemoCode.GDbg_9595demoObjects2= [];
gdjs.DemoCode.GDbtn_9595backObjects1= [];
gdjs.DemoCode.GDbtn_9595backObjects2= [];
gdjs.DemoCode.GDTextDemoObjects1= [];
gdjs.DemoCode.GDTextDemoObjects2= [];
gdjs.DemoCode.GDTextChannelObjects1= [];
gdjs.DemoCode.GDTextChannelObjects2= [];


gdjs.DemoCode.mapOfGDgdjs_9546DemoCode_9546GDbtn_95959595backObjects1Objects = Hashtable.newFrom({"btn_back": gdjs.DemoCode.GDbtn_9595backObjects1});
gdjs.DemoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_back"), gdjs.DemoCode.GDbtn_9595backObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DemoCode.GDbtn_9595backObjects1.length;i<l;++i) {
    if ( gdjs.DemoCode.GDbtn_9595backObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.DemoCode.GDbtn_9595backObjects1[k] = gdjs.DemoCode.GDbtn_9595backObjects1[i];
        ++k;
    }
}
gdjs.DemoCode.GDbtn_9595backObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DemoCode.mapOfGDgdjs_9546DemoCode_9546GDbtn_95959595backObjects1Objects, runtimeScene, true, false);
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

gdjs.DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DemoCode.GDbg_9595demoObjects1.length = 0;
gdjs.DemoCode.GDbg_9595demoObjects2.length = 0;
gdjs.DemoCode.GDbtn_9595backObjects1.length = 0;
gdjs.DemoCode.GDbtn_9595backObjects2.length = 0;
gdjs.DemoCode.GDTextDemoObjects1.length = 0;
gdjs.DemoCode.GDTextDemoObjects2.length = 0;
gdjs.DemoCode.GDTextChannelObjects1.length = 0;
gdjs.DemoCode.GDTextChannelObjects2.length = 0;

gdjs.DemoCode.eventsList0(runtimeScene);
gdjs.DemoCode.GDbg_9595demoObjects1.length = 0;
gdjs.DemoCode.GDbg_9595demoObjects2.length = 0;
gdjs.DemoCode.GDbtn_9595backObjects1.length = 0;
gdjs.DemoCode.GDbtn_9595backObjects2.length = 0;
gdjs.DemoCode.GDTextDemoObjects1.length = 0;
gdjs.DemoCode.GDTextDemoObjects2.length = 0;
gdjs.DemoCode.GDTextChannelObjects1.length = 0;
gdjs.DemoCode.GDTextChannelObjects2.length = 0;


return;

}

gdjs['DemoCode'] = gdjs.DemoCode;
