var merge = function(nums1, m, nums2, n) {
    var p1 = m - 1;
    var p2 = n - 1;
    for (var i = m + n - 1; i >= 0; --i) {
        if (p2 < 0 || (p1 >= 0 && nums1[p1] > nums2[p2])) {
            nums1[i] = nums1[p1--];
        }
        else {
            nums1[i] = nums2[p2--];
        }
    }
};

// merge([1,2,3,5,7,0,0],3,[2,5,6,11,24],3) = [1,2,2,3,5,6,0]