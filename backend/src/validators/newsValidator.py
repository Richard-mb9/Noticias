create_news_validator = {
    'title':{
        'type': 'string',
        'required': True,
        "empty": False
    },
    'content':{
        'type': 'string',
        'required': True,
        "empty": False
    },
    'image':{
        'type': 'string',
        'required': True,
        "empty": False
    },
}

update_news_validator = {
    'title':{
        'type': 'string',
        'required': True,
        "empty": False
    },
    'content':{
        'type': 'string',
        'required': True,
        "empty": False
    },
    'image':{
        'type': 'string',
        'required': True,
        "empty": False
    },
}

list_news_validator = {
    'title':{
        'type': 'string',
    }
}

