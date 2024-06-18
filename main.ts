loops.forever(function () {
    loops.pause(60000)
    random2 += randint(1, 40)
    if (random2 >= 10) {
        gameplay.title(mobs.target(NEAREST_PLAYER), "§eDifficulty:", "§l§3Hard")
        music.playSound(Sound.LightningImpact)
        gameplay.setDifficulty(HARD)
    } else if (random2 >= 20) {
        gameplay.title(mobs.target(NEAREST_PLAYER), "§eDifficulty:", "Normal")
        music.playSound(Sound.Creeper)
        gameplay.setDifficulty(NORMAL)
    } else if (random2 >= 30) {
        gameplay.title(mobs.target(NEAREST_PLAYER), "§eDifficulty:", "Easy")
        music.playSound(Sound.Zombie)
        gameplay.setDifficulty(EASY)
    } else {
        gameplay.title(mobs.target(NEAREST_PLAYER), "§eDifficulty:", "Peaceful")
        music.playSound(Sound.CatMeow)
        gameplay.setDifficulty(PEACEFUL)
    }
})
let random2 = 0
player.say("§eRandom Difficulty Changed every Minute!")
player.say("By §l§eNotEvilbook")
player.say("Version 1.1")
