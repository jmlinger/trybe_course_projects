from functools import lru_cache
import csv


@lru_cache
def read(path):
    with open(path) as file:
        file_reader = csv.DictReader(file)
        rows = []
        for row in file_reader:
            rows.append(row)
    return rows
