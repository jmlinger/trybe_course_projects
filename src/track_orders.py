from collections import Counter


class TrackOrders:
    def __init__(self):
        self.orders = []

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, customer, order, day):
        self.orders.append({'customer': customer, 'order': order, 'day': day})

    def get_most_ordered_dish_per_customer(self, customer):
        purchased_products = [
            item['order']
            for item in self.orders if item['customer'] == customer
        ]
        return Counter(purchased_products).most_common(1)[0][0]

    def get_never_ordered_per_customer(self, customer):
        all_products = [
            item['order'] for item in self.orders
        ]
        purchased_products = [
            item['order']
            for item in self.orders if item['customer'] == customer
        ]
        unique_all_products = set(list(Counter(all_products)))
        unique_purchased_products = set(list(Counter(purchased_products)))

        return unique_all_products.difference(unique_purchased_products)

    def get_days_never_visited_per_customer(self, customer):
        all_days = [
            item['day'] for item in self.orders
        ]
        visited_days = [
            item['day']
            for item in self.orders if item['customer'] == customer
        ]
        unique_all_days = set(list(Counter(all_days)))
        unique_visited_days = set(list(Counter(visited_days)))
        return unique_all_days.difference(unique_visited_days)

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
