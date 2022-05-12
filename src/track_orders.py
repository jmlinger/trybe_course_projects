class TrackOrders:
    # aqui deve expor a quantidade de estoque
    def __init__(self):
        self.orders = []

    def __len__(self):
        pass
        return len(self.orders)

    def add_new_order(self, customer, order, day):
        pass
        self.orders.append({'customer': customer, 'order': order, 'day': day})

    def get_most_ordered_dish_per_customer(self, customer):
        pass
        customer_orders = [
            item for item in self.orders if item['customer'] == customer
        ]
        all_orders = dict()
        most_ordered = customer_orders[0]['order']
        for order in customer_orders:
            if order['order'] not in all_orders:
                all_orders[order['order']] = 1
            else:
                all_orders[order['order']] += 1
            if all_orders[order['order']] > all_orders[most_ordered]:
                most_ordered = order['order']
        return most_ordered

    def get_never_ordered_per_customer(self, customer):
        pass
        all_dishes = set()
        for order in self.orders:
            all_dishes.add(order['order'])
        customer_orders = [
            item for item in self.orders if item['customer'] == customer
        ]
        customer_dishes = set()
        for order in customer_orders:
            customer_dishes.add(order['order'])
        return all_dishes.difference(customer_dishes)

    def get_days_never_visited_per_customer(self, customer):
        pass
        all_days = set()
        for order in self.orders:
            all_days.add(order['day'])
        customer_orders = [
            item for item in self.orders if item['customer'] == customer
        ]
        customer_days = set()
        for order in customer_orders:
            customer_days.add(order['day'])
        return all_days.difference(customer_days)

    def get_busiest_day(self):
        pass
        all_orders = [item for item in self.orders]
        all_days = dict()
        most_busiest = all_orders[0]['day']
        for order in all_orders:
            if order['day'] not in all_days:
                all_days[order['day']] = 1
            else:
                all_days[order['day']] += 1
            if all_days[order['day']] > all_days[most_busiest]:
                most_busiest = order['day']
        return most_busiest

    def get_least_busy_day(self):
        pass
        all_orders = [item for item in self.orders]
        all_days = dict()
        least_busiest = all_orders[0]['day']
        for order in all_orders:
            if order['day'] not in all_days:
                all_days[order['day']] = 1
            else:
                all_days[order['day']] += 1
            if all_days[order['day']] < all_days[least_busiest]:
                least_busiest = order['day']
        return least_busiest