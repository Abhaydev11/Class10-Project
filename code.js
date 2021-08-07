var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia

var Sofia =createSprite(20,50,18,18);

//creating the maze walls (wall1 - wall2)
 
  var wall1 =createSprite(10,70,100,20);
  var wall2 =createSprite(100,50,20,100);
  var wall3 =createSprite(50, 80,20,100);
  var wall4 =createSprite(100, 120,20,50);
  var wall5 =createSprite(94, 180,100,20);
  var wall6 =createSprite(50,204,20,100);
  var wall7 =createSprite(81,249,100,20);
  var wall8 =createSprite(215, 288,239,20);
  var wall9 =createSprite(130,139,80,20);
  var wall10=createSprite(139, 213,20,90);
  var wall11=createSprite(216, 187,20,190);
  var wall12=createSprite(176, 187,20,115);
  var wall13=createSprite(218, 97,150,20);
  var wall14=createSprite(223, 47,125,20);
  var wall15=createSprite(281, 180,20,149);
  var wall16=createSprite(323,99,20,295);
  var wall17=createSprite(331, 246,50,20);
  var wall18=createSprite(97, 287,115,20);
  var wall19=createSprite(0, 323,390,20);
  var wall20=createSprite(195, 360,20,95);
  var wall21=createSprite(230,233,20,290);
  var wall22=createSprite(365,150,20,300);
  var wall23=createSprite(297,371,155,20);
  var wall24=createSprite(331,323,20,89);
  var wall25=createSprite(387,307,65,20);
  var wall26=createSprite(358,337,55,10);

//create cup
var cup =createSprite(386,374,55,55);

cup.shapeColor="gold";

Sofia.shapeColor="red";

wall1.shapeColor="brown";
wall2.shapeColor="brown";
wall3.shapeColor="brown";
wall4.shapeColor="brown";
wall5.shapeColor="brown";                                
wall6.shapeColor="brown";
wall7.shapeColor="brown";
wall8.shapeColor="brown";
wall9.shapeColor="brown";
wall10.shapeColor="brown";
wall11.shapeColor="brown";
wall12.shapeColor="brown";
wall13.shapeColor="brown";
wall14.shapeColor="brown";
wall15.shapeColor="brown";
wall16.shapeColor="brown";
wall17.shapeColor="brown";
wall18.shapeColor="brown";
wall19.shapeColor="brown";
wall20.shapeColor="brown";
wall21.shapeColor="brown";
wall22.shapeColor="brown";
wall23.shapeColor="brown";
wall24.shapeColor="brown";
wall25.shapeColor="brown";
wall26.shapeColor="brown";

function draw() {
 //setting the background color to pink

 edges=createEdgeSprites();
  
  Sofia.bounceOff(edges);
  Sofia.bounce(wall1);
  Sofia.bounce(wall2);
  Sofia.bounce(wall3);
  Sofia.bounce(wall4);
  Sofia.bounce(wall5);
  Sofia.bounce(wall6);
  Sofia.bounce(wall7);
  Sofia.bounce(wall8);
  Sofia.bounce(wall9);
  Sofia.bounce(wall10);
  Sofia.bounce(wall11);
  Sofia.bounce(wall12);
  Sofia.bounce(wall13);
  Sofia.bounce(wall14);
  Sofia.bounce(wall15);
  Sofia.bounce(wall16);
  Sofia.bounce(wall17);
  Sofia.bounce(wall18);
  Sofia.bounce(wall19);
  Sofia.bounce(wall20);
  Sofia.bounce(wall21);
  Sofia.bounce(wall22);
  Sofia.bounce(wall23);
  Sofia.bounce(wall24);
  Sofia.bounce(wall25);
  Sofia.bounce(wall26);
  
  Sofia.collide(cup);
  
  background("pink");
  if (keyDown(UP_ARROW)) {
  Sofia.y=Sofia.y-10;  
  }
  if (keyDown(DOWN_ARROW)) {
   Sofia.y=Sofia.y+10;
  }
  if (keyDown(RIGHT_ARROW)) {
  Sofia.x=Sofia.x+10;  
  }
  if (keyDown(LEFT_ARROW)) {
  Sofia.x=Sofia.x-10;  
  }
 
   if ( Sofia.isTouching(cup))  
{
  textSize(45);
  stroke("green");
  fill("red")
  text("You Won", 132,31);
  }
  
drawSprites();}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
