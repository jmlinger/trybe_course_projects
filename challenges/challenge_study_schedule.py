def study_schedule(permanence_period, target_time):
    count = 0
    for period in permanence_period:
        if (type(target_time) is not int or
                type(period[0]) is not int or
                type(period[1]) is not int):
            count = 0
            break
        if period[0] <= target_time <= period[1]:
            count += 1
    if count == 0:
        return None
    else:
        return count
