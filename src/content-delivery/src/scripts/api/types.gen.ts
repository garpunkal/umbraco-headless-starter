// This file is auto-generated by @hey-api/openapi-ts

export type HomeContentModel = IApiContentModelBase & {
    contentType: 'home';
} & {
    properties?: HomePropertiesModel;
};

export type HomeContentResponseModel = IApiContentResponseModelBase & {
    contentType: 'home';
} & HomeContentModel;

export type HomePropertiesModel = {
    title?: string | null;
};

export type HttpValidationProblemDetails = ProblemDetails & {
    errors?: {
        [key: string]: Array<string>;
    };
    [key: string]: unknown | {
        [key: string]: Array<string>;
    } | undefined;
};

export type IApiContentModel = HomeContentModel;

export type IApiContentModelBase = IApiElementModelBase & {
    contentType: 'IApiContentModelBase';
} & {
    readonly id?: string;
    readonly contentType: string;
    readonly name?: string | null;
    readonly createDate?: Date;
    readonly updateDate?: Date;
    route?: IApiContentRouteModel;
};

export type IApiContentResponseModel = HomeContentResponseModel;

export type IApiContentResponseModelBase = IApiContentModelBase & {
    contentType: 'IApiContentResponseModelBase';
} & {
    readonly id?: string;
    readonly contentType: string;
    readonly name?: string | null;
    readonly createDate?: Date;
    readonly updateDate?: Date;
    route?: IApiContentRouteModel;
    readonly cultures?: {
        [key: string]: IApiContentRouteModel;
    };
};

export type IApiContentRouteModel = {
    readonly path?: string;
    startItem?: IApiContentStartItemModel;
};

export type IApiContentStartItemModel = {
    readonly id?: string;
    readonly path?: string;
};

export type IApiElementModel = {
    [key: string]: never;
};

export type IApiElementModelBase = {
    readonly id?: string;
    readonly contentType: string;
};

export type IApiMediaWithCropsResponseModel = {
    readonly id?: string;
    readonly name?: string;
    readonly mediaType?: string;
    readonly url?: string;
    readonly extension?: string | null;
    readonly width?: number | null;
    readonly height?: number | null;
    readonly bytes?: number | null;
    readonly properties?: {};
    focalPoint?: ImageFocalPointModel;
    readonly crops?: Array<ImageCropModel> | null;
    readonly path?: string;
    readonly createDate?: Date;
    readonly updateDate?: Date;
};

export type ImageCropCoordinatesModel = {
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
};

export type ImageCropModel = {
    alias?: string | null;
    width?: number;
    height?: number;
    coordinates?: ImageCropCoordinatesModel;
};

export type ImageFocalPointModel = {
    left?: number;
    top?: number;
};

export type PagedIApiContentResponseModel = {
    total: bigint;
    items: Array<IApiContentResponseModel>;
};

export type PagedIApiMediaWithCropsResponseModel = {
    total: bigint;
    items: Array<IApiMediaWithCropsResponseModel>;
};

export type ProblemDetails = {
    type?: string | null;
    title?: string | null;
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: unknown | (string | null) | (string | null) | (number | null) | (string | null) | (string | null) | undefined;
};

export type GetContentData = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path?: never;
    query?: {
        /**
         * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string;
        /**
         * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>;
        /**
         * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>;
        /**
         * Specifies the number of found content items to skip. Use this to control pagination of the response.
         */
        skip?: number;
        /**
         * Specifies the number of found content items to take. Use this to control pagination of the response.
         */
        take?: number;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/content';
};

