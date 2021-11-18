import test from 'ava'
import transformToJavanese from '../src/Javanese.js'

test('it transforms to javanese with default mode', t => {
  const fixtures = {
    'bon': 'bavon',
    'bonjour': 'bavonjavour',
    'champion': 'chavampavion',
    'gros': 'gravos',
    'plans': 'plavans',
    'train': 'travain',
    'Salut ça va ?': 'Savalavut çava vava ?',
  }

  for (const sentence in fixtures) {
    let result = transformToJavanese(sentence)
    let expected = fixtures[sentence]

    t.is(result, expected)
  }
})
