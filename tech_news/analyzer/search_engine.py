from tech_news.database import search_news


def ignore_case(string):
    return {"$regex": string, "$options": "i"}


# Requisito 6
def search_by_title(title):
    query = {"title": ignore_case(title)}
    news_list = search_news(query)

    return [(news["title"], news["url"]) for news in news_list]


# Requisito 7
def search_by_date(date):
    """Seu código deve vir aqui"""


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
