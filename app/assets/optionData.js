const optionData = {
    discType: [
        {
            shot_id: 1,
            option: "Overstable",
        },
        {
            shot_id: 2,
            option: "Understable",
        },
        {
            shot_id: 3,
            option: "Putter",
        },
        {
            shot_id: 4,
            option: "Mid-range",
        },
        {
            shot_id: 5,
            option: "Fairway Driver",
        },
        {
            shot_id: 6,
            option: "Distance Driver",
        },
        {
            shot_id: 7,
            option: "Opponents Choice",
        },
        {
            shot_id: 8,
            option: "Wild",
        },
    ],
    shotType: [
        {
            shot_id: 1,
            option: "Forehand",
        },
        {
            shot_id: 2,
            option: "Backhand",
        },
        {
            shot_id: 3,
            option: "Roller",
        },
        {
            shot_id: 4,
            option: "Hyzer",
        },
        {
            shot_id: 5,
            option: "Anhyzer",
        },
        {
            shot_id: 6,
            option: "Overhand",
        },
        {
            shot_id: 7,
            option: "Opponents Choice",
        },
        {
            shot_id: 8,
            option: "Opposite Hand",
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

