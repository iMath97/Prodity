# Prodity
Official Prodity repo

## Colors
```scss
// White
$colorWhite: #ffffff;
$colorWhiteTrans: #ffffff05;
$colorWhiteSmoke: #f5f5f5;
$colorBrokenWhite: #f6f5f3;
// Grey
$colorLightGrey: #d3d3d3;
$colorSilver: #c0c0c0;
$colorGrey: #808080;
$colorDarkGrey: #404040;
// Black
$colorLightBlack: #303030;
$colorBlack: #191919;
$colorDarkBlack: #181818;
$colorBlackLightTrans: #18181860;
$colorBlackTrans: #18181810;
// Red
$colorDarkRed: #880000;
$colorRed: #d80000;
$colorLightRed: #ff0000;
$colorDarkRedLightTrans: #88000080;
$colorDarkRedTrans: #88000070;
$colorRedLightTrans: #b8000080;
$colorRedTrans: #b8000080;
// additional colors
$colorYellow: burlywood;
$colorBlue: lightskyblue;
$colorGreen: yellowgreen;
```
---
## Fonts
```scss
<link href="https://fonts.googleapis.com/css?family=Alice|Della+Respira|Junge|Kalam|Quicksand|Srisakdi&display=swap" 
$fontAlice: 'Alice';
$fontQuicksand: 'Quicksand';
$fontJunge: 'Junge';
$fontSrisakdi: 'Srisakdi', cursive;
$fontDella: 'Della Respira';
$fontKalam: 'Kalam';
```
---
## Mixins / Extends
```scss
/*
    Mixins
*//**/
@mixin grid($min, $max, $gap){
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($min, $max));
    justify-items: center;
    justify-content: center;
    gap: $gap;
}
/*
    Extends
*//**/
// align-items center
%flexCenter{
    display: flex;
    justify-content: center;
    align-items: center;
}
%flexJcBetween{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
%flexJcAround{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
// align-items start
%flexJcAroundAiStart{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
%flexJcStart{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
%flexJcCenterAiStart{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
%flexJcBetweenAiStart{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
```
