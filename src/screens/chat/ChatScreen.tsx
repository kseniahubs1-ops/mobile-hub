import { ScreenStub } from '../../components/ScreenStub'

export function ChatScreen() {
  return (
    <ScreenStub
      title="Chat Inbox"
      description="Єдиний inbox для COURSE_GROUP, COURSE_DIRECT, CONSULTATION, COMMUNITY_GROUP, DIRECT, SUPPORT."
      items={[
        'Секції по типах розмов',
        'Unread badge і lastMessageAt сортування',
        'Підключення до messaging-service через @hub/messaging-contracts',
      ]}
    />
  )
}
