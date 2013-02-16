class MyHash
  valStore: []
  max: 999
  set: (key, val)->
    @valStore[@hashFn(key)] = val
  get: (key)->
    @valStore[@hashFn(key)]
  hashFn: (str) ->
    hash = 0
    if str.length is 0 then return hash
    for letter,i in str
      hash = (hash<<5) + letter.charCodeAt i
      hash = (hash & hash) % @max
    hash
