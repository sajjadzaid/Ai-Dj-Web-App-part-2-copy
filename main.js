leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);

}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
    
function draw(){
    image(video,0,0,600,500);
}


function play(){
    song.play()
    song.setVolume(1);
    song.rate(1);
}

function gotposes(result){
    if(result.length>0){
        console.log(result)
        leftWristX=result[0].pose.leftWrist.X
        leftWristY=result[0].pose.lefttWrist.Y
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY)

        rightWristX=result[0].pose.rightWrist.x
        rightWristY=result[0].pose.rightWrist.y
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY)


    }
}