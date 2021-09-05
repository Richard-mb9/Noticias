from bson.regex import Regex
from db.config import mongo
from uuid import uuid4
from bson import json_util
from json import loads, dumps
from flask import Response, jsonify
from http import HTTPStatus
from datetime import datetime

class News():
    def __init__(self):
        self.db = mongo('news')
    
    def insert(self, new):
        id = str(uuid4())
        self.db.insert_one({
            "id":id,
            "title":new['title'],
            "content":new['content'],
            "created_at": str(datetime.now()),
            'image': new['image']
        })
        return Response(dumps({'id': id}),status=HTTPStatus.CREATED)

    def list_news(self, filters):
        result =  self.db.find(filters,{'_id': False})
        return jsonify(self.__parse_json(result))

    def count_news(self, filters):
        result =  self.db.find(filters,{'_id': False})
        return len(self.__parse_json(result))
    
    def read_new_by_id(self, id):
        result = self.db.find_one({
            "id":id
        })
        return jsonify(self.__parse_json(result))

    def update_new(self, id, data):
        new_values = {"$set": data}
        self.db.update_one({'id':id},new_values)

    def delete_new(self, id):
        self.db.delete_one({"id": id})

    def __parse_json(self, data):
        return loads(json_util.dumps(data))


            

        

    