declare module 'reading-time' {
  function readingTime(
    text: string,
    options?: {
      wordsPerMinute?: number
      wordBound?: (c: string) => boolean
    }
  ): {
    text: string
    time: number
    words: number
    minutes: number
  }

  namespace readingTime {

  }

  export = readingTime
}
