var mergeTwoLists = function(l1, l2) {
  var l3 = new ListNode(null, null);
  var prev = l3;
  while (l1 && l2) {
    if (l1.val <= l2.val) { 
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  if (l1 === null) { prev.next = l2; }
  if (l2 === null) { prev.next = l1; }
  return l3.next;
};

/**
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var l1 = n1;

var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var l2 = n4; 

mergeTwoLists(l1,l2) = 1 > 3 > 5 > 6 > 9 > 10
*/