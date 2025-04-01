import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions, ImageBackground} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { theme } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window');
const markerSize = width < 400 ? 30 : 40; // Adjust size for smaller screens

interface Location {
    id: number;
    latitude: number;
    longitude: number;
    rating: number;
  }

const locations: Location[] = [
    { id: 1, latitude: 34.05, longitude: -118.25, rating: 8.0 },
    { id: 2, latitude: 34.06, longitude: -118.23, rating: 3.1 },
    { id: 3, latitude: 34.04, longitude: -118.26, rating: 6.6 },
    { id: 4, latitude: 34.02, longitude: -118.28, rating: 9.2 },
    { id: 5, latitude: 34.07, longitude: -118.22, rating: 7.5 },
    { id: 6, latitude: 34.05, longitude: -118.21, rating: 9.8 },
];

const groupMarkers = (markers: any, threshold = 0.001) => {
    let clusters: any = [];
    markers.forEach((marker: any) => {
      let added = false;
      clusters.forEach((cluster: any) => {
        if (
          Math.abs(cluster.latitude - marker.latitude) < threshold &&
          Math.abs(cluster.longitude - marker.longitude) < threshold
        ) {
          cluster.count += 1;
          added = true;
        }
      });
      if (!added) {
        clusters.push({ ...marker, count: 1 });
      }
    });
    return clusters;
};
  
const groupedMarkers = groupMarkers(locations);

const MapScreen = () => {
    const initialRegion: Region = {
        latitude: 34.0522,
        longitude: -118.2437,
        latitudeDelta: 0.12,
        longitudeDelta: 0.12,
    };
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                initialRegion={initialRegion}
                customMapStyle={darkMapStyle}>
                {groupedMarkers.map((loc: any, index: number) => (
                    <Marker key={loc.id} coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}>
                        <View style={{ alignItems: "center" }}>
                        <ImageBackground source={require("../assets/icons/pin.png")} style={styles.backgroundImage}>
                            <Text style={styles.markerText}>{loc.count > 1 ? `${loc.count} locations` : loc.rating}</Text>
                        </ImageBackground>
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

const darkMapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#1d1d1d' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#8f8f8f' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#1d1d1d' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2a2a2a' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0f252e' }] },
    { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#181818' }] },
  ];
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    map: { width, height : height / 3.5 },
    markerContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 50, // Adjust width based on your image size
        height: 60, // Adjust height to fit pin
      },
      backgroundImage: {
        width: markerSize,
        height: markerSize,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
      },
      markerText: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -10 }],
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
});

export default MapScreen;
