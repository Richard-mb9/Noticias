import hashlib
from db.config import mongo
from uuid import uuid4
from bson import json_util
from json import loads
from flask import Response, jsonify
from http import HTTPStatus


class User():
    def __init__(self):
        self.db = mongo('users', 'auth')
        
    def insert(self, username, password, email):
        id = str(uuid4())
        password_encoded = self.__encode_password(password)
        if self.read_user_by_username(username):
            return Response(response='username already exists', status=HTTPStatus.CONFLICT)
        if self.read_user_by_email(email):
            return Response(response='email already exists', status=HTTPStatus.CONFLICT)
        self.db.insert_one({
            "id":id,
            "username":username,
            "password":password_encoded,
            "email": email
        })
        return jsonify({'id':id})
    
    def read_user_for_login(self, credentials):
        user =  self.db.find_one({
            '$or': [
                {
                    'username': credentials.get('username'), 
                    'password': self.__encode_password(credentials['password'])
                }, 
                {
                    'email': credentials.get('username'), 
                    'password': self.__encode_password(credentials['password'])
                }, 
            ]
        })
        return self.__parse_json(user)
    
    def read_user_by_username(self, username):
        return self.db.find_one({
            'username':username
        })

    def read_user_by_email(self,email):
        return self.db.find_one({
            'email':email
        })

    def __encode_password(self, password):
        password_encoded = hashlib.md5(password.encode())
        return password_encoded.hexdigest()

    def __parse_json(self, data):
        return loads(json_util.dumps(data))

    #cria usuario admin quando a aplicação é iniciada pela primeira vez
    def create_admin(self):
        if self.read_user_by_username('admin'):
            print('user admin already exists')
            return
        id = str(uuid4())
        self.db.insert_one({
            "id":id,
            "username":'admin',
            "password":self.__encode_password('admin'),
            "email": 'admin@admin.com'
        })