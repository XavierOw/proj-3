img=""
status=""
objects =[];
function preload()
{
    img=loadImage("f.jpg")
}

function draw()
{
    image(img, 0, 0, 640, 420)
    if(status != "")
    {
        for(i=0; i < objects.length; i++)
        {
        document.getElementById("status").innerHTML = "Status : object found"
        fill("blue")
        percent=floor(objects[i].confidence*100);
        text(objects[i].label + ""+ percent+"%", objects[i].x+15, objects[i].y+15)
        noFill();
        stroke("blue")
        rect(objects[i].x+15,objects[i].y,objects[i].width,objects[i].height);
    
        
        }
    }
    /*fill("blue")
    text(" This is a dog", 45, 75)
    noFill();
    stroke("blue")
    rect(30,60,450,350);

    fill("blue")
    text("Cat", 320, 120)
    noFill()
    stroke("blue")
    rect(300, 90, 270,320);*/
}

function modelLoaded()
{
console.log("modalLoaded");
status=true;
objectDetector.detect(img,gotResult)

}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="status = Detecting Objects"
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results)
    objects=results;
}
function back()
{
    window.location = "index.html";
}
