/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function(head) {
  let cur = head,
      prev = null;
  while (cur !== null) {
    const cnext = cur.next;
    cur.next = prev;
    prev = cur;
    cur = cnext;
  }
  return prev;
};
// 递归
var reverseList = function(head) {
  if (head == null || head.next === null) return head;
  let tail = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return tail;
};
// @lc code=end

