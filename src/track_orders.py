from analyze_log import (
    most_ordered_dish,
    never_come_days,
    never_ordered_dishes
)


class TrackOrders:
    def __init__(self):
        self.orders = []

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, customer, order, day):
        self.orders.append({'customer': customer, 'order': order, 'day': day})

    def get_most_ordered_dish_per_customer(self, customer):
        return most_ordered_dish(customer, self.orders)

    def get_never_ordered_per_customer(self, customer):
        return never_ordered_dishes(customer, self.orders)

    def get_days_never_visited_per_customer(self, customer):
        return never_come_days(customer, self.orders)

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
