mustacheX=0;
mustacheY=0;
function preload(){
mustache=loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67204eec-c376-4d87-a697-2c517290cf0e/d54b8i1-ad8d405f-a5d6-42d1-953d-517f3b4532d4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3MjA0ZWVjLWMzNzYtNGQ4Ny1hNjk3LTJjNTE3MjkwY2YwZVwvZDU0YjhpMS1hZDhkNDA1Zi1hNWQ2LTQyZDEtOTUzZC01MTdmM2I0NTMyZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hCEtBgtjxAsFMLlwgDhmOhYPCM6VtSqeT3B1abL1kNo');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        mustacheX=results[0].pose.nose.x-15;
        mustacheY=results[0].pose.nose.y-15;

    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video,0,0,300,300);
image(mustache,mustacheX,mustacheY,60,60);
}

function take_snapshot(){
    save('myFilterImage.png')
} 