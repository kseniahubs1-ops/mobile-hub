import { StyleSheet, Text, View } from 'react-native'

interface ScreenStubProps {
  title: string
  description: string
  items?: string[]
}

export function ScreenStub({ title, description, items = [] }: ScreenStubProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.list}>
        {items.map((item) => (
          <Text key={item} style={styles.item}>
            - {item}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 16,
  },
  list: {
    gap: 8,
  },
  item: {
    fontSize: 14,
    color: '#111827',
  },
})
