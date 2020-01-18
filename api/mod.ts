import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Context
} from 'https://deno.land/x/lambda/mod.ts';
import markup from './markup.tsx';


export async function handler(
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> {
    return {
        statusCode: 200,
        body: `${markup}`,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }
    };
}
