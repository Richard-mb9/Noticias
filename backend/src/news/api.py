from http import HTTPStatus
from flask import Blueprint, request
from json import loads

from flask.wrappers import Response

from src.validators.newsValidator import create_news_validator, list_news_validator,update_news_validator
from src.validators.validator import validator
from src.news.news import News
from src.utils.decorators.security import loginRequired

app = Blueprint('news', __name__)

@app.route('/news', methods=['POST'])
@loginRequired
def create_news():
    validator(create_news_validator, loads(request.data))
    return News().insert(loads(request.data))


@app.route('/news', methods=['GET'])
def list_news():
    filters = request.args.to_dict()
    validator(list_news_validator, filters)
    return News().list_news(filters)


@app.route('/news/<id>', methods=['PUT'])
@loginRequired
def update_news(id):
    data = loads(request.data)
    validator(update_news_validator, data)
    News().update_new(id, data)
    return Response(status=HTTPStatus.NO_CONTENT)

@app.route('/news/<id>', methods=["DELETE"])
@loginRequired
def delete_news(id):
    News().delete_new(id)
    return Response(status=HTTPStatus.NO_CONTENT)