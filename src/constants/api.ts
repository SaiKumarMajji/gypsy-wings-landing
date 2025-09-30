interface ApiConfig {
    currentEnv: string;
    baseURL: { [key: string]: string };
    authUrls: { [key: string]: string };
    baseRoute: { [key: string]: string };
}

export const API: ApiConfig = {
    currentEnv: import.meta.env.VITE_SERVER ?? 'dev',
    baseURL: {
        loc: import.meta.env.VITE_API_URL_LOC ?? '',
        dev: import.meta.env.VITE_API_URL_DEV ?? '',
        test: import.meta.env.VITE_API_URL_TEST ?? '',
        uat: import.meta.env.VITE_API_URL_UAT ?? '',
        prod: import.meta.env.VITE_API_URL_PROD ?? ''
    },
    baseRoute: {
        loc: import.meta.env.VITE_BASE_ROUTE_LOC ?? '',
        dev: import.meta.env.VITE_BASE_ROUTE_DEV ?? '',
        test: import.meta.env.VITE_BASE_ROUTE_TEST ?? '',
        uat: import.meta.env.VITE_BASE_ROUTE_UAT ?? '',
        prod: import.meta.env.VITE_BASE_ROUTE_PROD ?? ''
    },

    authUrls: {
        user_details: 'api/v1/user-details'
    }
};

export const getBaseUrl = (): string => {
    return API.baseURL[API.currentEnv] ?? API.baseURL.loc;
};

export const getBaseRoute = (): string => {
    return API.baseRoute[API.currentEnv] ?? API.baseRoute.loc;
};
