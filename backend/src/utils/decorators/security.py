from functools import wraps
from flask import Response, request
from http import HTTPStatus

from src.utils.auth.Auth import Auth


def loginRequired(func):
    @wraps(func)
    def decoretedFunction(*args, **kwargs):
        token = request.headers.get('token')
        if not token:
            return Response("token is required",status=HTTPStatus.UNAUTHORIZED)
        try:
            Auth().decodeToken(token)
        except:
            return Response("token is invalid or expired",status=HTTPStatus.UNAUTHORIZED)
        return func(*args, **kwargs)
    return decoretedFunction