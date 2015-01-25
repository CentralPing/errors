var util = require('util');
var _ = require('lodash-node/modern');

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
  this.status = status || 401;
  this.code = code || this.status;

  Error.captureStackTrace(this, AuthorizationError);
}
// AuthorizationError instanceof Error
util.inherits(AuthorizationError, Error);

module.exports.AuthorizationError = AuthorizationError;

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

function format(message) {
  if (_.isArray(message)) {
    return util.format.apply(null, message);
  }

  return message;
}
