const optionData = {
    discType: [
        {
            id: 1,
            option: "Overstable",
        },
        {
            id: 2,
            option: "Understable",
        },
        {
            id: 3,
            option: "Putter",
        },
        {
            id: 4,
            option: "Mid-range",
        },
        {
            id: 5,
            option: "Fairway Driver",
        },
        {
            id: 6,
            option: "Distance Driver",
        },
        {
            id: 7,
            option: "Opponents Choice",
        },
    ],
    shotType: [
        {
            id: 1,
            option: "Forehand",
        },
        {
            id: 2,
            option: "Backhand",
        },
        {
            id: 3,
            option: "Roller",
        },
        {
            id: 4,
            option: "Hyzer",
        },
        {
            id: 5,
            option: "Anhyzer",
        },
        {
            id: 6,
            option: "Opposite Hand",
        },
        {
            id: 7,
            option: "Opponents Choice",
        },
    ],


}



export default optionData;

/*
    1:
    Overstable, Understable, Putter, Mid-range, Fairway Driver, Distance Driver, Opponents Choice

    2:
    Forehand, Backhand, Roller, Hyzer, Anhyzer, Opponents Choice, Opposite Hand


    Angles:
        Hyzer
        Anhyzer

    Throws:
        Backhand
        Forehand
        Overhand
        Roller
                            Opposite hand

    Molds:
        Putter
        Mid-range
        Fairway Driver
        Distance Driver

    Stability:
        Stable
        Overstable
        Understable



    Hyzer -> Backhand, forehand
    Anhyzer -> Backhand, forehand
    Overstable -> Backhand, forehand
    Understable -> Backhand, forehand


    1:
    Hyzer, Anhyzer, Overstable, Understable, Roller

    2:
    Backhand, Forehand,  






*/

