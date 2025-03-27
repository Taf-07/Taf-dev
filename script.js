const animation = [">>>   ", " >>>  ", "  >>> ", "   >>>", ">   >>", ">>   >"]
const sleep = ms => new Promise(r => setTimeout(r, ms));
let f = 0
async function play(ani, ms, animation) {
    let aniE = document.getElementById(`${ani}`)
    frame = animation[f]
    aniE.innerText = frame
    
    f += 1
    if (f > (animation.length - 1)) {
        f = 0
    }
    await sleep(ms)
    play(`${ani}`, ms, animation)
}
play("ani", 150, animation)