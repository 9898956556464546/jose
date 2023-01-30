def on_button_multiplayer_a_pressed(player2):
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        50,
        -50)
mp.on_button_event(mp.MultiplayerButton.A,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_a_pressed)

projectile: Sprite = None
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
    sprites.create(img("""
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
    """),
        SpriteKind.player))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.THREE),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.FOUR),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE), 100, 90)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO), 100, 90)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.THREE), 100, 90)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.FOUR), 100, 90)

def on_forever():
    pass
forever(on_forever)
