import { env } from '../../../infra/config/env';

export function setUriImagePath(imagePath?: string) {
  return `${env.EXPO_PUBLIC_BASE_URL}/uploads/${imagePath}`;
}
