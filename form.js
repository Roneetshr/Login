class Form{
 constructer(){
}
display(){
var title=createElement('h2');
title.html("Car Racing Game!");
title.position(350,0);

var input=createInput("Name");
input.position(350,160);

var button=createButton('play');
button.position(350,200);

button.mousePressed(function(){
input.hide();
button.hide();

var name=input.value();


playerCount+=1;
player.update(name);
player.updateCount(playerCount);

var greeting=createElement('h3');
greeting.html("Welcome"+ name)
greeting.position(130,160);
});
}

}