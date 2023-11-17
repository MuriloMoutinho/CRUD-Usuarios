export function getTokenExpiredDate(token: string) {
  const parts = token.split('.');
  const encodedPayload = parts[1];
  const decodedPayload = atob(encodedPayload);
  const payload = JSON.parse(decodedPayload);

  const expirationDate = new Date(payload.exp * 1000);
  return expirationDate;
}
