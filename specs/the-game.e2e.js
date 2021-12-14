const compareX = async function(){
    const ball = await $('#ball');
    const pad = await $('#pad');
    const ballX = (await ball.getLocation())['x'];
    const padX = (await pad.getLocation())['x'];
    let times;
    if(padX < ballX){
        times = Math.ceil((ballX - padX)/20);
        for(let i = 0; i < times; i++){
            await browser.keys('D');            
        }
    }
    else {
        times = Math.ceil((padX - ballX)/20);
        for(let i = 0; i < times; i++){
            await browser.keys('A');            
        }
    }
}
describe('The game', function () {
    it('should get more than 100 points ', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/arkanoid.html');
        await browser.pause(1000);
        await $('button=PLAY').click();
        await browser.waitUntil(async () => {
            await compareX();
            const points = parseInt(await $('#points').getText(), 10);
            if (points > 100) return true
            console.log({ points })
        }, { timeout: 600000, interval: 10 })
    });
})
