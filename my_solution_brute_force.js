function mergeKSortedLists(m) {
    let res = []
    
    if(!m.length) return res
    
    let map = {}
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            if(!map[m[i][j]]) map[m[i][j]] = 0
            map[m[i][j]]++
        }
    }
    
    Object.keys(map).sort((a, b) => a - b).forEach(key => {
        for(let i = 0; i < map[key]; i++){
            res.push(parseInt(key))
        }
    })    
    
    return res
}
