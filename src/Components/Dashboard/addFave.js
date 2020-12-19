const articles = [
    {
        title: "Maple Syrup Forever",
        description: "Local woman uses maples trees in backyard to make maple syrup for neighbors.",
        date: "2020-12-19 1:05pm"
    },
    {
        title: "Show Me the Honey",
        description: "Man fights bear, wins the honey",
        date: "2020-12-17 6:45pm"
    },
    {
        title: "Muddy Creek Problem",
        description: "It's too muddy.",
        date: "2020-12-16 10:30am"
    }
];

let favesSet = new Set();

const addFave = (index) => {
    let faveArticle = articles[index];
    favesSet.add(faveArticle);    

    let faves = [...favesSet];

    return faves.length;
};

module.exports = addFave;