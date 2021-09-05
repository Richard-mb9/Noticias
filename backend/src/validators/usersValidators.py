create_user_validator = {
    'username':{
        'type': 'string',
        'required': True
    },
    'password':{
        'type': 'string',
        'required': True
    },
    'email':{
        'type': 'string',
        'required': True
    }
}


login_validator = {
    'username':{
        'type': 'string',
    },
    'password':{
        'type': 'string',
        'required': True
    },
    'email':{
        'type': 'string',
    }
}
