var  d=[10,115, 0,0, 0,  35.3,	 0.134, 29 ];
// console.log(turn(d));


function turn1(){

  // alert(1);
  var pregnant=document.getElementById("pregnant").value; // Click on the checkbox
  var plasma=document.getElementById("plasma").value; // Click on the checkbox
  var bp=document.getElementById("BP").value; // Click on the checkbox
  var skin=document.getElementById("skin").value; // Click on the checkbox
  var insulin=document.getElementById("insulin").value; // Click on the checkbox
  var bm=document.getElementById("BM").value; // Click on the checkbox
  var dp=document.getElementById("DP").value; // Click on the checkbox
  var age=document.getElementById("age").value; // Click on the checkbox
  if (pregnant.length>0&&plasma.length>0&&bp.length>0&&skin.length>0&&insulin.length>0&&dp.length>0&&age.length>0) {

  turn(d);

  }

  else{
    alert("Empty field");
  }

}



function turn(x1) {
  var pregnant=document.getElementById("pregnant").value; // Click on the checkbox
  var plasma=document.getElementById("plasma").value; // Click on the checkbox
  var bp=document.getElementById("BP").value; // Click on the checkbox
  var skin=document.getElementById("skin").value; // Click on the checkbox
  var insulin=document.getElementById("insulin").value; // Click on the checkbox
  var bm=document.getElementById("BM").value; // Click on the checkbox
  var dp=document.getElementById("DP").value; // Click on the checkbox
  var age=document.getElementById("age").value; // Click on the checkbox

  // var v=document.getElementById("v").innerHTML // Click on the checkbox

  var a;


  // this.a=[x1[0],x1[1],x1[2],x1[3],x1[4],x1[5],x1[6],x1[7]];
  this.a=[pregnant,plasma,bp,skin,insulin,bm,dp,age];


  x1=this.a;

  console.log("starting ANN");
  var c='';
  // body...
  var x1_step1=[];


var xoffset = [0,0,0,0,0,0,0.078,21];
var gain = [0.117647058823529,0.0100502512562814,0.0163934426229508,0.0202020202020202,0.00236406619385343,0.029806259314456,0.85397096498719,0.0333333333333333];
var ymin = -1;

//
// 	// % Layer 1
var 	b1 = 		[-1.9642437014616763,-1.5823318316313573,1.2394044619817537,-0.5725232735944491,-0.19154383698222877,0.10595981346549366,-0.8072379580830249,-1.6047818262115836,-1.0050279613316457,-1.7031717560771173];
  var IW1_1 = [[0.60845242276924827,-0.45571627587642333,0.93248475642250839,-0.9051970168467055,0.93512156509023281,-0.14920521264362163,0.36815125688253181,0.43650980166075193],
              [0.15928323796030344,-0.65820226925119285,0.58172586629660206,0.50643037191238671,-0.29959505375344619,-0.53257301123868173,1.3135521499060832,-0.049824807439274511],
              [-0.69475781323057195,0.13567042124664611,0.13483949649559943,-0.36572238036606408,0.51557486151550058,0.65627866102038945,1.257370304591132,-1.1056408286708201],
              [0.34609951857231258,-0.48462332024476434,-0.39952776963550241,1.2246341318687906,-0.48977029179333964,0.60660771862053531,-0.097753118149769377,-0.8947939666792899],
              [-0.66353658383009129,1.525655692879258,-0.89750784328000011,0.04030949669189815,-0.43569140575097137,0.43217949854552939,0.22029330798971211,1.1506123131955615],
              [-1.2348974776597565,-0.75672218019743054,0.71752752525026942,0.49828281934581059,0.86816445275777321,-0.85729138520976944,0.3169656376393401,-1.1503780899767593],
              [-0.60742315423984994,0.80141778483114134,1.1250681355901326,-0.30986486981437339,0.33834747153778766,-0.33009105157972279,0.97275893249434509,-0.29153472399690439],
              [-0.33001075058816609,-0.57308130174535366,-0.76847878764145461,0.18650117546936051,0.12403830059766334,-0.83903412822513757,0.91030668231941914,0.56883392335574168],
              [-0.89114603061161402,-1.8805446917770945,-0.082381167848560463,-0.49794756276357477,-0.17846418573393324,-1.1889141061269359,-0.44538267506160434,0.93669599127714576],
              [-0.78504244934078915,-1.1555024008524473,-0.25955532422390726,0.576128933955948,-0.23338378783392566,-0.54972156695239827,-1.1333405934279552,-0.0097098713612748608]];

// 	// % Layer 2
var	b2 = -0.61790585432594469;
var	LW2_1 = [1.1512035524112383, -0.24597355411529209 ,0.86349141864263457, 0.45449292119467677, 1.1834108132494094 ,-1.2157482305832665, 0.2084583672330563 ,0.59755891063321154 ,-2.050451000621397 ,-0.38057709716071197];
//
//
var Q = size(x1,2);

//Input 1
var	xp1 = mapminmax_apply(x1,xoffset,gain,ymin);
// math.multiply(IW1_1,xp1)
  console.log(b1);
  console.log(math.multiply(IW1_1,xp1));
  var a1=math.add(b1,math.multiply(IW1_1,xp1));

  a1=tansig_apply(a1);///s

  var a2=math.add(b2,math.multiply(LW2_1,a1));

  // console.log(logsig(a2));//sigmoid
    a2=logsig(a2)*100;

    console.log(a2);
      document.getElementById("v").innerHTML = "You have a "+a2+"% probability of having diabetes";
}


  function size(a,s){
          return 1;
  }

  function tansig_apply(x){
    var array=Array(x.length).fill(0);
    for (var i = 0; i < array.length; i++) {
      e=Math.exp(2*x[i])
      array[i]=(e - 1) / (e + 1);
    }
    return array;
  }

  function logsig(x){


  return	1 / (1 + Math.exp(-x))


  }

  function mapminmax_apply(x,a,b,c){
    console.log(x);
    console.log(a);
    console.log(b);
    console.log(c);
    var y = bsxfun("-",x,a);
        y = bsxfun("*",y,b);
        y = bsxfun("+",y,-1);
    return y;
  }

  function bsxfun(type,m1,m2){
      var result = '';
      console.log(type);
      console.log(m1);
      console.log(m2);
      if(type=="-"){
        result = math.subtract(m1, m2);
      }
      else if(type=="+") {
        result = math.add(m1, m2); ;
      }


      else if(type=="*") {
        var array=Array(m1.length).fill(0);
      for (var i = 0; i < m1.length; i++) {
        array[i]=m1[i]*m2[i];
      }
      result=array;
      }
      return result;
  }


  function repmat(a,b,c){



  }
