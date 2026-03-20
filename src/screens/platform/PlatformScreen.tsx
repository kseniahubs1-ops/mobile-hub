import { ScreenStub } from "../../components/ScreenStub";

export function PlatformScreen() {
  return (
    <ScreenStub
      title='Platform'
      description='Екран для курсів, бронювань і профілю з hub-main.'
      items={[
        "Мої курси та прогрес",
        "Мої бронювання консультацій",
        "Деталі курсу + перехід у COURSE_GROUP чат"
      ]}
    />
  );
}
