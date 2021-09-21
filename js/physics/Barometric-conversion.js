var mph_element = document.getElementById("mph");
var kph_element = document.getElementById("kph");
var knot_element = document.getElementById("knot");
var mach_element = document.getElementById("mach");
var mmhg_element = document.getElementById("mmhg");
var kpa_element = document.getElementById("kpa");
function is_valid(element,value){
    if(value < 0){
        alert("Cannot accept negative numbers!");
        element.value = "";
        return false;

    }
    else{
        return true;
    }
}

function fromMphToOther(mph){
    mph = parseFloat(mph);
    if(is_valid(mph_element,mph)){
    kph_element.value = mph/0.3048;
    knot_element.value =  14.696*(1-(6.8753*(10**-6)*(mph/0.3048)))**5.2559;
    mach_element.value = 2.03602*14.696*(1-(6.8753*(10**-6)*(mph/0.3048)))**5.2559; // knot = hg
    kpa_element.value = 6.89476*14.696*(1-(6.8753*(10**-6)*(mph/0.3048)))**5.2559;
    mmhg_element.value =51.7149*14.696*(1-(6.8753*(10**-6)*(mph/0.3048)))**5.2559;
}
}
function fromKphToOthers(kph){
    kph = parseFloat(kph);
    if(is_valid(kph_element,kph)){
    mph_element.value = kph*0.3048; // kbh = ft
    knot_element.value = 14.696*(1-(6.8753*(10**-6)*kph))**5.2559;   // knot = hg
    mach_element.value = 2.03602*14.696*(1-(6.8753*(10**-6)*kph))**5.2559; // mach = m
    kpa_element.value = 6.89476*14.696*(1-(6.8753*(10**-6)*kph))**5.2559;
    mmhg_element.value = 51.7149*14.696*(1-(6.8753*(10**-6)*kph))**5.2559;
}
}
function fromKnotToOther(knot){
    knot = parseFloat(knot);
    if(is_valid(knot_element,knot)){
    mph_element.value = 0.3048*(1-((knot/14.696)**(1/5.2559)))/(0.0000068753);
    kph_element.value = (1-((knot/14.696)**(1/5.2559)))/0.0000068753;
    mach_element.value =  knot*2.03602;
    kpa_element.value = knot*6.89476;
    mmhg_element.value = knot*51.7149;
}
}
function fromMachToOther(mach){
    mach  = parseFloat(mach);
    if(is_valid(mach_element,mach)){
    mph_element.value = 0.3048*(1-(((mach/2.03602)/14.696)**(1/5.2559)))/(0.0000068753);
    kph_element.value = (1-(((mach/2.03602)/14.696)**(1/5.2559)))/(0.0000068753);
    knot_element.value = mach/2.03602;
    kpa_element.value = mach*3.38639;
    mmhg_element.value = mach*25.4;
}
}

function fromMmhgToOther(mmhg){
    mmhg  = parseFloat(mmhg);
    if(is_valid(mmhg_element,mmhg)){
    mph_element.value = 0.3048*(1-(((mmhg*0.0193368)/14.696)**(1/5.2559)))/(0.0000068753);
    kph_element.value = (1-(((mmhg*0.0193368)/14.696)**(1/5.2559)))/(0.0000068753);
    knot_element.value = mmhg*0.0193368;
    kpa_element.value = mmhg*0.133322;
    mach_element.value = mmhg*0.0393701;
}
}
function fromKpaToOther(kpa){
    kpa  = parseFloat(kpa);
    if(is_valid(kpa_element,kpa)){
    mph_element.value = 0.3048*(1-(((kpa*0.145038)/14.696)**(1/5.2559)))/(0.0000068753);
    kph_element.value = (1-(((kpa*0.145038)/14.696)**(1/5.2559)))/(0.0000068753);
    knot_element.value = kpa*0.145038;
    mach_element.value = kpa*0.2953;
    mmhg_element.value = kpa*7.50062;
}
}
