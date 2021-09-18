var mergeKLists = function(lists) {
    let amount = lists.length
    let interval = 1
    while(interval < amount){
        for(let i = 0; i < amount - interval; i += (interval * 2)){
            lists[i] = mergeLists(lists[i], lists[i + interval])
        }
        interval *= 2
    }
    
    return amount > 0 ? lists[0] : null
};

function mergeLists(list1, list2){
    const head = new ListNode('head')
    let curr = head
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    if(!list1) curr.next = list2
    else curr.next = list1
    
    return head.next
}
