var basket, basketimage, Background, backgroundimage;
var redballoong, greenballoong, yellowballoong, blueballoong;

function preload()
{
    backgroundimage=loadImage('background.jpg')
    basketimage=loadImage('kart.png') 
    redballoonimage=loadImage('redBalloon.png')
    greenballoonimage=loadImage('greenBalloon.png')
    blueballoonimage=loadImage('blueBalloon.png')
    yellowballoonimage=loadImage('yellowBalloon.png')
}

function setup()
{
    createCanvas(windowWidth, windowHeight)  
    Background=createSprite(windowWidth/2, windowHeight/2)
    Background.addImage(backgroundimage)
    Background.scale=2.9

    basket=createSprite(600, 600, 0, 0)
    basket.addImage(basketimage)

    redballoong = new Group
    greenballoong = new Group
    yellowballoong = new Group
    blueballoong = new Group
}

function draw()
{
    background("red")

    if(keyDown("RIGHT_ARROW"))
    {
        basket.x=basket.x+2
    }

    if(keyDown("LEFT_ARROW"))
    {
        basket.x=basket.x-2
    }
    var r=Math.round(random(1, 4))

    if(frameCount%60===0)
    {
        if(r===1)
        {
            redballoon()
        }
        else if(r===2)
        {
            greenballoon()
        }
        else if(r===3)
        {
            yellowballoon()
        }
        else
        {
            blueballoon()
        }
    }

    drawSprites()
}

function redballoon()
{
    var redb = createSprite(Math.round(random(10, 1000)), Math.round(random(10, 1000)), 5, 5)
    redb.addImage(redballoonimage)
    redb.scale=0.5
    redb.velocityY=2
    redb.lifetime=200
    redballoong.add(redb)
}

function greenballoon()
{
    var greenb = createSprite(Math.round(random(10, 1000)), Math.round(random(10, 1000)), 5, 5)
    greenb.addImage(greenballoonimage)
    greenb.scale=0.2
    greenb.velocityY=2
    greenb.lifetime=200
    greenballoong.add(greenb)
}

function yellowballoon()
{
    var yellowb = createSprite(Math.round(random(10, 1000)), Math.round(random(10, 1000)), 5, 5)
    yellowb.addImage(yellowballoonimage)
    yellowb.scale=0.2
    yellowb.velocityY=2
    yellowb.lifetime=200
    yellowballoong.add(yellowb)
}

function blueballoon()
{
    var blueb = createSprite(Math.round(random(10, 1000)), Math.round(random(10, 1000)), 5, 5)
    blueb.addImage(blueballoonimage)
    blueb.scale=0.2
    blueb.velocityY=2
    blueb.lifetime=200
    blueballoong.add(blueb)
}