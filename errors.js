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
  this.status = status || 403;
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
  this.status = status || 200;
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
  this.status = status || 200;
  this.code = code || this.status;

  Error.captureStackTrace(this, ExternalAPIError);
}
// ParamError instanceof Error
util.inherits(ExternalAPIError, Error);

module.exports.ExternalAPIError = ExternalAPIError;

function format(message) {
  if (_.isArray(message)) {
    return util.format.apply(null, message);
  }

  return message;
}
