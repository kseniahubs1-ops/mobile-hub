import { ScreenStub } from '../../components/ScreenStub'

export function AuthScreen() {
  return (
    <ScreenStub
      title="Auth/Profile"
      description="Профіль і автентифікація користувача (JWT з hub-main на етапі 1)."
      items={[
        'Вхід/реєстрація',
        'Профіль користувача',
        'Налаштування push-повідомлень',
      ]}
    />
  )
}
