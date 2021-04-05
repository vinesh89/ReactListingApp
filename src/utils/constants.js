import strings from '../localization/en.json';
export const APIErrorStatusCodes = new Set([
	400, //Bad Request
	404, //Not Found,
	405, //Method Not Allowed
	406, //Not Acceptable
	408, //Request Timeout 
	500, //Internal Server Error
	501, //Not Implemented
	502, //Bad Gateway
	503, //Service Unavailable
	504, //Gateway Timeout
]);

export const ErrorMessageForErrorStatus = (status) => {
    if (APIErrorStatusCodes.has(status)) {
        return {
            title: strings.could_not_load_title,
            body: strings.could_not_load_body
        }
    }

    return {
        title: strings.network_error_title,
        body: strings.network_error_body
    }
}