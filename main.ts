mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 4 4 . . . . . . . . . 
        . 4 4 4 1 1 4 4 . . . . . . . . 
        . 4 4 4 4 1 4 4 . . . . . . . . 
        . 4 4 4 4 4 4 4 . . . . . . . . 
        . 4 1 4 4 4 4 4 . . . . . . . . 
        . 4 4 1 4 4 4 4 . . . . . . . . 
        . . 4 4 4 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, -60)
})
let projectile: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f 2 f f . . . . . 
    . . . . . f f 2 f 2 f f . . . . 
    . . . . f f 2 f f f 2 f f . . . 
    . . . f f 2 f f . f f 2 f f . . 
    . . . f 2 f f . . . f f 2 f . . 
    . . . f f f . . . . . f f f . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f 8 f f . . . . . 
    . . . . . f f 8 f 8 f f . . . . 
    . . . . f f 8 f f f 8 f f . . . 
    . . . f f 8 f f . f f 8 f f . . 
    . . . f 8 f f . . . f f 8 f . . 
    . . . f f f . . . . . f f f . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f 7 f f . . . . . 
    . . . . . f f 7 f 7 f f . . . . 
    . . . . f f 7 f f f 7 f f . . . 
    . . . f f 7 f f . f f 7 f f . . 
    . . . f 7 f f . . . f f 7 f . . 
    . . . f f f . . . . . f f f . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f 4 f f . . . . . 
    . . . . . f f 4 f 4 f f . . . . 
    . . . . f f 4 f f f 4 f f . . . 
    . . . f f 4 f f . f f 4 f f . . 
    . . . f 4 f f . . . f f 4 f . . 
    . . . f f f . . . . . f f f . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . 5 4 5 . . . . . 5 4 5 . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 90)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 90)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 90)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 90)
forever(function () {
	
})
