mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        . 4 4 5 5 4 . . . . . . . . . . 
        . 4 4 4 5 4 . . . . . . . . . . 
        . 4 4 4 4 4 . . . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
})
let mySprite: Sprite = null
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
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 100)
forever(function () {
	
})
