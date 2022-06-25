let jewel: {
    name: string,
    desc: string,
    features: string[],
    ownername: {
        id: number
    },
    description:[number,string],
}={
    name: "Jewel1",
    desc: "Jewellary",
    features: ["24carat", "No wastage"],
    ownername: {
        id: 2
    },
    description: [2,"JewelItem"]
};
jewel.description= [3,"JewelItem`1"]
console.log(jewel.description)
// for(let i=0;i<jewel.features.length;i++){
//     console.log(jewel.features[i])
// }
// console.log(jewel.ownername.id)