class ApiError(Exception):
    """Base error class"""

    def __init__(self, status_code, message):
        super(ApiError, self).__init__()
        self.status_code = status_code
        self.message = message


class InternalServerError(ApiError):
    """Internal server error"""

    def __init__(self, message):
        super(InternalServerError, self).__init__(500, message)


class NotFoundError(ApiError):
    """Not found"""

    def __init__(self, message):
        super(NotFoundError, self).__init__(404, message)


class BadRequestError(ApiError):
    """Bad request"""

    def __init__(self, message):
        super(BadRequestError, self).__init__(400, message)


class RequestTimeoutError(ApiError):
    """Request timeout"""

    def __init__(self, message):
        super(RequestTimeoutError, self).__init__(408, message)


class UnsupportedMediaTypeError(ApiError):
    """Unsupported media type timeout"""

    def __init__(self):
        super(UnsupportedMediaTypeError, self).__init__(
            415, "Content-Type not informed or not supported"
        )


class UnauthorizedError(ApiError):
    """Unauthorized access error"""

    def __init__(self, message="Not authorized"):
        super(UnauthorizedError, self).__init__(
            401, message
        )


class AccessDeniedError(ApiError):
    """Access denied error"""

    def __init__(self, message="Access denied"):
        super(AccessDeniedError, self).__init__(
            403, message
        )


class ConflictError(ApiError):
    """Conflict error"""

    def __init__(self, message):
        super(ConflictError, self).__init__(
            409, message
        )


class UnprocessableEntityError(ApiError):
    """Unprocessable entity error"""

    def __init__(self, message):
        super(UnprocessableEntityError, self).__init__(
            422, message
        )


class ServiceUnavailableError(ApiError):
    """Service Temporarily Unavailable error"""

    def __init__(self, message):
        super(ServiceUnavailableError, self).__init__(503, message)

