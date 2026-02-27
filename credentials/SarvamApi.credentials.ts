import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SarvamApi implements ICredentialType {
	name = 'sarvamApi';

	displayName = 'Sarvam AI API';

	icon = { light: 'file:../nodes/Sarvam/sarvam.svg', dark: 'file:../nodes/Sarvam/sarvam.svg' } as const;

	documentationUrl = 'https://docs.sarvam.ai/api-reference-docs/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Sarvam AI API subscription key (starts with sk_)',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-subscription-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.sarvam.ai',
			url: '/text-lid',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ input: 'hello' }),
		},
	};
}
