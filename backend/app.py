from flask_cors import CORS


from src.utils.utils import create_app
from src.auth.api import app as auth_app
from src.news.api import app as news_app
from src.auth.users import User

from db.mocks.createMockNews import CreateMockNews


app = create_app()
CORS(app)

#cria usuario admin quando a aplicação é iniciada pela primeira vez
User().create_admin()

#insere as primeiras noticias no banco
CreateMockNews().insert()

app.register_blueprint(auth_app)
app.register_blueprint(news_app)

if __name__ == '__main__':
    app.run(host='0.0.0.0')





