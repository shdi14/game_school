scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`уровень0`)
    if (hp_boss == 5) {
        info.setScore(5)
    } else {
        info.setScore(20)
    }
    g = 0
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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    hp_boss = 5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (armor == 1) {
        info.changeLifeBy(50)
        if (power2 == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 e e e e 9 8 6 7 9 7 
                7 9 7 6 8 e d d d d e 8 6 7 9 7 
                7 9 7 6 8 e d d d d e 8 6 7 9 7 
                7 9 7 6 8 e d d d d e 8 6 7 9 7 
                7 9 7 6 8 9 e d d e 9 8 6 7 9 7 
                7 9 7 6 8 9 9 e e 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 e e f e 9 8 6 7 9 7 
                7 9 7 6 8 e d f d d e 8 6 7 9 7 
                7 9 7 6 8 e d f d d e 8 6 7 9 7 
                7 9 7 6 8 e d f d d e 8 6 7 9 7 
                7 9 7 6 8 9 e d f e 9 8 6 7 9 7 
                7 9 7 6 8 9 9 e f 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 e 9 9 e 9 8 6 7 9 7 
                7 9 7 6 8 e d 9 9 d e 8 6 7 9 7 
                7 9 7 6 8 e d 9 d d e 8 6 7 9 7 
                7 9 7 6 8 e d 9 d d e 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 e 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `],
            500,
            false
            )
        }
        animation.runImageAnimation(
        mySprite,
        [img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e e e e 9 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 9 e d d e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 e e 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e e f e 9 8 9 7 9 7 
            7 9 7 9 8 e d f d d e 8 9 7 9 7 
            7 9 7 9 8 e d f d d e 8 9 7 9 7 
            7 9 7 9 8 e d f d d e 8 9 7 9 7 
            7 9 7 9 8 9 e d f e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 e f 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e 9 9 e 9 8 9 7 9 7 
            7 9 7 9 8 e d 9 9 d e 8 9 7 9 7 
            7 9 7 9 8 e d 9 d d e 8 9 7 9 7 
            7 9 7 9 8 e d 9 d d e 8 9 7 9 7 
            7 9 7 9 8 9 9 9 9 e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
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
            `],
        500,
        false
        )
        armor = 0
    } else {
        info.changeLifeBy(-1)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (power2 == 1) {
        power2 = 0
        animation.runImageAnimation(
        mySprite,
        [img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 f 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 f f 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 f f 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 f f 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 9 f 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 9 9 f 9 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 f f f f 9 8 9 7 9 7 
            7 9 7 9 8 f f 9 9 9 f 8 9 7 9 7 
            7 9 7 9 8 f f 9 9 9 f 8 9 7 9 7 
            7 9 7 9 8 f f f f f f 8 9 7 9 7 
            7 9 7 9 8 9 f f f f 9 8 9 7 9 7 
            7 9 7 9 8 9 9 f f 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 f f f f 9 8 9 7 9 7 
            7 9 7 9 8 f f f f f f 8 9 7 9 7 
            7 9 7 9 8 f f f f f f 8 9 7 9 7 
            7 9 7 9 8 f f f f f f 8 9 7 9 7 
            7 9 7 9 8 9 f f f f 9 8 9 7 9 7 
            7 9 7 9 8 9 9 f f 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e e e e 9 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 9 e d d e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 e e 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `],
        500,
        false
        )
        armor = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = mySprite.x + stepLength * speed
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = mySprite.x - stepLength * speed
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (power2 == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . 8 8 6 6 8 8 . . . . . 
            . . . 8 8 6 6 9 9 6 6 8 8 . . . 
            . 8 8 6 6 9 9 9 9 9 9 6 6 8 8 . 
            8 6 6 9 9 9 9 9 9 9 9 9 9 6 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 6 6 8 
            . 8 8 6 6 9 9 9 9 9 9 6 6 8 8 . 
            . . . 8 8 6 6 9 9 6 6 8 8 . . . 
            . . . . . 8 8 6 6 8 8 . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        power2 = 0
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `],
        100,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    hp_boss = 20
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y = mySprite.y + stepLength * speed
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y = mySprite.y - stepLength * speed
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite2,
    [img`
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
        `,img`
        . . . . . . e . . . . . . . . . 
        . . . . . e 6 6 6 6 6 . . . . . 
        . . . . e 6 6 6 6 . . 6 6 6 . . 
        . . . . f 6 6 6 f f f e e e 6 . 
        . . . 6 6 6 6 6 d 6 d f e . 6 6 
        8 8 f 6 6 6 6 6 6 6 2 d f . . 6 
        8 8 8 8 6 8 6 6 9 9 9 9 9 9 9 9 
        8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        8 8 8 8 6 6 9 9 9 9 9 9 9 9 9 9 
        8 8 8 8 d 6 6 6 2 d d 8 8 6 6 6 
        8 8 f d d 6 6 6 6 d d d 6 6 . 6 
        . e f d d 6 d d 6 6 6 6 6 6 . 6 
        e e . f d d 6 d d 6 6 6 . 6 . 6 
        . . . . f f f 6 f f 6 6 . 6 . 6 
        . . . . . . e e 6 . e e 6 6 6 . 
        . . . . . . e . . 6 6 6 6 . . . 
        `,img`
        . . . . . . e . . . . . . . . . 
        . . . . . e 6 6 6 6 6 . 6 6 . . 
        . . . . 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 e 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        8 6 6 6 6 6 6 6 6 6 6 6 f . . 6 
        9 6 6 9 6 9 9 9 6 6 6 6 9 9 9 9 
        9 6 9 9 6 9 9 9 9 9 9 6 9 9 9 9 
        9 6 9 9 6 6 6 6 6 6 9 6 6 9 9 9 
        9 6 8 8 6 6 6 6 2 6 6 8 6 6 6 6 
        8 6 f d 6 6 6 6 6 d d d 6 6 . 6 
        . 6 f d 6 6 d d 6 6 6 6 6 6 . 6 
        e 6 . f 6 d 6 d d 6 6 6 6 6 . 6 
        . 6 . . 6 f f 6 f f 6 6 6 6 . 6 
        6 . . . . 6 e e 6 . 6 6 6 6 6 . 
        . 6 6 . . 6 6 6 6 6 6 6 6 . . . 
        `,img`
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . 8 8 6 6 6 6 6 8 8 8 . . 
        . . 9 9 9 9 9 9 9 9 9 9 6 8 8 . 
        . 9 6 8 9 9 9 8 9 8 9 8 9 8 8 . 
        9 6 6 8 9 6 9 9 9 9 8 9 9 9 9 9 
        9 6 6 9 8 9 9 9 9 9 9 9 9 9 8 9 
        9 8 8 9 9 9 9 9 9 8 9 9 9 9 9 9 
        9 8 8 9 9 9 9 8 8 9 8 9 8 9 9 9 
        9 6 9 9 9 9 8 8 6 9 8 9 8 9 9 9 
        9 9 9 9 9 9 8 8 9 9 8 9 9 9 9 8 
        9 6 9 9 9 9 9 9 9 9 9 8 6 9 9 8 
        9 6 f 9 9 9 9 8 8 9 9 9 9 9 9 6 
        e 9 9 9 9 9 9 9 9 9 9 9 9 9 8 6 
        . 6 9 9 9 f 9 9 9 9 9 9 6 6 . 6 
        6 . . . 9 9 9 9 9 9 6 6 6 6 6 . 
        . 6 6 . . 9 9 9 9 6 6 6 6 . . . 
        `,img`
        . . . . . . e . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . e e e . . . . e e e . . 
        . . . . f f f f f f f e e e . . 
        . . . f d d d d d d d f e . . . 
        . . f d d 2 d d d 2 d d f . . . 
        . . f d 2 2 d d d 2 2 d f . . . 
        e . f d d d d d d d d d f . . . 
        e e e d d d d d d d d d f e e . 
        . . f d d 2 2 2 2 2 d d f e e . 
        . . f d d d d d d d d d f . . . 
        . e f d d d d d d d d d f . . . 
        e e . f d d d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . e e . . e e e . . . 
        . . . . . . e . . . . e e . . . 
        `],
    200,
    false
    )
    story.printText("зря я сражался с тобой. ты явно профессиональный игрок в гд. прощай . и не забудь нажать на кнопку слева от меню.", 80, 40, 15, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (armor == 1) {
        info.changeLifeBy(50)
        if (power2 == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 e e e e 9 8 6 7 9 7 
                7 9 7 6 8 e d d d d e 8 6 7 9 7 
                7 9 7 6 8 e d d d d e 8 6 7 9 7 
                7 9 7 6 8 e d d d d e 8 6 7 9 7 
                7 9 7 6 8 9 e d d e 9 8 6 7 9 7 
                7 9 7 6 8 9 9 e e 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 e e f e 9 8 6 7 9 7 
                7 9 7 6 8 e d f d d e 8 6 7 9 7 
                7 9 7 6 8 e d f d d e 8 6 7 9 7 
                7 9 7 6 8 e d f d d e 8 6 7 9 7 
                7 9 7 6 8 9 e d f e 9 8 6 7 9 7 
                7 9 7 6 8 9 9 e f 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 e 9 9 e 9 8 6 7 9 7 
                7 9 7 6 8 e d 9 9 d e 8 6 7 9 7 
                7 9 7 6 8 e d 9 d d e 8 6 7 9 7 
                7 9 7 6 8 e d 9 d d e 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 e 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 9 9 9 9 9 9 8 6 7 9 7 
                7 9 7 6 8 8 8 8 8 8 8 8 6 7 9 7 
                7 9 7 6 6 6 6 6 6 6 6 6 6 7 9 7 
                7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `],
            500,
            false
            )
        }
        animation.runImageAnimation(
        mySprite,
        [img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e e e e 9 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 e d d d d e 8 9 7 9 7 
            7 9 7 9 8 9 e d d e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 e e 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e e f e 9 8 9 7 9 7 
            7 9 7 9 8 e d f d d e 8 9 7 9 7 
            7 9 7 9 8 e d f d d e 8 9 7 9 7 
            7 9 7 9 8 e d f d d e 8 9 7 9 7 
            7 9 7 9 8 9 e d f e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 e f 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 8 9 e 9 9 e 9 8 9 7 9 7 
            7 9 7 9 8 e d 9 9 d e 8 9 7 9 7 
            7 9 7 9 8 e d 9 d d e 8 9 7 9 7 
            7 9 7 9 8 e d 9 d d e 8 9 7 9 7 
            7 9 7 9 8 9 9 9 9 e 9 8 9 7 9 7 
            7 9 7 9 8 9 9 9 9 9 9 8 9 7 9 7 
            7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
            7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
            7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
            7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `,img`
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
            `],
        500,
        false
        )
        armor = 0
    } else {
        info.changeLifeBy(-1)
    }
})
let attack = 0
let projectile: Sprite = null
let power2 = 0
let armor = 0
let mySprite2: Sprite = null
let hp_boss = 0
let speed = 0
let g = 0
let stepLength = 0
let mySprite: Sprite = null
story.printText("Однажды кубик пошел исследовать странную башню.", 80, 80)
story.printText("Внутри было много странных существ в клетках.", 80, 80)
story.printText("Но дальше он встретил живой шипастый шар", 80, 80)
story.printText("Он был хозяином замка и решил выгнать кубик из него", 80, 80)
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
info.setLife(100)
mySprite.setPosition(56, 56)
hp_boss = 40
game.onUpdateInterval(100, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        if (attack >= 1) {
            power2 = 1
            if (armor == 0) {
                animation.runImageAnimation(
                mySprite,
                [img`
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
                    `,img`
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                    7 9 6 6 6 6 6 6 6 6 6 6 6 6 9 7 
                    7 9 6 9 9 9 9 9 9 9 9 9 9 6 9 7 
                    7 9 6 9 8 8 8 8 8 8 8 8 9 6 9 7 
                    7 9 6 9 8 9 9 9 9 9 9 8 9 6 9 7 
                    7 9 6 9 8 9 9 9 9 9 9 8 9 6 9 7 
                    7 9 6 9 8 9 9 9 9 9 9 8 9 6 9 7 
                    7 9 6 9 8 9 9 9 9 9 9 8 9 6 9 7 
                    7 9 6 9 8 9 9 9 9 9 9 8 9 6 9 7 
                    7 9 6 9 8 9 9 9 9 9 9 8 9 6 9 7 
                    7 9 6 9 8 8 8 8 8 8 8 8 9 6 9 7 
                    7 9 6 9 9 9 9 9 9 9 9 9 9 6 9 7 
                    7 9 6 6 6 6 6 6 6 6 6 6 6 6 9 7 
                    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    `],
                500,
                false
                )
            } else {
                animation.runImageAnimation(
                mySprite,
                [img`
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                    7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                    7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
                    7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
                    7 9 7 9 8 9 e e e e 9 8 9 7 9 7 
                    7 9 7 9 8 e d d d d e 8 9 7 9 7 
                    7 9 7 9 8 e d d d d e 8 9 7 9 7 
                    7 9 7 9 8 e d d d d e 8 9 7 9 7 
                    7 9 7 9 8 9 e d d e 9 8 9 7 9 7 
                    7 9 7 9 8 9 9 e e 9 9 8 9 7 9 7 
                    7 9 7 9 8 8 8 8 8 8 8 8 9 7 9 7 
                    7 9 7 9 9 9 9 9 9 9 9 9 9 7 9 7 
                    7 9 7 7 7 7 7 7 7 7 7 7 7 7 9 7 
                    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    `,img`
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                    7 9 6 6 6 6 6 6 6 6 6 6 6 6 9 7 
                    7 9 6 9 9 9 9 9 9 9 9 9 9 6 9 7 
                    7 9 6 9 8 8 8 8 8 8 8 8 9 6 9 7 
                    7 9 6 9 8 9 e e e e 9 8 9 6 9 7 
                    7 9 6 9 8 e d d d d e 8 9 6 9 7 
                    7 9 6 9 8 e d d d d e 8 9 6 9 7 
                    7 9 6 9 8 e d d d d e 8 9 6 9 7 
                    7 9 6 9 8 9 e d d e 9 8 9 6 9 7 
                    7 9 6 9 8 9 9 e e 9 9 8 9 6 9 7 
                    7 9 6 9 8 8 8 8 8 8 8 8 9 6 9 7 
                    7 9 6 9 9 9 9 9 9 9 9 9 9 6 9 7 
                    7 9 6 6 6 6 6 6 6 6 6 6 6 6 9 7 
                    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                    `],
                500,
                false
                )
            }
        }
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`transparency16`)
        hp_boss += -1
        animation.runImageAnimation(
        mySprite2,
        [img`
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
            `,img`
            . . . . . . e . . . . . . . . . 
            . . . . . e e . . . . . . . . . 
            . . . . e e e . . . . e e e . . 
            . . . . f f f f f f f e e e . . 
            . . . f d d d d d d d f e . . . 
            . . f d 2 d d d d d 2 d f . . . 
            . . f d 2 2 d d d 2 2 d f . . . 
            e . f d d d d d d d d d f . . . 
            e e e d d 2 d d d d d d f e 8 . 
            . . f d d d 2 2 2 d d d f 8 8 8 
            . . f d d d d d d d d d f . 8 . 
            . e f d d d d d d d d d f . . . 
            e e . f d d d d d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . e e . . e e e . . . 
            . . . . . . e . . . . e e . . . 
            `,img`
            . . . . . . e . 8 8 . . . . . . 
            . . . . . e e . 8 8 8 . . . . . 
            . . . . e e e . . 8 . e e e . . 
            . . . . f f f f f f f e e e . . 
            . . . f d d d d d d d f e . . . 
            . . f d 2 d d d d d 2 d f . . . 
            . . f d 2 2 d d d 2 2 d f . . . 
            e . f d d d d d d d d d f . . . 
            e e e d d 2 d d 8 8 8 8 8 8 8 8 
            . . f d d d 2 8 8 8 8 8 8 e e . 
            . . f d d d d d 8 8 8 d 8 8 8 8 
            . e f d d d d d d d d d f . . . 
            e e . f d d d d d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . e e . . e e e . . . 
            . . . . . . e . . . . e e . . . 
            `,img`
            . . . . . . e . 8 8 8 . . . . . 
            . . . . . e e . 8 8 8 . . . . . 
            . . . . e e e . 8 8 . e e e . . 
            . . . . f f f f 8 f f e e e . . 
            . . . f d d d d 8 d d f e . . . 
            . . f d 2 d d d 8 d 2 d f . . . 
            . . f d 2 2 d d 8 2 2 d f . . . 
            e 6 f d d d d 8 d d d d f . . . 
            6 6 6 d d 2 d 8 8 8 8 8 8 8 8 8 
            . 6 f d d d 2 8 8 8 8 8 8 e e . 
            . . f d d d d d 8 8 8 d 8 8 8 8 
            . e f d d d d d d d d d f . . . 
            e e . f d d d d d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . e e . . e e e . . . 
            . . . . . . e . . . . e e . . . 
            `,img`
            . . . . . . e . 8 8 8 . . . . . 
            . . . . . e e . 8 6 8 . . . . . 
            . . . . e e e . 6 6 . e e e . . 
            . . . . f f f f 6 f f e e e . . 
            . . . f d d d d 6 d d f e . . . 
            . 6 f d 2 d d d 8 d 2 d f . . . 
            . . 6 6 2 2 d d 8 2 2 d f . . . 
            6 6 f d 6 d d 8 d d d d f . . . 
            6 6 6 6 6 2 d 8 8 8 8 8 8 8 9 9 
            . 6 6 d d d 2 8 8 8 6 6 8 e e . 
            . . f d d d d d 8 8 8 d 8 9 9 9 
            . e f d d d d d d d d d f . . . 
            e e . f d d d d d d d f . . . . 
            . . . . f f f 9 9 f f . . . . . 
            . . . . . . e 9 9 9 e e e . . . 
            . . . . . . e . 9 9 . e e . . . 
            `,img`
            . . . . . . e . 8 8 8 . . . . . 
            . . . . . e e . 8 6 8 . . . . . 
            . . . . e e e . 6 6 . e e e . . 
            . . . . f f f f 6 f f e e e . . 
            . . . f d d d d 6 d d f e . . . 
            . 6 f d 2 d d d 8 d 2 d f . . . 
            . . 6 6 2 2 d d 8 2 2 d f . . . 
            6 6 f d 6 d d 8 9 d d d f . . . 
            6 6 6 6 6 2 d 8 9 8 8 8 8 8 9 9 
            . 6 6 d d d 9 9 9 8 6 6 8 e e . 
            . . f d d d 9 9 9 8 8 d 8 9 9 9 
            . e f d d d 9 9 d d d d f . . . 
            e e . f d d 9 9 d d d f . . . . 
            . . . . f f 9 9 6 6 f . . . . . 
            . . . . . . 9 9 6 6 e e e . . . 
            . . . . . . 6 9 6 . . e e . . . 
            `,img`
            . . . . . . . e . . . . . . . . 
            . . . . . . e e . . . . . . . . 
            . . . . . e e e . . . . e e e . 
            . . . . . f f f f f f f e e e . 
            . . . . f d d d d d d d f e . . 
            . . . f d 2 d d d d d 2 d f . . 
            . . . f d 2 2 d d d 2 2 d f . . 
            . e . f d d d d d d d d d f . . 
            . e e e d d 2 d d d d d d f e e 
            . . . f d d d 2 2 2 d d d f e e 
            . . . f d d d d d d d d d f . . 
            . . e f d d d d d d d d d f . . 
            . e e . f d d d d d d d f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . e e . . e e e . . 
            . . . . . . . e . . . . e e . . 
            `,img`
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
            `],
        200,
        false
        )
        attack = 1
    }
})
game.onUpdateInterval(200, function () {
    if (g == 0) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 6), randint(0, 6)), assets.tile`myTile4`)
        if (randint(0, 2) == 0) {
            tiles.setTileAt(tiles.getTileLocation(randint(0, 6), randint(0, 6)), assets.tile`myTile2`)
        }
    }
})
