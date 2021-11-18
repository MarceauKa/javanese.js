const DEFAULT_MODE = 'av'

class Javanese {
  /**
   * @constructor
   * @param {String} mode Mode used to transform. Example "av", "f" or your custom replacement string
   */
  constructor (mode = DEFAULT_MODE) {
    this.mode = mode
  }

  /**
   * @param {String} sentence
   * @returns {String}
   */
  parse (sentence) {
    if (typeof sentence === 'string' || sentence instanceof String) {
      return sentence.replaceAll(this.getRegex(), `${this.mode}$&`)
    }

    throw 'Given sentence must be a string'
  }

  /**
   * @return {RegExp}
   */
  getRegex () {
    return new RegExp('(a|i|u|e|o){1,2}', 'gmi')
  }
}

/**
 * @param {String} sentence
 * @param {String} mode
 * @returns {String}
 */
export default function transformToJavanese (sentence, mode = DEFAULT_MODE) {
  return new Javanese(mode).parse(sentence)
}