import requests
from parsel import Selector
import time

base_url = "https://www.tecmundo.com.br/novidades"


# Requisito 1
def fetch(url, timeout=3):
    time.sleep(1)
    try:
        response = requests.get(url, timeout=timeout)
    except requests.Timeout:
        return None
    if response.status_code != 200:
        return None
    else:
        return response.text


# Requisito 2
def scrape_novidades(html_content):
    selector = Selector(text=html_content)
    return selector.css("h3.tec--card__title a::attr(href)").getall()


# Requisito 3
def scrape_next_page_link(html_content):
    """Seu código deve vir aqui"""


# Requisito 4
def scrape_noticia(html_content):
    """Seu código deve vir aqui"""


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
