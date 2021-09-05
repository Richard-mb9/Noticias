from pymongo import MongoClient
from src.utils.utils import getEnv
import os

def mongo(collection, db="news"):
    user = getEnv('mongouser')
    password = getEnv('mongopassword')
    port = getEnv('mongoport')
    host = getEnv('mongohost')
    client = MongoClient(f'mongodb://{user}:{password}@{host}:{port}')
    return client[db][collection]