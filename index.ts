
for (let i = 0; i <= 10; i++) {
  //console.log(`exersise 1`, i)
}
// join two arrays into array of tuples
// example: for ["John", "Sara","Bob"] and [28,16,6]
// result should be [ ["John", 28], ["Sara", 16], ["Bob", 6] ]
let family: [string, number][] = []
let names: string[] = ["John", "Sara", "Bob", `Ivan`]
let ages: number[] = [28, 16, 6, 77]
for (let i = 0; i < names.length; i++) {
  family.push([names[i].toLocaleUpperCase(), ages[i]])
}
//console.log(`упражнение 2` , family.sort())

// find the largest number in the array
export function findMaxNumber(arr: number[]): number {
  let number: number[] = []
  for (let num of arr) {
    number.findLast
  }
  //console.log (`упражнение 3` ,result)
}
let table: number[][] = []
for (let i = 1; i <= 10; i++) {
  const row: number[] = [];
  for (let j = 1; j <= 10; j++) {
    row.push(i * j);
  }
  table.push(row);
}
///console.log(table)

let myDay: [string, number][] = []
let name: string[] = [`arrr`, `tbbb`, `grrr`, `yyyy`]
let time: number[] = [13, 14, 15, 16,]
for (let i = 0; i < time.length; i++) {
  myDay.push([name[i], time[i]])
}
///console.log(myDay)

let fibSequence: number[] = [];
let a = 0;
let b = 1;
let limit = 50
while (a <= limit) {
  fibSequence.push(a);
  let temp = a + b;
  a = b;
  b = temp;
}
//console.log (fibSequence)

//reverse array
let myArray: number[] = [1, 4, 6, 8, 9, 10, 23, 45]
for (let i = 0; i <= 44; i++) {
  myArray.reverse()
}
//console.log (myArray)

//take only even items from array
let iArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray: number[] = [];
for (let i = 0; i < iArray.length; i++) {
  if (iArray[i] % 2 === 0) {
    evenArray.push(iArray[i]);
  }
}
//console.log(evenArray);
// Find top 3 most listened albums
// Find most played artist
// Find Artists with several albums
const albums: [string, string, number][] = [
  ["Metallica", "St. Anger", 26],
  ["Pink Floyd", "Dark Side of the Moon", 113],
  ["Dire Straits", "Love Over Gold", 64],
  ["The Offspring", "Days Go By", 42],
  ["Metallica", "Black Album", 97],
  ["Green Day", "American Idiot", 34],
  ["Katatonia", "Dead End Kings", 184],
  ["The Offspring", "Smash", 12],
  ["Pink Floyd", "Wish You Were Here", 280],
  ["Type O Negative", "World Coming Down", 59],
  ["Paradise Lost", "Medusa", 75],
  ["Rammstein", "Mutter", 157],
  ["Katatonia", "The Fall of Hearts", 157],
  ["Muse", "The Resistance", 36],
  ["Muse", "Origin of Symmetry", 98],
  ["Type O Negative", "October Rust", 201],
  ["Paradise Lost", "Tragic Idol", 207],
  ["Pink Floyd", "Animals", 108],
  ["O Children", "Apnea", 77],
  ["Of Monsters and Men", "My Head Is an Animal", 107],
  ["Buckethead", "Electric Sea", 34],
]
let topAlbums: string[] = []
let topAlbum: [string, string, number] = ["AAA", "frg", -1]
for (let i = 0; i < albums.length; i++){
 let album = albums[i] 
 if (album[2] > topAlbum[2]){
  topAlbum = album
 }

}
///console.log(topAlbum)   
let topArtist: string = ""
let maxListens: number = -1
for (let i = 0; i < albums.length; i++) {
  let artist = albums[i][0]
  let listens = albums[i][2]
  if (listens > maxListens) {
    maxListens = listens
    topArtist = artist
  }
}
console.log(topArtist)
interface Album {
  artist: string;
  numberOfAlbums: number;
}
const artistCounts: { [key: string]: number } = {};
for (let i = 0; i < albums.length; i++) {
    const artist = albums[i][0];
    artistCounts[artist] = (artistCounts[artist] || 0) + 1;
}
const artistsWithMultipleAlbums: Album[] = [];
for (const artist in artistCounts) {
    if (artistCounts[artist] > 1) {
        artistsWithMultipleAlbums.push({ artist: artist, numberOfAlbums: artistCounts[artist] });
    }
}
///console.log(artistsWithMultipleAlbums);
// count the number of words, sentences, characters
// how many times word proof-of-work is present in the text
// console log all sentences where the word proof-of-work is mentioned
const abstract = `A purely peer-to-peer version of electronic cash would allow online
payments to be sent directly from one party to another without going through a
financial institution. Digital signatures provide part of the solution, but the main
benefits are lost if a trusted third party is still required to prevent double-spending.
We propose a solution to the double-spending problem using a peer-to-peer network.
The network timestamps transactions by hashing them into an ongoing chain of
hash-based proof-of-work, forming a record that cannot be changed without redoing
the proof-of-work. The longest chain not only serves as proof of the sequence of
events witnessed, but proof that it came from the largest pool of CPU power. As
long as a majority of CPU power is controlled by nodes that are not cooperating to
attack the network, they'll generate the longest chain and outpace attackers. The
network itself requires minimal structure. Messages are broadcast on a best effort
basis, and nodes can leave and rejoin the network at will, accepting the longest
proof-of-work chain as proof of what happened while they were gone.`
let words = abstract.split(` `)
///console.log(words)
let sentences = abstract.split(".")
//console.log(sentences)
let characters = abstract.split("")
//console.log(characters.length)
let findWords = []
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("proof-of-work")) {
    findWords.push("proof-of-work")
  }
}
//console.log(findWords.length)

const abstract1 = `Ибо тайна бытия человеческого не в том, чтобы только жить, а в том, для чего жить. Без твердого представления себе,
для чего ему жить, человек не согласится жить и скорей истребит себя, чем останется на земле, хотя бы кругом его всё были хлебы.`
let newWords = abstract1.split(` `)
//console.log(`Ф.М. Достоевский "Братья Карамазовы"`)
///console.log(newWords)
let NewSentences = abstract1.split(".")
///console.log(NewSentences)
let findNewWords = []
for (let i = 0; i < newWords.length; i++) {
  if (newWords[i].includes("чего")) {
    findNewWords.push("чего")
  }
}
//console.log(findNewWords.length)

