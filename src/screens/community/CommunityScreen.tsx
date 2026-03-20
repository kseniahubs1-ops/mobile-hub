import { ScreenStub } from '../../components/ScreenStub'

export function CommunityScreen() {
  return (
    <ScreenStub
      title="Community"
      description="Екран feed/groups з hub-community."
      items={[
        'Стрічка постів',
        'Групи та учасники',
        'Перехід у COMMUNITY_GROUP чат',
      ]}
    />
  )
}
