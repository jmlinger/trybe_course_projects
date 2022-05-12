import csv


def analyze_log(path_to_file):
    if not path_to_file.endswith('csv'):
        raise FileNotFoundError(f'Extensão inválida: {path_to_file}')
    try:
        with open(path_to_file) as file:
            content = []
            for line in csv.DictReader(
                file, fieldnames=('name', 'meal', 'day')
            ):
                content.append(line)

        maria_most_ordered_meal = maria_most_ordered(content)
        arnaldo_hamburguer_count = arnaldo_count(content)
        joao_never_ordered_meal = joao_never_ordered(content)
        days_joao_never_come = joao_missing_days(content)

        with open('data/mkt_campaign.txt', 'w') as file:
            file.write(
                f'{maria_most_ordered_meal}\n'
                f'{arnaldo_hamburguer_count}\n'
                f'{joao_never_ordered_meal}\n'
                f'{days_joao_never_come}'
            )
    except FileNotFoundError:
        raise FileNotFoundError(f'Arquivo inexistente: {path_to_file}')


def maria_most_ordered(info):
    maria_orders = [item for item in info if item['name'] == 'maria']
    all_maria_meals = dict()
    most_ordered = maria_orders[0]['meal']
    for order in maria_orders:
        if order['meal'] not in all_maria_meals:
            all_maria_meals[order['meal']] = 1
        else:
            all_maria_meals[order['meal']] += 1
        if all_maria_meals[order['meal']] > all_maria_meals[most_ordered]:
            most_ordered = order['meal']
    return most_ordered


def arnaldo_count(info):
    arnaldo_orders = [item for item in info if item['name'] == 'arnaldo']
    hamburguer_count = 0
    for order in arnaldo_orders:
        if order['meal'] == 'hamburguer':
            hamburguer_count += 1
    return hamburguer_count


def joao_never_ordered(info):
    all_meals = set()
    for order in info:
        all_meals.add(order['meal'])
    joao_orders = [item for item in info if item['name'] == 'joao']
    joao_meals = set()
    for order in joao_orders:
        joao_meals.add(order['meal'])
    return all_meals.difference(joao_meals)


def joao_missing_days(info):
    all_days = set()
    for order in info:
        all_days.add(order['day'])
    joao_orders = [item for item in info if item['name'] == 'joao']
    joao_days = set()
    for order in joao_orders:
        joao_days.add(order['day'])
    return all_days.difference(joao_days) 