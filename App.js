import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const continueWatching = [
  { title: 'Solo Leveling', episode: 'Episode 8' },
  { title: 'Jujutsu Kaisen', episode: 'Episode 19' },
];

const trendingNow = ['Kaiju No. 8', 'Frieren', 'Dandadan', 'Blue Lock'];

const upcoming = ['Wind Breaker S2', 'Chainsaw Man Movie', 'Re:Zero S3'];

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.appTitle}>AllAnime</Text>
        <Text style={styles.subtitle}>Mobile-first anime discovery and tracking</Text>

        <Section title="Continue Watching">
          {continueWatching.map((item) => (
            <View key={item.title} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardMeta}>{item.episode}</Text>
            </View>
          ))}
        </Section>

        <Section title="Trending Now">
          <View style={styles.pillRow}>
            {trendingNow.map((item) => (
              <View key={item} style={styles.pill}>
                <Text style={styles.pillText}>{item}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Upcoming Releases">
          {upcoming.map((item) => (
            <View key={item} style={styles.listRow}>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b0f1a',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 28,
    gap: 16,
  },
  appTitle: {
    color: '#f8fafc',
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 14,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    color: '#e2e8f0',
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#111827',
    borderColor: '#1f2937',
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 4,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '600',
  },
  cardMeta: {
    color: '#94a3b8',
    fontSize: 13,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    backgroundColor: '#1d4ed8',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pillText: {
    color: '#eff6ff',
    fontSize: 13,
    fontWeight: '600',
  },
  listRow: {
    backgroundColor: '#111827',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  listText: {
    color: '#cbd5e1',
    fontSize: 14,
  },
});
