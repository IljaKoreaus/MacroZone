import { globalStyles } from '@/styles/global';
// import { Link } from 'expo-router';
import { Text, ScrollView } from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import MacroGrid from '@/components/MacroGrid';
import RecentMeals from '@/components/RecentMeals';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
     <HomeHeader />
     <MacroGrid/>
     <RecentMeals/>
      {/* <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }}>
        Go to Meals
      </Link> */}
    </ScrollView>
  );
}