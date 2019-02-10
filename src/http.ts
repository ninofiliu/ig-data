let http: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
try {
    http = window.fetch;
} catch(_) {
    http = require('node-fetch').default;
}

export default http;