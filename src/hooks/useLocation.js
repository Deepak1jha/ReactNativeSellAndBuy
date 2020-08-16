import {useEffect, useState} from "react";

import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync();
      console.log(latitude, longitude)
      setLocation({latitude, longitude});
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    getLocation();

  }, []);
  return location;
}
