import React, {useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native';
import PeopleCard from '../components/PeopleCard';
import SegmentedControl from "../components/SegmentedControl.tsx";
import { peopleListScreen } from '../theme/theme.ts';

const people = [
    {
        id: '1',
        name: 'CaptainCrunch',
        location: 'Los Angeles, CA',
        avatar: require('../assets/images/avatar1.png'),
        heartIcon: true,  // Shows heart icon
    },
    {
        id: '2',
        name: 'how.kev.eats',
        location: 'Los Angeles, CA',
        avatar: require('../assets/images/avatar2.png'),
        heartIcon: true,
        noEntryIcon: true, // Shows no-entry icon
    },
    {
        id: '3',
        name: 'tenderlove',
        location: 'Los Angeles, CA',
        avatar: require('../assets/images/avatar3.png'),
        heartIcon: true,
    },
    {
        id: '4',
        name: 'GourmetGuru',
        location: 'Los Angeles, CA',
        avatar: require('../assets/images/avatar4.png'),
        heartIcon: true,
    },
];

const tabs = ['Friends', 'Verified', 'Everyone'];

const PeopleListScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <SafeAreaView style={peopleListScreen.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Text style={peopleListScreen.title}>People</Text>
            <SegmentedControl
                options={tabs}
                selectedIndex={selectedTab}
                onChange={setSelectedTab}/>
            <FlatList
                data={people}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PeopleCard user={item} onPress={() => {}} />}
            />
        </SafeAreaView>
    );
};

export default PeopleListScreen;
