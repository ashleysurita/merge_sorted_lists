# merge_sorted_lists

### Problem:
Q. Given two dimensional linked lists, merge all the lists into one sorted list. Each linked list is sorted in ascending order.

Examples:
• Given an array: [] // returns []
• Given an array: [[1, 4, 5], [1, 3, 4], [2, 6]] // returns: [1, 1, 2, 3, 4, 4, 5, 6]

```
function mkl(lists) {
    // Write your code here.
}

// Test Cases
test.startProblem("Merge K Sorted Lists")
var LL9 = new ListNode(-1, new ListNode(4, new ListNode(5)))
var LL6 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(4))))
var LL7 = new ListNode(2, new ListNode(6))
var LL8 = new ListNode(1, new ListNode(11, new ListNode(111)))
test.testForArrays([-1, 1, 2, 3, 4, 4, 4, 5, 6], arrayify(mkl([LL9, LL6, LL7])), 1)
test.testForArrays([0, 1, 11, 111], arrayify(mkl([LL8, new ListNode()])), 2)
test.testForArrays([0], arrayify(mkl([new ListNode()])), 3)
test.endProblem()
```
