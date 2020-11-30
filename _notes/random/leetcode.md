---
layout: post
title: LeetCode
category: note
permalink: /notes/leetcode
display: "/assets/gif"
date: 2020-06-01
update: 2020-01-01
---
## 739. Daily Temperatures (Medium)

{% highlight python linenos %}
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        class Node:
            def __init__(self, data=-1, index=-1, parent=None):
                self.data = data
                self.index = index
                self.parent = parent
        answer = [None] * len(T)
        current = Node()
        for i, ele in reversed(list(enumerate(T))):
            # print("ele",ele,"current",current.data,current.index)
            while current.index != -1 and ele >= current.data:
                # print("go back")
                current = current.parent
            if(current.index != -1):
                # print("update ("+str(i)+") with",current.index - i)
                answer[i] = current.index - i
            else:
                # print("update ("+str(i)+") with",0)
                answer[i] = 0
            current = Node(ele,i,current)
        return answer
{% endhighlight %}

## 2. Add Two Numbers (Medium)

{% highlight python linenos %}
value1 = 0
        next1 = l1
        i = 0
        while(next1 != None):
            value1 += next1.val*(10**i)
            i+=1
            next1=next1.next
        value2 = 0
        next2 = l2
        i = 0
        while(next2 != None):
            value2 += next2.val*(10**i)
            i+=1
            next2=next2.next
        value3 = value1 + value2
        tmpv=str(value3)
        tmpl=len(str(value3))
        nextv=None
        for i in range(0,tmpl,1):
            nextv = ListNode(int(tmpv[i]),nextv)

        return nextv
{% endhighlight %}

## 1. Two Sum (Easy)

{% highlight python linenos %}
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answer = []
        x = 0
        y = len(nums)-1
        ref = {}
        # ref => {}
        # [a,b,c,d]
        # ref['a'] = 0
        # ref['b'] = 1
        # ref['c'] = 2
        # ref['d'] = 3
        for index, value in enumerate(nums):
            if value not in ref:
                ref[value] = index
            else:
                if(type(ref[value]) == list):
                    ref[value].append(index)
                else:
                    ref[value] = [ref[value], index]
                        
        nums = sorted(nums)
        while True:
            if(nums[x] + nums[y] > target):
                y = y - 1 
            elif(nums[x] + nums[y] < target):
                x = x + 1
            elif(nums[x] + nums[y] == target):
                if(nums[x] == nums[y]):
                    answer = [ref[nums[x]][0], ref[nums[y]][1]]
                else:
                    answer = [ref[nums[x]], ref[nums[y]]]
                break
            elif(x == y):
                break
        return answer
{% endhighlight %}

{% highlight python linenos %}
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(0,len(nums),1):
            for j in range(len(nums)-1,-1,-1):
                if(i == j):
                    break
                if(nums[i] + nums[j] == target):
                    return [i, j]
{% endhighlight %}

## 3. Longest Substring Without Repeating Characters (Medium)

{% highlight python linenos %}
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        tmp = {}
        longest_length = 0
        for i, c in enumerate(s):
            if c not in tmp.keys():
                tmp[c] = i
            else:
                if(longest_length < len(tmp)):
                    longest_length = len(tmp)
                new_tmp = {}
                start_position = tmp[c] + 1
                for char, j in tmp.items():
                    if(j >= start_position):
                        new_tmp[char] = j
                new_tmp[c] = i
                tmp = new_tmp
        if(longest_length < len(tmp)):
            longest_length = len(tmp)
        return longest_length 
{% endhighlight %}

## 15. 3Sum (Medium)

{% highlight python linenos %}
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        answer = []
        if(len(nums) > 2):
            a = 0
            b = a + 1
            c = len(nums)-1
            nums = sorted(nums)
            while a != len(nums) - 2 or b < c:
                if a == 0 or a > 0 and nums[a - 1] != nums[a]:
                    while b < c:
                        if(nums[a] + nums[b] + nums[c] > 0):
                            c = c - 1 
                        elif(nums[a] + nums[b] + nums[c] < 0):
                            b = b + 1
                        else:
                            answer.append([nums[a], nums[b], nums[c]])
                            b = b + 1
                            c = c - 1
                            while b < c and nums[b] == nums[b-1]:
                                b = b + 1
                            while b < c and nums[c] == nums[c+1]:
                                c = c - 1
                a = a + 1
                b = a + 1
                c = len(nums)-1
                    
        
        return answer
{% endhighlight %}

## 18. 4Sum (Medium)

{% highlight python linenos %}
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        answer = []
        if(len(nums) > 3):
            a = 0
            b = a + 1
            c = b + 1
            d = len(nums)-1
            nums = sorted(nums)
            while a != len(nums) - 3:
                if a == 0 or a > 0 and nums[a - 1] != nums[a]:
                    b = a + 1
                    c = b + 1
                    d = len(nums)-1
                    while b != len(nums) - 2 or c < d:
                        if b == a+1 or b > a+1 and nums[b - 1] != nums[b]:
                            while c < d:
                                if(nums[a] + nums[b] + nums[c] + nums[d] > target):
                                    d = d - 1 
                                elif(nums[a] + nums[b] + nums[c] + nums[d] < target):
                                    c = c + 1
                                else:
                                    answer.append([nums[a], nums[b], nums[c], nums[d]])
                                    c = c + 1
                                    d = d - 1
                                    while c < d and nums[c] == nums[c-1]:
                                        c = c + 1
                                    while c < d and nums[d] == nums[d+1]:
                                        d = d - 1
                        b = b + 1
                        c = b + 1
                        d = len(nums)-1
                a = a + 1
            return answer
{% endhighlight %}


## 1431. Kids With the Greatest Number of Candies

{% highlight python linenos %}

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxVal = -1
        
        # get max value
        for i in candies:
            if(maxVal < i):
                maxVal = i
                
        answer = []
        # checker
        for i in candies:
            if(i+extraCandies < maxVal):
                answer.append(False)
            else:
                answer.append(True)
        return answer

{% endhighlight %}

## 1128. Number of Equivalent Domino Pairs (Easy)

{% highlight python linenos %}
import math
class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        counter = 0
        tmp = []
        count = {}
        
        for dominoe in dominoes:
            dominoe.sort()
            if (dominoe[0],dominoe[1]) in count:
                count[(dominoe[0],dominoe[1])] += 1
            else:
                count[(dominoe[0],dominoe[1])] = 1
                
        for _, val in count.items():
            if(val > 1):
                counter += math.floor((val*(val-1))/2)
                
        return counter
{% endhighlight %}