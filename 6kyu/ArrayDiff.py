"""
Title: Array.Diff
Difficulty: 6kyu
Link: https://www.codewars.com/kata/523f5d21c841566fde000009/python
Language attempt: Python
"""

def array_diff(list, target):
    if len(list) == 0:
        return []
    
    result = []
    for element in list:
        if not element in target:
            result.append(element)
    return result
