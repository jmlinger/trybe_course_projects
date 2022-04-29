def is_palindrome_iterative(word):
    if len(word) == 0:
        return False
    if word != word[::-1]:
        return False
    else:
        return True
