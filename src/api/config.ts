export const apiConfig = {
  hubMainGraphqlUrl: process.env.EXPO_PUBLIC_HUB_MAIN_GRAPHQL_URL ?? '',
  messagingServiceUrl: process.env.EXPO_PUBLIC_MESSAGING_SERVICE_URL ?? '',
  communityServiceUrl: process.env.EXPO_PUBLIC_COMMUNITY_SERVICE_URL ?? '',
}

export function assertApiConfig() {
  if (!apiConfig.hubMainGraphqlUrl) {
    // eslint-disable-next-line no-console
    console.warn('EXPO_PUBLIC_HUB_MAIN_GRAPHQL_URL is not configured')
  }
  if (!apiConfig.messagingServiceUrl) {
    // eslint-disable-next-line no-console
    console.warn('EXPO_PUBLIC_MESSAGING_SERVICE_URL is not configured')
  }
}
