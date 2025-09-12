scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    scene.cameraShake(4, 2000)
    mySprite2 = sprites.create(img`
        . . . . . . e . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . e e e . . . . e e e . . 
        . . . . f f f f f f f e e e . . 
        . . . f d d d d d d d f e . . . 
        . . f d 2 d d d d d 2 d f . . . 
        . . f d 2 2 d d d 2 2 d f . . . 
        e . f d d d d d d d d d f . . . 
        e e e d d 2 d d d d d d f e e . 
        . . f d d d 2 2 2 d d d f e e . 
        . . f d d d d d d d d d f . . . 
        . e f d d d d d d d d d f . . . 
        e e . f d d d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . e e . . e e e . . . 
        . . . . . . e . . . . e e . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(56 + 32, 56 + 32)
    g = 0
    tiles.setCurrentTilemap(tilemap`уровень0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = mySprite.x + stepLength * speed
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = mySprite.x - stepLength * speed
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    hp_boss = 150
    info.setScore(150)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y = mySprite.y + stepLength * speed
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y = mySprite.y - stepLength * speed
})
let mySprite2: Sprite = null
let speed = 0
let g = 0
let stepLength = 0
let mySprite: Sprite = null
let hp_boss = 0
info.changeScoreBy(40)
hp_boss = 40
tiles.setCurrentTilemap(tilemap`уровень1`)
mySprite = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
    7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
    7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
    7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
    7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
    7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
    7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
    7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
    7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
    7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
    7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
    7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
    7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
mySprite.x = mySprite.x - 16 / 2
scene.cameraFollowSprite(null)
stepLength = 16
g = 1
speed = 1
info.setLife(60)
mySprite.setPosition(56, 56)
game.onUpdateInterval(100, function () {
    if (g == 0) {
        mySprite2.setPosition(56, 56)
        if (randint(0, 2) == 0) {
            mySprite2.x += 20
        } else if (randint(0, 2) == 0) {
            mySprite2.x += -20
        } else if (randint(0, 2) == 0) {
            mySprite2.y += 20
        } else {
            mySprite2.y += -20
            tiles.setTileAt(tiles.getTileLocation(randint(0, 6), randint(0, 6)), assets.tile`myTile4`)
        }
        if (hp_boss <= 0) {
            game.gameOver(true)
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
            hp_boss += -1
            info.changeScoreBy(-1)
        }
    }
})
