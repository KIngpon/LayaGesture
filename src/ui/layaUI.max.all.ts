
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GestureViewUI extends View {
		public testImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"var":"testImg","skin":"comp/image.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GestureViewUI.uiView);

        }

    }
}