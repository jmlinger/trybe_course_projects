def study_schedule(permanence_period, target_time):
    count = 0
    try:
        for time_in, time_out in permanence_period:
            if time_in <= target_time <= time_out:
                count += 1
        return count
    except TypeError:
        return None
