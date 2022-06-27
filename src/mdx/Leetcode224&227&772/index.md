---
title: "LeetCode Solution 224 & 227 & 772"
date: "2022-05-25"
description: "Recursion Java Solution for LeetCode 224 & 227 & 772"
---
We can sparate this problem into several small problems.

1. how to transfer string to interger.
2. how to build up a calculator with the function addition and substraction.
3. add the multiplication and division to the calculator
4. how to handle the paretheses in expressions.(using recursion)

```clike
public class Solution {
	public int calculate(String s) {
		return realCalculate(s,0)[0];
	}
	public int[] realCalculate(String s, int beginIndex) {
		char sign = '+';
		int num = 0;
		Deque<Integer> deque = new LinkedList<>();
		int i = beginIndex;
		for(i = beginIndex; i < s.length(); i++){
			char tmp = s.charAt(i);
			if(tmp=='('){
				int[] arr = realCalculate(s,i+1);
				// arr[0] is the result of the expression between paretheses
				// arr[1] is the index of the ')'
				num = arr[0];
				i = arr[1];
				// when we finish the recursion, we don't need to refresh the value 'tmp', 
				// we only need to refresh the value 'i', in the next loop we will start from the character behind ')'
				// so the value of 'tmp' is still '('
			}

			if (Character.isDigit(tmp)) {
				num = num * 10 + (tmp - '0');
			}
			if ((!Character.isDigit(tmp) && tmp !=' ') || i == s.length() - 1) {
			// when do we add the num into deque?
			// scene1. at the time we meet the operator '+', '-', '*' , '/'
			// scene2. at the time we meet the last charactor of the string
			// scene3. at the time we read the last character in the paretheses , when the value of 'tmp' is ')'
			// scene4. at the time we jump out of the recursion , when the value of 'tmp' is '('
				switch (sign) {
					case '+':
						deque.offerLast(num);
						break;
					case '-':
						deque.offerLast(-num);
						break;
					case '*':
                    deque.offerLast(deque.pollLast() * num);
						break;
					case '/':
						deque.offerLast(deque.pollLast() / num);
						break;
				}
				// Besides scene4， 'sign' will be assigned to '+' '-' '*' '/'
				// at scene4, 'sign' will be assigned to '('. But it doesn't matter, in the next loop the value will be replaced to scene1 or scene2. 
				sign = tmp;
				num = 0;
			}

			if(tmp==')'){
				break;
			}
		}

		int result = 0;
		while(!deque.isEmpty()){
			result += deque.pollFirst();
		}
		return new int[]{result, i};
	}
}
```
