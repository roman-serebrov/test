class Api {
    constructor() {

    }

    get_api_path(user, template) {
        let result = ''
        result = template.replace(/%(\w+)%/g, (match, key) => {
            return encodeURI(user[key])
        })
        return result
    }
}

let user =
    {
        id		: 20,
        name	: 'John Dow',
        role	: 'QA',
        salary	: 100
    };

let api_path_templates = [
    "/api/items/%id%/%name%",
    "/api/items/%id%/%role%",
    "/api/items/%id%/%salary%"
];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) => {
    return api.get_api_path(user, api_path_template);
})

console.log(JSON.stringify(api_paths));

