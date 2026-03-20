# hub-mobile

React Native застосунок (Expo + TypeScript) для екосистеми Hub.

## Призначення

`hub-mobile` об'єднує три контексти в одному клієнті:

- platform: курси, бронювання, профіль (дані з `hub-main`)
- community: групи, feed, пости (дані з `hub-community`)
- chat: єдиний inbox всіх типів розмов (дані з `hub-chat/messaging-service`)

## Поточна структура

```text
src/
  api/
    config.ts
  components/
    ScreenStub.tsx
  navigation/
    RootNavigator.tsx
  screens/
    platform/
    community/
    chat/
    auth/
```

## Контракти/пакети для інтеграції

План підключення пакетів з архітектурного документу:

- `@hub/common`
- `@hub/messaging-contracts`
- `@hub/community-contracts`
- `@hub/theme-tokens`

## ENV

Створи `.env` або задай змінні для Expo:

```env
EXPO_PUBLIC_HUB_MAIN_GRAPHQL_URL=
EXPO_PUBLIC_MESSAGING_SERVICE_URL=
EXPO_PUBLIC_COMMUNITY_SERVICE_URL=
```

## Запуск

```bash
npm install
npm run start
```

## Наступні кроки

1. Додати React Navigation (stack + tabs) замість тимчасового `RootNavigator`.
2. Підключити GraphQL клієнт і auth flow (JWT з `hub-main`).
3. Інтегрувати `myConversations()` з `messaging-service`.
4. Реалізувати єдиний unread badge для вкладки `chat`.
