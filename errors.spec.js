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
    expect(AuthorizationError.status).toBe(403);
    expect(AuthorizationError.code).toBe(403);
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
    expect(ParamError.status).toBe(200);
    expect(ParamError.code).toBe(200);
    expect(ParamError.stack).toBeDefined();
  });

  it('should create a new error object of the correct type: ExternalAPIError', function () {
    var ExternalAPIError = new errors.ExternalAPIError();

    expect(ExternalAPIError).toEqual(jasmine.any(Object));
    expect(ExternalAPIError.toString()).toBe('ExternalAPIError: External API error');
    expect(ExternalAPIError.name).toBe('ExternalAPIError');
    expect(ExternalAPIError.message).toBe('External API error');
    expect(ExternalAPIError.status).toBe(200);
    expect(ExternalAPIError.code).toBe(200);
    expect(ExternalAPIError.stack).toBeDefined();
  });
});
