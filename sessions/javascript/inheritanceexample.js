// class Player{
//     constructor(name,age,country){
//         this.name=name;
//         this.age=age;
//         this.country=country
//     }
//     showPlayerInfo(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.country)
//     }
//     calculateAverage(){
//         console.log("avargare for player")
//     }
// }

// class Batsman extends Player{
//     constructor(){
//         this.totalRun = run;
//         this.totalMatch = match
//     }
// }


// class Bowler extends Player{
//     constructor(name,age,country,wickets){
//         super(name,age,country)
//         this.wickets = wickets
//     }
//     showTotalWickets(){
//         console.log(this.wickets)
//     }
//     calculateAverage(){
//         super.calculateAverage();
//         console.log("avargare for bowler")
//     }
// }

// let b1 = new Bowler("Bumrah",30,"india",300)
// b1.showTotalWickets()
// b1.showPlayerInfo();
// b1.calculateAverage();



class VideoPlayer{
    constructor(videosrc){
        this.videosrc=videosrc
    }
    play(){
        console.log("playing video")
    }
    pause(){
        console.log("pause function")
    }
}

class VLCMedia extends VideoPlayer{
    constructor(){
        super("movie1.mp4")
    }
    recordVideo(){
        console.log("recridng")
    }
}

class MXplayer extends VideoPlayer{
    constructor(){
        super("movie1.mp4")
    }
    trim(){
        console.log("trimimg")
    }
    play(){
        super.play()
        console.log("playing function updated")
    }
}

let mxP = new MXplayer()
mxP.play()
mxP.pause()
mxP.play();

// let vlc = new VLCMedia();

// vlc.play()
// vlc.pause()

// compile time polymorphism not supported in js

// method overriding --run time polymorhsim

// class object encapsulation polymorphsim data abstraction method overriding

