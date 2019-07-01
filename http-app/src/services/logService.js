import Raven from 'raven-js';

function init() {
	Raven.config('https://e32a0e8711bb4b49a906e37fb1bc8393@sentry.io/1433102', {
		release: '1-0-0',
		environment: 'development-test'
	}).install();
}

function log(error) {
	Raven.captureException(error);
}

export default {
	init,
	log
};
