

type Album = {
    artist: string,
    name: string,
    listners: number
}
const albums: Album[] = [
    {
        artist: "Metallica", name: "St. Anger", listners: 26
    },
    {
        artist: "Pink Floyd", name: "Dark Side of the Moon", listners: 113
    },
    {
        artist: "Metallica", name: "Black Album", listners: 100
    },
]
const artists: { name: string, listners: number }[] = []
const artistCounts: { [key: string]: number } = {}
for (let i = 0; i < albums.length; i++) {
    const listners = albums[i].listners
    const artist = albums[i].artist
    artistCounts[artist] = (artistCounts[artist] || 0) + listners;
}
let mostListenedArtist = '';
let maxListeners = 0;
const artistsArray = Object.entries(artistCounts);
for (let i = 0; i < artistsArray.length; i++) {
    const [artist, listeners] = artistsArray[i];
    if (listeners > maxListeners) {
        mostListenedArtist = artist;
        maxListeners = listeners;
    }
}
///console.log(`The most listened-to artist is ${mostListenedArtist} with ${maxListeners} listeners.`);

function findLargestNumber(numbers: number[]): number {
let result = numbers[0]
for (let i = 1; i < numbers. length; i++) {
    const number = numbers [i]
    if (number > result) {
    result = number; 
 }
}
return result
}
const ages = [22,44,77,66666,8889,9095]
const largestAge = findLargestNumber(ages)
///console.log(largestAge)

function multiplicationNumbers(a:number, b:number, c:number){
    return a*b*c
}
    const reference = multiplicationNumbers
    const resultOf =  multiplicationNumbers (5,7, 5/6)
    console.log(`The multiplication of numbers 5,7, 5/6 is ${resultOf} `)