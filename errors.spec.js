var errors = require('./errors');

describe('Errors collection', function () {
  it('should export all error types', function () {
    expect(errors.AuthenticationError).toEqual(jasmine.any(Function));
    expect(errors.AuthorizationError).toEqual(jasmine.any(Function));
    expect(errors.APIEndpointError).toEqual(jasmine.any(Function));
    expect(errors.ParamError).toEqual(jasmine.any(Function));
    expect(errors.ExternalAPIError).toEqual(jasmine.any(Function));
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
    expect(AuthorizationError.status).toBe(401);
    expect(AuthorizationError.code).toBe(401);
    expect(AuthorizationError.stack).toBeDefined();
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
});
