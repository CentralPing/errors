var errors = require('./errors');

describe('Errors collection', function () {
  it('should export all error types', function () {
    expect(errors.APIEndpointError).toEqual(jasmine.any(Function));
    expect(errors.APINotAcceptableError).toEqual(jasmine.any(Function));
    expect(errors.APIUnavailableError).toEqual(jasmine.any(Function));
    expect(errors.AuthenticationError).toEqual(jasmine.any(Function));
    expect(errors.AuthorizationError).toEqual(jasmine.any(Function));
    expect(errors.ExternalAPITimeoutError).toEqual(jasmine.any(Function));
    expect(errors.InternalAPIError).toEqual(jasmine.any(Function));
    expect(errors.ParamError).toEqual(jasmine.any(Function));
  });

  it('should create a new error object of the correct type: APIEndpointError', function () {
    var APIEndpointError = new errors.APIEndpointError();

    expect(APIEndpointError).toEqual(jasmine.any(Object));
    expect(APIEndpointError.toString()).toBe('APIEndpointError: API endpoint error');
    expect(APIEndpointError.name).toBe('APIEndpointError');
    expect(APIEndpointError.message).toBe('API endpoint error');
    expect(APIEndpointError.status).toBe(405);
    expect(APIEndpointError.code).toBe(405);
    expect(APIEndpointError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: APINotAcceptableError', function () {
    var APINotAcceptableError = new errors.APINotAcceptableError();

    expect(APINotAcceptableError).toEqual(jasmine.any(Object));
    expect(APINotAcceptableError.toString()).toBe('APINotAcceptableError: API Not Acceptable error');
    expect(APINotAcceptableError.name).toBe('APINotAcceptableError');
    expect(APINotAcceptableError.message).toBe('API Not Acceptable error');
    expect(APINotAcceptableError.status).toBe(406);
    expect(APINotAcceptableError.code).toBe(406);
    expect(APINotAcceptableError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: APIUnavailableError', function () {
    var APIUnavailableError = new errors.APIUnavailableError();

    expect(APIUnavailableError).toEqual(jasmine.any(Object));
    expect(APIUnavailableError.toString()).toBe('APIUnavailableError: API Unavailable error');
    expect(APIUnavailableError.name).toBe('APIUnavailableError');
    expect(APIUnavailableError.message).toBe('API Unavailable error');
    expect(APIUnavailableError.status).toBe(503);
    expect(APIUnavailableError.code).toBe(503);
    expect(APIUnavailableError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: AuthenticationError', function () {
    var AuthenticationError = new errors.AuthenticationError();

    expect(AuthenticationError).toEqual(jasmine.any(Object));
    expect(AuthenticationError.toString()).toBe('AuthenticationError: Authentication error');
    expect(AuthenticationError.name).toBe('AuthenticationError');
    expect(AuthenticationError.message).toBe('Authentication error');
    expect(AuthenticationError.status).toBe(401);
    expect(AuthenticationError.code).toBe(401);
    expect(AuthenticationError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: AuthorizationError', function () {
    var AuthorizationError = new errors.AuthorizationError();

    expect(AuthorizationError).toEqual(jasmine.any(Object));
    expect(AuthorizationError.toString()).toBe('AuthorizationError: Authorization error');
    expect(AuthorizationError.name).toBe('AuthorizationError');
    expect(AuthorizationError.message).toBe('Authorization error');
    expect(AuthorizationError.status).toBe(403);
    expect(AuthorizationError.code).toBe(403);
    expect(AuthorizationError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: ExternalAPITimeoutError', function () {
    var ExternalAPITimeoutError = new errors.ExternalAPITimeoutError();

    expect(ExternalAPITimeoutError).toEqual(jasmine.any(Object));
    expect(ExternalAPITimeoutError.toString()).toBe('ExternalAPITimeoutError: External API Timeout error');
    expect(ExternalAPITimeoutError.name).toBe('ExternalAPITimeoutError');
    expect(ExternalAPITimeoutError.message).toBe('External API Timeout error');
    expect(ExternalAPITimeoutError.status).toBe(504);
    expect(ExternalAPITimeoutError.code).toBe(504);
    expect(ExternalAPITimeoutError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: ExternalAPIError', function () {
    var ExternalAPIError = new errors.ExternalAPIError();

    expect(ExternalAPIError).toEqual(jasmine.any(Object));
    expect(ExternalAPIError.toString()).toBe('ExternalAPIError: External API error');
    expect(ExternalAPIError.name).toBe('ExternalAPIError');
    expect(ExternalAPIError.message).toBe('External API error');
    expect(ExternalAPIError.status).toBe(502);
    expect(ExternalAPIError.code).toBe(502);
    expect(ExternalAPIError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: InternalAPIError', function () {
    var InternalAPIError = new errors.InternalAPIError();

    expect(InternalAPIError).toEqual(jasmine.any(Object));
    expect(InternalAPIError.toString()).toBe('InternalAPIError: Internal API error');
    expect(InternalAPIError.name).toBe('InternalAPIError');
    expect(InternalAPIError.message).toBe('Internal API error');
    expect(InternalAPIError.status).toBe(500);
    expect(InternalAPIError.code).toBe(500);
    expect(InternalAPIError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: NotFoundError', function () {
    var ExternalAPITimeoutError = new errors.NotFoundError();

    expect(ExternalAPITimeoutError).toEqual(jasmine.any(Object));
    expect(ExternalAPITimeoutError.toString()).toBe('NotFoundError: Not Found error');
    expect(ExternalAPITimeoutError.name).toBe('NotFoundError');
    expect(ExternalAPITimeoutError.message).toBe('Not Found error');
    expect(ExternalAPITimeoutError.status).toBe(404);
    expect(ExternalAPITimeoutError.code).toBe(404);
    expect(ExternalAPITimeoutError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: ParamError', function () {
    var ParamError = new errors.ParamError();

    expect(ParamError).toEqual(jasmine.any(Object));
    expect(ParamError.toString()).toBe('ParamError: Parameter error');
    expect(ParamError.name).toBe('ParamError');
    expect(ParamError.message).toBe('Parameter error');
    expect(ParamError.status).toBe(400);
    expect(ParamError.code).toBe(400);
    expect(ParamError.stack).toBeDefined();
  });
});
