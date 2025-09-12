scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    scene.cameraShake(4, 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = mySprite.x + stepLength * speed
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = mySprite.x - stepLength * speed
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y = mySprite.y + stepLength * speed
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y = mySprite.y - stepLength * speed
})
let speed = 0
let stepLength = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`уровень1`)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
mySprite.x = mySprite.x - 16 / 2
scene.cameraFollowSprite(null)
stepLength = 16
speed = 1
mySprite.setPosition(56, 56)