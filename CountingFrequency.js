const artists = [
  '$hyfromdatre',
  'ATB',
  'ATB',
  'BRS Kash',
  'Brent Faiyaz',
  'CORPSE',
  'Coi Leray',
  'Coi Leray',
  'Coi Leray',
  'DUSTY LOCANE',
  'Doja Cat',
  'ElyOtto',
  'Eyedress',
  'Giveon',
  'Glass Animals',
  'Gorgon City',
  'Issam Alnajjar',
  'JESSIA',
  'Jonah Kagen',
  'KAI',
  'Kali Uchis',
  'Kim Dracula',
  "Leat'eq",
  'Masked Wolf',
  'Mooski',
  'Nathan Evans',
  'Nathan Evans',
  'Obzesion',
  'Olivia Rodrigo',
  'Pink Sweat$',
  'Pooh Shiesty',
  'Reyanna Maria',
  'Riton',
  'Ryn Weaver',
  'SZA',
  'Saweetie',
  'Seaforth',
  'Selena Gomez',
  'Shinsei Kamattechan',
  'SoFaygo',
  'SpotemGottem',
  'SpotemGottem',
  'Tai Verdes',
  'Tom MacDonald',
  'Trey Lewis',
  'Victoria Monét',
  'Wilbur Soot',
  'YBN Nahmir',
  'Yung Baby Tate',
  'bbno$',
  'carolesdaughter',
  '稲葉曇',
]

function findTopArtist(list) {
  const sortedList = list.sort()
  let topNum = 0
  let topArtist = ''

  for (let i = 0; i < sortedList.length; i) {
    let currentCount = 0
    for (let s = i; s < sortedList.length; s++) {
      if (sortedList[i] === sortedList[s]) {
        currentCount++
      }
    }

    if (currentCount > topNum) {
      topArtist = sortedList[i]
      topNum = currentCount
    }

    i = i + currentCount
    currentCount = 0
  }

  return topArtist
}
console.log(findTopArtist(artists))
