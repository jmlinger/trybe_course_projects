from src.sorting import sort_by


def test_sort_by_criteria():
    jobs = [
        {"min_salary": 1000, "max_salary": 5000, "date_posted": "2019-01-01"},
        {"min_salary": 2000, "max_salary": 6000, "date_posted": "2020-01-01"},
        {"min_salary": 3000, "max_salary": 7000, "date_posted": "2021-01-01"},
    ]

    sort_by(jobs, "min_salary")
    assert jobs[0]["min_salary"] == 1000

    sort_by(jobs, "max_salary")
    assert jobs[0]["max_salary"] == 7000

    sort_by(jobs, "date_posted")
    assert jobs[0]["date_posted"] == "2021-01-01"
