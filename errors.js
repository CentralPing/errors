var util = require('util');
var _ = require('lodash');

// APIEndpointError
function APIEndpointError(message, status, code) {
  this.name = 'APIEndpointError';
  this.message = (message && format(message)) || 'API endpoint error';
  this.status = status || 405;
  this.code = code || this.status;

  Error.captureStackTrace(this, APIEndpointError);
}
// APIEndpointError instanceof Error
util.inherits(APIEndpointError, Error);

module.exports.APIEndpointError = APIEndpointError;

// APINotAcceptableError
function APINotAcceptableError(message, status, code) {
  this.name = 'APINotAcceptableError';
  this.message = (message && format(message)) || 'API Not Acceptable error';
  this.status = status || 406;
  this.code = code || this.status;

  Error.captureStackTrace(this, APINotAcceptableError);
}
// APINotAcceptableError instanceof Error
util.inherits(APINotAcceptableError, Error);

module.exports.APINotAcceptableError = APINotAcceptableError;

// APIUnavailableError
function APIUnavailableError(message, status, code) {
  this.name = 'APIUnavailableError';
  this.message = (message && format(message)) || 'API Unavailable error';
  this.status = status || 503;
  this.code = code || this.status;

  Error.captureStackTrace(this, APIUnavailableError);
}
// APIUnavailableError instanceof Error
util.inherits(APIUnavailableError, Error);

module.exports.APIUnavailableError = APIUnavailableError;

// AuthenticationError
function AuthenticationError(message, status, code) {
  this.name = 'AuthenticationError';
  this.message = (message && format(message)) || 'Authentication error';
  this.status = status || 401;
  this.code = code || this.status;

  Error.captureStackTrace(this, AuthenticationError);
}
// AuthenticationError instanceof Error
util.inherits(AuthenticationError, Error);

module.exports.AuthenticationError = AuthenticationError;

// AuthorizationError
function AuthorizationError(message, status, code) {
  this.name = 'AuthorizationError';
  this.message = (message && format(message)) || 'Authorization error';
  this.status = status || 403;
  this.code = code || this.status;

  Error.captureStackTrace(this, AuthorizationError);
}
// AuthorizationError instanceof Error
util.inherits(AuthorizationError, Error);

module.exports.AuthorizationError = AuthorizationError;

// ExternalAPIError
function ExternalAPIError(message, status, code) {
  this.name = 'ExternalAPIError';
  this.message = (message && format(message)) || 'External API error';
  this.status = status || 502;
  this.code = code || this.status;

  Error.captureStackTrace(this, ExternalAPIError);
}
// ExternalAPIError instanceof Error
util.inherits(ExternalAPIError, Error);

module.exports.ExternalAPIError = ExternalAPIError;

// ExternalAPITimeoutError
function ExternalAPITimeoutError(message, status, code) {
  this.name = 'ExternalAPITimeoutError';
  this.message = (message && format(message)) || 'External API Timeout error';
  this.status = status || 504;
  this.code = code || this.status;

  Error.captureStackTrace(this, ExternalAPITimeoutError);
}
// ExternalAPITimeoutError instanceof Error
util.inherits(ExternalAPITimeoutError, Error);

module.exports.ExternalAPITimeoutError = ExternalAPITimeoutError;

// ExternalAPIError
function InternalAPIError(message, status, code) {
  this.name = 'InternalAPIError';
  this.message = (message && format(message)) || 'Internal API error';
  this.status = status || 500;
  this.code = code || this.status;

  Error.captureStackTrace(this, InternalAPIError);
}
// InternalAPIError instanceof Error
util.inherits(InternalAPIError, Error);

module.exports.InternalAPIError = InternalAPIError;

// NotFoundError
function NotFoundError(message, status, code) {
  this.name = 'NotFoundError';
  this.message = (message && format(message)) || 'Not Found error';
  this.status = status || 404;
  this.code = code || this.status;

  Error.captureStackTrace(this, NotFoundError);
}
// NotFoundError instanceof Error
util.inherits(NotFoundError, Error);

module.exports.NotFoundError = NotFoundError;

// ParamError
function ParamError(message, status, code) {
  this.name = 'ParamError';
  this.message = (message && format(message)) || 'Parameter error';
  this.status = status || 400;
  this.code = code || this.status;

  Error.captureStackTrace(this, ParamError);
}
// ParamError instanceof Error
util.inherits(ParamError, Error);

module.exports.ParamError = ParamError;

function format(message) {
  if (_.isArray(message)) {
    return util.format.apply(null, message);
  }

  return message;
}
