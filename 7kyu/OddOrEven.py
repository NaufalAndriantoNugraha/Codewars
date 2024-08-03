"""
Title: Odd or Even?
Difficulty: 7kyu
Link: https://www.codewars.com/kata/5949481f86420f59480000e7/python
Language attempt: Python
"""


def odd_or_even(arr):
    if (sum(arr) % 2 == 0):
        return "even"
    else:
        return "odd"
