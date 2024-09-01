"""
Title: Reversed Strings
Difficulty: 8kyu
Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/python
Language attempt: Python
"""


def solution(string: str) -> str:
    result = list(string)
    result.reverse()
    return ''.join(result)
