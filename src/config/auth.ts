import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

function getJWTTokenSecret(): string {
  return 'ad0496b5-290c-4c0a-99ee-4ca6fb18153e';
}

function getIssuer(token: string): JwtPayload | string {
  try {
    return jsonwebtoken.verify(token, getJWTTokenSecret(), { algorithms: ['HS256'] });
  } catch (err) {
    throw new Error(`Error verifying the token: ${(err as Error).message}`);
  }
}

function generateToken(username: string): string {
  return jsonwebtoken.sign({ iss: username }, getJWTTokenSecret(), { algorithm: 'HS256', noTimestamp: true });
}

export { generateToken, getIssuer };
