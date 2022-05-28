import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Linking from 'expo-linking'

const UserDetails = ({ user }) => {

    const handlePress = () => {
        Linking.openURL(`https://${user.website}/`);
    }

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardName}>{user.name}</Text>
        <Text style={styles.cardUsername}>@{user.username}</Text>
      </View>
      <View style={styles.contactContainer}>
        <View style={styles.contactRow}>
          <View style={styles.contactInfo}>
            <View style={styles.contactIcon}>
              <MaterialIcons name="phone-iphone" size={40} />
            </View>
            <Text style={styles.contactText}>
              {user.phone.substring(0, 13)}
            </Text>
          </View>
          <View style={styles.contactInfo}>
            <View style={styles.contactIcon}>
              <MaterialIcons name="work-outline" size={40} />
            </View>
            <Text style={styles.contactText}>{user.company.name}</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.contactIcon}>
            <MaterialIcons name="mail-outline" size={40} />
          </View>
          <Text style={styles.contactText}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: parseFloat(user.address.geo.lat),
            longitude: parseFloat(user.address.geo.lng),
            longitudeDelta: 1,
            latitudeDelta: 1,
          }}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(user.address.geo.lat),
              longitude: parseFloat(user.address.geo.lng),
            }}
            title={user.address.city.toUpperCase()}
            description={`${user.address.street} street ${user.address.suite}`}
          ></Marker>
        </MapView>
      </View>
        <Pressable onPress={handlePress} style={styles.btn}><Text style={styles.btnText}>Go to Website</Text></Pressable>
            
    </View>
  );
};

export default UserDetails;
