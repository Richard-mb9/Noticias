import os
from json import loads
from src.news.news import News


class CreateMockNews():
    def insert(self):
        hasNews = News().count_news({})
        if hasNews == 0:
            print('Registering news')
            path = os.path.abspath('db/mocks/news.json')
            arq = open(path,'r')
            data = loads(arq.read())
            for item in data:
                News().insert(item)
        else:
            print('News already registered')