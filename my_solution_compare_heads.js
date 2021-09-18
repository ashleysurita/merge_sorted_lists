function mkl(lists){
    if(!lists.length) return []
  
    const head = new ListNode('head')
    let curr = head
    
    while(lists.length){
      let highest = Infinity
      let highestI = 0
      
      for(let i = 0; i < lists.length; i++){
        if(!lists[i]) lists.slice(i, i + 1)
        else if(lists[i].value < highest) {
          highest = lists[i].value
          highestI = i
        }
      }
      
      let currVal = lists[highestI]
      lists[highestI] = lists[highestI].next
      
      curr.next = currVal
      curr = curr.next
      curr.next = null
      
      if(!lists[highestI]) lists = lists.filter(list => list)
    }
    
    return head.next
}
