//Breadth-first search (BFS) allows you to find the shortest distance between 2 things
//e.g: 
// - Checkers AI calculating fewest moves to victory
// - Spell checker, fewest edits from your misspelling to a real word
// - Find the doctor closest to you in your network

// use queue data structure to search neigbouring nodes
// use hashmap to show relationships between nodes

//Find the plumber...

type Tradey = {
    name: string
    job: 'bricklayer' | 'carpenter' | 'electrician' | 'plumber' | 'engineer'
}

let you = { name: 'you', job: 'engineer' } as Tradey
let Matt = { name: 'Matt', job: 'engineer' } as Tradey
let Andy = { name: 'Andy', job: 'engineer' } as Tradey
let Paul = { name: 'Paul', job: 'electrician' } as Tradey
let Mike = { name: 'Mike', job: 'carpenter' } as Tradey
let Pete = { name: 'Pete', job: 'carpenter' } as Tradey
let Keith = { name: 'Keith', job: 'bricklayer' } as Tradey
let Shawn = { name: 'Shawn', job: 'plumber' } as Tradey
let Bob = { name: 'Bob', job: 'plumber' } as Tradey

let graph = new Map<Tradey, Tradey[]>([
    [you,
        [
            Matt,
            Andy
        ]],
    [Matt,
        [
            Paul,
            Mike
        ]],
    [Andy,
        [
            Pete,
            Mike
        ]],
    [Paul,
        [
            Keith,
            Shawn
        ]],
    [Mike,
        []
    ],
    [Pete,
        []
    ],
    [Keith,
        [
            Bob
        ]
    ],
    [Shawn,
        []
    ],
    [Bob,
        []
    ]
])

//search algorithm
function searchForPlumber() {
    let queue: Array<Tradey | undefined> = []
    let searched: Array<string | undefined> = []
    let tradeys = graph.get(you)
    tradeys!.forEach(tradey => queue.push(tradey))

    while (queue.length !== 0) {
        let tradey = queue.shift()
        console.log(tradey)
        if (tradey) {
            if (!(searched.includes(tradey?.name))) {
                if (tradey?.job === 'plumber') {
                    console.log(`${tradey!.name} is the closest plumber!`)
                    break
                } else {
                    let tradeysNeighbours = graph.get(tradey)
                    if (tradeysNeighbours) {
                        tradeysNeighbours?.forEach(tradey => queue.push(tradey))
                        searched.push(tradey.name)
                    }
                }
            }
        }
    }
}

searchForPlumber()