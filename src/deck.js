function shuffle(array) {
  const _array = array.slice(0)

  for(let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i+1))
    let temp = _array[i]
    _array[i] = _array[randomIndex]
    _array[randomIndex] = temp
  }

  return _array
}

export default function createCards() {
  let id = 0

  const cards = ['apple', 'bridge', 'chicago', 'clock', 'crane', 'flashlight', 'knob', 'mustang', 'raingauge', 'scooter', 'train', 'windmill'].reduce((accumulator, name) => {
    accumulator.push({
      id: id++,
      name
    })
    accumulator.push({
      id: id++,
      name
    })
    return accumulator
  }, [])

  return shuffle(cards)
}
