import { createClient } from '@sanity/client';
export const SANITY_CLIENT = createClient({
    projectId: 'if67oozt',
    dataset: 'production',
    token: 'sk2JBBAirXF1pO4LBbk2ECWf2ZGPtOyVUxtFfvZ1waSn3jKrSzWMmLYaFHfaw69fEF1RiESVFevNKdLgrBLNbBs6BAsQp963YbSEuH7mI9aEShaf7xBBdS2Is3D4CFWptxiDImIiET3F9meSM6bCcpsuYzxpj0V0FozGoAVg2L1b5MYzsLUl',
    apiVersion: '2025-02-19',
    useCdn: false
});