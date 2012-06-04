#pragma strict

import System.Runtime.InteropServices;

#if UNITY_IPHONE && !UNITY_EDITOR

@DllImportAttribute("__Internal") static private function TextViewPluginInitialize() {}
@DllImportAttribute("__Internal") static private function TextViewPluginSetPosition(ox : int, oy : int, width : int, height: int) {}
@DllImportAttribute("__Internal") static private function TextViewPluginSetText(text : String) {}
@DllImportAttribute("__Internal") static private function TextViewPluginSetFontSize(size : float) {}
@DllImportAttribute("__Internal") static private function TextViewPluginSetTextColor(r : float, g : float, b : float, a : float) {}
@DllImportAttribute("__Internal") static private function TextViewPluginSetBackgroundColor(r : float, g : float, b : float, a : float) {}
@DllImportAttribute("__Internal") static private function TextViewPluginShow(animate : boolean) {}
@DllImportAttribute("__Internal") static private function TextViewPluginHide(animate : boolean) {}

#else

static private function TextViewPluginInitialize() {}
static private function TextViewPluginSetPosition(ox : int, oy : int, width : int, height: int) {}
static private function TextViewPluginSetText(text : String) {}
static private function TextViewPluginSetFontSize(size : float) {}
static private function TextViewPluginSetTextColor(r : float, g : float, b : float, a : float) {}
static private function TextViewPluginSetBackgroundColor(r : float, g : float, b : float, a : float) {}
static private function TextViewPluginShow(animate : boolean) {}
static private function TextViewPluginHide(animate : boolean) {}

#endif

static private var textIsOn = false;

function Start () {
    Application.targetFrameRate = 60;
    TextViewPluginInitialize();
    TextViewPluginSetPosition(8, 8, Screen.width - 16, Screen.height - 200);
    TextViewPluginSetFontSize(18);
    TextViewPluginSetTextColor(1, 1, 1, 1);
    TextViewPluginSetBackgroundColor(0.2, 0.2, 0.2, 0.8);
    TextViewPluginSetText("クリエイティブ・コモンズ（Creative Commons、以下「CC」）とは、ウェブ上で行われているプロジェクト、またそれを実施する非営利団体で、法的手段を利用して出版物の創造、流通、検索の便宜をはかるものである。利用される法的手段にはパブリックドメインやオープンコンテントによるライセンスがある。また、クリエイティブ・コモンズ・ライセンスというライセンスも定義している。\n크리에이티브 커먼즈(Creative Commons, CC)는 저작권의 부분적 공유를 목적으로 2001년에 만들어진 비영리 기관이다. 이 기관에서 2002년 12월 16일에 만든 저작권 라이선스인 크리에이티브 커먼즈 라이선스가 있다.\n知识共享（Creative Commons，簡稱CC）是一個非營利組織，也是該組織所提供一系列彈性著作權授權方式的名稱。知识共享組織的主要宗旨是使得著作物能更廣為流通與改作，作為其他人據以創作及共享的基礎，並以所提供的授權方式確保上述理念。\nCreative Commons (CC) is a non-profit organization headquartered in Mountain View, California, United States devoted to expanding the range of creative works available for others to build upon legally and to share.[1] The organization has released several copyright-licenses known as Creative Commons licenses free of charge to the public. These licenses allow creators to communicate which rights they reserve, and which rights they waive for the benefit of recipients or other creators. An easy to understand one-page explanation of rights, with associated visual symbols, explains the specifics of each Creative Commons license. Creative Commons licenses do not replace copyright, but are based upon it. They replace individual negotiations for specific rights between copyright owner (licensor) and licensee, which are necessary under an \"all rights reserved\" copyright management with a \"some rights reserved\" management employing standardized licenses for re-use cases where no commercial compensation is sought by the copyright owner. The result is an agile, low overhead and cost copyright management regime, profiting both copyright owners and licensees. Wikipedia is using one of its licenses.");
}

function Update () {
    if (Input.GetMouseButtonDown(0)) {
        if (textIsOn) {
            TextViewPluginHide(true);
        } else {
            TextViewPluginShow(true);
        }
        textIsOn = !textIsOn;
    }
}
