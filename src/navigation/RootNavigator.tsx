import { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { AuthScreen } from '../screens/auth/AuthScreen'
import { ChatScreen } from '../screens/chat/ChatScreen'
import { CommunityScreen } from '../screens/community/CommunityScreen'
import { PlatformScreen } from '../screens/platform/PlatformScreen'

type MobileTab = 'platform' | 'community' | 'chat' | 'auth'

const TAB_TITLES: Record<MobileTab, string> = {
  platform: 'Платформа',
  community: 'Спільнота',
  chat: 'Чат',
  auth: 'Профіль',
}

export function RootNavigator() {
  const [activeTab, setActiveTab] = useState<MobileTab>('platform')

  const screen = useMemo(() => {
    if (activeTab === 'platform') return <PlatformScreen />
    if (activeTab === 'community') return <CommunityScreen />
    if (activeTab === 'chat') return <ChatScreen />
    return <AuthScreen />
  }, [activeTab])

  return (
    <View style={styles.root}>
      <View style={styles.content}>{screen}</View>
      <View style={styles.tabBar}>
        {(Object.keys(TAB_TITLES) as MobileTab[]).map((tab) => {
          const active = tab === activeTab
          return (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tabButton, active && styles.tabButtonActive]}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {TAB_TITLES[tab]}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E6E8EC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 10,
  },
  tabButtonActive: {
    backgroundColor: '#EEF3FF',
  },
  tabText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#1D4ED8',
  },
})
