import { ContentService, type IApiContentResponseModel } from '@scripts/api/index.ts'
import { type Client, type ClientOptions, createClient, createConfig } from '@hey-api/client-fetch';
import parseBoolean from '@scripts/helpers/parseBoolean';

interface UmbracoClientConfig {
    apiKey: string;
    preview: boolean;
    baseUrl: string;
}

/**
 * UmbracoService - A singleton service for interacting with Umbraco Headless API
 */
class UmbracoClientService {
    private config: UmbracoClientConfig;
    private static instance: UmbracoClientService;
    private client: Client;

    private constructor() {

        this.config = {
            apiKey: import.meta.env.UMBRACO_API_KEY || '',
            preview: parseBoolean(import.meta.env.UMBRACO_PREVIEW),
            baseUrl: import.meta.env.API_BASE_URL || ''
        };

        const clientOptions = createConfig<ClientOptions>({
            baseUrl: this.config.baseUrl
        });

        this.client = createClient(clientOptions);
    }

    /**
     * Get the singleton instance
     */
    public static getInstance(): UmbracoClientService {
        if (!UmbracoClientService.instance) {
            UmbracoClientService.instance = new UmbracoClientService();
        }
        return UmbracoClientService.instance;
    }

    public async getContentItemByPath(path: string): Promise<IApiContentResponseModel> {

        const item = await ContentService.getContentItemByPath20({
            path: { path: path },
            client: this.client,
            headers: {
                "Api-Key": this.config.apiKey,
                preview: this.config.preview
            },
            query: {
                expand: "properties[content[properties[$all]],$all]"
            }
        });

        return item.data;
    }
}

// Create singleton instance
const UmbracoService = UmbracoClientService.getInstance();

// Export the singleton for use in other files
export default UmbracoService;
