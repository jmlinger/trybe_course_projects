def is_anagram(first_string, second_string):
    if len(first_string) != len(second_string):
        return False

    first_string = first_string.lower()
    second_string = second_string.lower()

    for letter_f in first_string:
        for letter_s in second_string:
            if letter_f == letter_s:
                second_string = second_string.replace(letter_s, '', 1)
                break
    return len(second_string) == 0
