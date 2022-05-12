import csv
from collections import Counter


def read_file(path):
    try:
        with open(path, 'r') as file:
            file_reader = csv.DictReader(
                file,
                delimiter=',',
                fieldnames=('client_name', 'purchased_product', 'day_of_week')
            )
            file_data = list(file_reader)
            return file_data
    except FileNotFoundError:
        if not path.endswith('.csv'):
            raise FileNotFoundError(f'Extensão inválida: {path}')
        raise FileNotFoundError(f'Arquivo inexistente: {path}')


def most_ordered_dish(customer, data):
    purchased_products = [
        item['purchased_product']
        for item in data if item['client_name'] == customer
    ]
    return Counter(purchased_products).most_common(1)[0][0]


def hamburguers_count(customer, data):
    purchased_products = [
        item['purchased_product']
        for item in data if item['client_name'] == customer
    ]

    return Counter(purchased_products)['hamburguer']


def never_ordered_dishes(customer, data):
    all_products = [
        item['purchased_product'] for item in data
    ]
    purchased_products = [
        item['purchased_product']
        for item in data if item['client_name'] == customer
    ]
    unique_all_products = set(list(Counter(all_products)))
    unique_purchased_products = set(list(Counter(purchased_products)))

    return unique_all_products.difference(unique_purchased_products)


def never_come_days(customer, data):
    all_days = [
        item['day_of_week'] for item in data
    ]
    visited_days = [
        item['day_of_week']
        for item in data if item['client_name'] == customer
    ]
    unique_all_days = set(list(Counter(all_days)))
    unique_visited_days = set(list(Counter(visited_days)))
    return unique_all_days.difference(unique_visited_days)


def write_file(data):
    marias_most_ordered_dish = most_ordered_dish('maria', data)
    arnaldos_hamburguers_count = hamburguers_count('arnaldo', data)
    joaos_never_ordered_dishes = never_ordered_dishes('joao', data)
    joaos_never_come_days = never_come_days('joao', data)

    with open('data/mkt_campaign.txt', 'w') as file:
        file.write(
            f'{marias_most_ordered_dish}\n'
            f'{arnaldos_hamburguers_count}\n'
            f'{joaos_never_ordered_dishes}\n'
            f'{joaos_never_come_days}'
        )


def analyze_log(path_to_file):
    file_data = read_file(path_to_file)
    write_file(file_data)
