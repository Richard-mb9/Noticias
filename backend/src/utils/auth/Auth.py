import jwt
from src.utils.utils import getEnv

class Auth:
    def decodeToken(self, token):
        return jwt.decode(token,getSecretKey(),algorithms=['HS256'])

    def generateToken(self, data):
        key = getSecretKey()
        return jwt.encode(data,key,algorithm="HS256")

def getSecretKey():
    return getEnv('secretkey')
