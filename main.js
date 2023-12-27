song=""
song1=""
song2=""
leftWristX="0"
leftWristY="0"
scoreLeftWrist="0"
rightWristX="0"
rightWristY="0"
Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
    song1_variable.isPlaying()
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
{
circle(leftWristX, leftWristY, 20);
song2_variable.stop(true)
if(song1==false)
{
song1_variable.isPlaying(true)
document.getElementById("song_name").innerHTML="Playing Harry Potter Song"
Harry_potter_theme_song.play()
}
}
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY);
    }
    }

