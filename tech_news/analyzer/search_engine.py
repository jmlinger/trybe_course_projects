from tech_news.database import search_news
from datetime import datetime


def ignore_case(string):
    return {"$regex": string, "$options": "i"}


# Requisito 6
def search_by_title(title):
    query = {"title": ignore_case(title)}
    news_list = search_news(query)

    return [(news["title"], news["url"]) for news in news_list]


# Requisito 7
def search_by_date(date):
    try:
        datetime.strptime(date, "%Y-%m-%d")
        query = {"timestamp": ignore_case(date)}
        news_list = search_news(query)

        return [(news["title"], news["url"]) for news in news_list]
    except ValueError:
        raise ValueError('Data inválida')


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
