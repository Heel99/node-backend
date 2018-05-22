const CODE = {
	BadDigest: 400,
	BadMethod: 405,
	Internal: 500,
	InvalidArgument: 409,
	InvalidContent: 400,
	InvalidCredentials: 401,
	InvalidHeader: 400,
	InvalidVersion: 400,
	MissingParameter: 409,
	NotAuthorized: 403,
	PreconditionFailed: 412,
	RequestExpired: 400,
	RequestThrottled: 429,
	ResourceNotFound: 404,
	WrongAccept: 406,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	RequestEntityTooLarge: 413,
	RequesturiTooLarge: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	RequestedRangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	UnorderedCollection: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	InternalServer: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	BandwidthLimitExceeded: 509,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	success: 200
};

export default CODE;