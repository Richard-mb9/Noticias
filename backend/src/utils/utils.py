from flask import Flask
import os
from json import loads

def create_app():
    app = Flask(__name__)
    return app


def getEnv(key):
    try:
        path = os.path.abspath('env.json')
        arq = open(path,'r')
        j = loads(arq.read())
        return str(j[key])
    except:
        try:
            return os.environ[key]
        except:
            raise Exception(f'Environment variable {key} not found')
