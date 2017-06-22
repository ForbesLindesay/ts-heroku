import BaseHerokuAPIClient from './BaseHerokuApiClient';
import HerokuPlatformAPIClient from './schema';

export default function createClient(options?: {token?: string}): HerokuPlatformAPIClient {
  const baseClient = new BaseHerokuAPIClient(options);
  return new HerokuPlatformAPIClient(baseClient);
}