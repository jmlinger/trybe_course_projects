from src.jobs import read


def get_unique_job_types(path):
    jobs_list = read(path)
    job_types = []
    for row in jobs_list:
        job_type = row["job_type"]
        job_types.append(job_type)
    unique_job_types = list(dict.fromkeys(job_types))
    # O método dict.fromkeys da classe dict obtem valores unicos de uma lista.
    # Este método preserva a ordem original dos elementos e mantém apenas
    # o primeiro elemento das duplicatas.
    return unique_job_types


def filter_by_job_type(jobs, job_type):
    jobs_filtered_by_type = []
    for job in jobs:
        if job["job_type"] == job_type:
            jobs_filtered_by_type.append(job)
    return jobs_filtered_by_type


def get_unique_industries(path):
    jobs_list = read(path)
    industries = []
    for row in jobs_list:
        industry = row["industry"]
        if not industry == '':
            industries.append(industry)
    unique_industries = list(dict.fromkeys(industries))
    return unique_industries


def filter_by_industry(jobs, industry):
    jobs_filtered_by_industry = []
    for job in jobs:
        if job["industry"] == industry:
            jobs_filtered_by_industry.append(job)
    return jobs_filtered_by_industry


def get_max_salary(path):
    jobs_list = read(path)
    salaries = []
    for row in jobs_list:
        salary = row["max_salary"]
        if salary.isnumeric():
            salaries.append(int(salary))
    max_salary = max(salaries, key=int)
    pass
    return max_salary


def get_min_salary(path):
    jobs_list = read(path)
    salaries = []
    for row in jobs_list:
        salary = row["min_salary"]
        if salary.isnumeric():
            salaries.append(int(salary))
    min_salary = min(salaries, key=int)
    pass
    return min_salary


def matches_salary_range(job, salary):
    if ("max_salary" or "min_salary") not in job:
        raise ValueError
    elif type(job["max_salary"]) != int or type(job["min_salary"]) != int:
        raise ValueError
    elif job["min_salary"] > job["max_salary"]:
        raise ValueError
    elif type(salary) != int:
        raise ValueError
    else:
        return (job["min_salary"] <= salary and salary <= job["max_salary"])


def filter_by_salary_range(jobs, salary):
    jobs_filtered_by_salary = []
    for job in jobs:
        try:
            if matches_salary_range(job, salary):
                jobs_filtered_by_salary.append(job)
        except ValueError:
            pass
    return jobs_filtered_by_salary