export type GetContentErrors = {
    /**
     * Bad Request
     */
    400: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentError = GetContentErrors[keyof GetContentErrors];

export type GetContentResponses = {
    /**
     * OK
     */
    200: PagedIApiContentResponseModel;
};

export type GetContentResponse = GetContentResponses[keyof GetContentResponses];

export type GetContent20Data = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path?: never;
    query?: {
        /**
         * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string;
        /**
         * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>;
        /**
         * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>;
        /**
         * Specifies the number of found content items to skip. Use this to control pagination of the response.
         */
        skip?: number;
        /**
         * Specifies the number of found content items to take. Use this to control pagination of the response.
         */
        take?: number;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/content';
};

export type GetContent20Errors = {
    /**
     * Bad Request
     */
    400: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContent20Error = GetContent20Errors[keyof GetContent20Errors];

export type GetContent20Responses = {
    /**
     * OK
     */
    200: PagedIApiContentResponseModel;
};

export type GetContent20Response = GetContent20Responses[keyof GetContent20Responses];

export type GetContentItemData = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path?: never;
    query?: {
        id?: Array<string>;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/content/item';
};

export type GetContentItemErrors = {
    /**
     * Unauthorized
     */
    401: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Forbidden
     */
    403: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentItemError = GetContentItemErrors[keyof GetContentItemErrors];

export type GetContentItemResponses = {
    /**
     * OK
     */
    200: Array<IApiContentResponseModel>;
};

export type GetContentItemResponse = GetContentItemResponses[keyof GetContentItemResponses];

export type GetContentItemByPathData = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path: {
        path: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/content/item/{path}';
};

export type GetContentItemByPathErrors = {
    /**
     * Unauthorized
     */
    401: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Forbidden
     */
    403: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentItemByPathError = GetContentItemByPathErrors[keyof GetContentItemByPathErrors];

export type GetContentItemByPathResponses = {
    /**
     * OK
     */
    200: IApiContentResponseModel;
};

export type GetContentItemByPathResponse = GetContentItemByPathResponses[keyof GetContentItemByPathResponses];

export type GetContentItemByPath20Data = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path: {
        path: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/content/item/{path}';
};

export type GetContentItemByPath20Errors = {
    /**
     * Unauthorized
     */
    401: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Forbidden
     */
    403: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentItemByPath20Error = GetContentItemByPath20Errors[keyof GetContentItemByPath20Errors];

export type GetContentItemByPath20Responses = {
    /**
     * OK
     */
    200: IApiContentResponseModel;
};

export type GetContentItemByPath20Response = GetContentItemByPath20Responses[keyof GetContentItemByPath20Responses];

export type GetContentItemByIdData = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path: {
        id: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/content/item/{id}';
};

export type GetContentItemByIdErrors = {
    /**
     * Unauthorized
     */
    401: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Forbidden
     */
    403: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentItemByIdError = GetContentItemByIdErrors[keyof GetContentItemByIdErrors];

export type GetContentItemByIdResponses = {
    /**
     * OK
     */
    200: IApiContentResponseModel;
};

export type GetContentItemByIdResponse = GetContentItemByIdResponses[keyof GetContentItemByIdResponses];

export type GetContentItemById20Data = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path: {
        id: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/content/item/{id}';
};

export type GetContentItemById20Errors = {
    /**
     * Unauthorized
     */
    401: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Forbidden
     */
    403: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentItemById20Error = GetContentItemById20Errors[keyof GetContentItemById20Errors];

export type GetContentItemById20Responses = {
    /**
     * OK
     */
    200: IApiContentResponseModel;
};

export type GetContentItemById20Response = GetContentItemById20Responses[keyof GetContentItemById20Responses];

export type GetContentItems20Data = {
    body?: never;
    headers?: {
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        'Accept-Language'?: string;
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
        /**
         * Whether to request draft content.
         */
        Preview?: boolean;
        /**
         * URL segment or GUID of a root content item.
         */
        'Start-Item'?: string;
    };
    path?: never;
    query?: {
        id?: Array<string>;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/content/items';
};

export type GetContentItems20Errors = {
    /**
     * Unauthorized
     */
    401: ProblemDetails | HttpValidationProblemDetails;
    /**
     * Forbidden
     */
    403: ProblemDetails | HttpValidationProblemDetails;
};

export type GetContentItems20Error = GetContentItems20Errors[keyof GetContentItems20Errors];

export type GetContentItems20Responses = {
    /**
     * OK
     */
    200: Array<IApiContentResponseModel>;
};

export type GetContentItems20Response = GetContentItems20Responses[keyof GetContentItems20Responses];

export type GetMediaData = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path?: never;
    query?: {
        /**
         * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string;
        /**
         * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>;
        /**
         * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>;
        /**
         * Specifies the number of found media items to skip. Use this to control pagination of the response.
         */
        skip?: number;
        /**
         * Specifies the number of found media items to take. Use this to control pagination of the response.
         */
        take?: number;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/media';
};

export type GetMediaErrors = {
    /**
     * Bad Request
     */
    400: ProblemDetails | HttpValidationProblemDetails;
};

export type GetMediaError = GetMediaErrors[keyof GetMediaErrors];

export type GetMediaResponses = {
    /**
     * OK
     */
    200: PagedIApiMediaWithCropsResponseModel;
};

export type GetMediaResponse = GetMediaResponses[keyof GetMediaResponses];

export type GetMedia20Data = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path?: never;
    query?: {
        /**
         * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string;
        /**
         * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>;
        /**
         * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>;
        /**
         * Specifies the number of found media items to skip. Use this to control pagination of the response.
         */
        skip?: number;
        /**
         * Specifies the number of found media items to take. Use this to control pagination of the response.
         */
        take?: number;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/media';
};

export type GetMedia20Errors = {
    /**
     * Bad Request
     */
    400: ProblemDetails | HttpValidationProblemDetails;
};

export type GetMedia20Error = GetMedia20Errors[keyof GetMedia20Errors];

export type GetMedia20Responses = {
    /**
     * OK
     */
    200: PagedIApiMediaWithCropsResponseModel;
};

export type GetMedia20Response = GetMedia20Responses[keyof GetMedia20Responses];

export type GetMediaItemData = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path?: never;
    query?: {
        id?: Array<string>;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/media/item';
};

export type GetMediaItemResponses = {
    /**
     * OK
     */
    200: Array<IApiMediaWithCropsResponseModel>;
};

export type GetMediaItemResponse = GetMediaItemResponses[keyof GetMediaItemResponses];

export type GetMediaItemByPathData = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path: {
        path: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/media/item/{path}';
};

export type GetMediaItemByPathErrors = {
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetMediaItemByPathError = GetMediaItemByPathErrors[keyof GetMediaItemByPathErrors];

export type GetMediaItemByPathResponses = {
    /**
     * OK
     */
    200: IApiMediaWithCropsResponseModel;
};

export type GetMediaItemByPathResponse = GetMediaItemByPathResponses[keyof GetMediaItemByPathResponses];

export type GetMediaItemByPath20Data = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path: {
        path: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/media/item/{path}';
};

export type GetMediaItemByPath20Errors = {
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetMediaItemByPath20Error = GetMediaItemByPath20Errors[keyof GetMediaItemByPath20Errors];

export type GetMediaItemByPath20Responses = {
    /**
     * OK
     */
    200: IApiMediaWithCropsResponseModel;
};

export type GetMediaItemByPath20Response = GetMediaItemByPath20Responses[keyof GetMediaItemByPath20Responses];

export type GetMediaItemByIdData = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path: {
        id: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
    };
    url: '/umbraco/delivery/api/v1/media/item/{id}';
};

export type GetMediaItemByIdErrors = {
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetMediaItemByIdError = GetMediaItemByIdErrors[keyof GetMediaItemByIdErrors];

export type GetMediaItemByIdResponses = {
    /**
     * OK
     */
    200: IApiMediaWithCropsResponseModel;
};

export type GetMediaItemByIdResponse = GetMediaItemByIdResponses[keyof GetMediaItemByIdResponses];

export type GetMediaItemById20Data = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path: {
        id: string;
    };
    query?: {
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/media/item/{id}';
};

export type GetMediaItemById20Errors = {
    /**
     * Not Found
     */
    404: ProblemDetails | HttpValidationProblemDetails;
};

export type GetMediaItemById20Error = GetMediaItemById20Errors[keyof GetMediaItemById20Errors];

export type GetMediaItemById20Responses = {
    /**
     * OK
     */
    200: IApiMediaWithCropsResponseModel;
};

export type GetMediaItemById20Response = GetMediaItemById20Responses[keyof GetMediaItemById20Responses];

export type GetMediaItems20Data = {
    body?: never;
    headers?: {
        /**
         * API key specified through configuration to authorize access to the API.
         */
        'Api-Key'?: string;
    };
    path?: never;
    query?: {
        id?: Array<string>;
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string;
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string;
    };
    url: '/umbraco/delivery/api/v2/media/items';
};

export type GetMediaItems20Responses = {
    /**
     * OK
     */
    200: Array<IApiMediaWithCropsResponseModel>;
};

export type GetMediaItems20Response = GetMediaItems20Responses[keyof GetMediaItems20Responses];

export type ClientOptions = {
    baseUrl: 'http://localhost:15560' | (string & {});
};