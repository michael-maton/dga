const optionData = {
  discType: [
    {
      shot_id: 1,
      option: "Overstable",
      luck: 1,
    },
    {
      shot_id: 2,
      option: "Understable",
      luck: 1,
    },
    {
      shot_id: 3,
      option: "Putter",
      luck: 1,
    },
    {
      shot_id: 4,
      option: "Mid-range",
      luck: 1,
    },
    {
      shot_id: 5,
      option: "Fairway Driver",
      luck: 0,
    },
    {
      shot_id: 6,
      option: "Distance Driver",
      luck: 0,
    },
    {
      shot_id: 7,
      option: "Opponents Choice",
      luck: 0,
    },
    {
      shot_id: 8,
      option: "Wild",
      luck: 0,
    },
  ],
  shotType: [
    {
      shot_id: 1,
      option: "Forehand",
      luck: 1,
    },
    {
      shot_id: 2,
      option: "Backhand",
      luck: 1,
    },
    {
      shot_id: 3,
      option: "Roller",
      luck: 1,
    },
    {
      shot_id: 4,
      option: "Hyzer",
      luck: 1,
    },
    {
      shot_id: 5,
      option: "Anhyzer",
      luck: 0,
    },
    {
      shot_id: 6,
      option: "Overhand",
      luck: 0,
    },
    {
      shot_id: 7,
      option: "Opponents Choice",
      luck: 0,
    },
    {
      shot_id: 8,
      option: "Opposite Hand",
      luck: 0,
    },
  ],
};

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


/* 
    PATTERN CREATION

    SPIN LUCK:
    Low: 1x
    Med: 2x
    High: 5x

*/