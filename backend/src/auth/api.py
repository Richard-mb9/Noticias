from flask import Blueprint, jsonify,request, Response
from src.auth.users import User
from json import loads,dumps
from http import HTTPStatus

from src.validators.usersValidators import create_user_validator, login_validator
from src.validators.validator import validator
from src.utils.auth.Auth import Auth


app = Blueprint('users', __name__)

@app.route('/users', methods=['POST'])
def create_users():
    data = loads(request.data)
    validator(create_user_validator,data)
    return User().insert(data['username'], data['password'], data['email'])


@app.route('/login', methods=['POST'])
def login():
    credentials = loads(request.data)
    validator(login_validator,credentials)
    user = User().read_user_for_login(credentials)
    if user is not None:
        token =  Auth().generateToken({
            'id':user['id'],
            'username': user['username'],
            'email':user['email']
        })
        return jsonify({
            'id':user['id'],
            'username': user['username'],
            'email':user['email'],
            'token': token
            })
    return Response(status=HTTPStatus.UNAUTHORIZED)
    
