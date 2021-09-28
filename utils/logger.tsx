import { ISSERVER } from './helpers'
let logger = {};

if (!ISSERVER) {
    logger = (function (clog) {
        return {
            log: function (text: string) {
                clog.log('LOG', text);
            },
            info: function (text: string) {
                clog.info('INFO', text);
            },
            warn: function (text: string) {
                clog.warn('WARNING', text);
            },
            error: function (text: string) {
                clog.error('ERROR', text);
            }
        };
    }(window.console));
}

export default logger;