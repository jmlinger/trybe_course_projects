def study_schedule(permanence_period, target_time):
    if type(target_time) != int:
        return None
    count = 0
    for time_in, time_out in permanence_period:
        if (type(time_in) != int or
                type(time_out) != int):
            return None
        if time_in <= target_time <= time_out:
            count += 1
    return count
