// import { YMaps, Map, Placemark, Rectangle } from "react-yandex-maps";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  TypeSelector,
  GeolocationControl,
} from "@pbe/react-yandex-maps";

import React from "react";
import styles from "./MapComponent.module.scss";

const MapComponent = ({ center, geometry }) => {
  return (
    <div>
      <YMaps>
        <Map
          className={styles.map}
          defaultState={{
            center: center,
            zoom: 16,
            controls: [],
          }}
        >
          <Placemark geometry={geometry} />
          <ZoomControl options={{ float: "right" }} />
          <TypeSelector options={{ float: "right" }} />
          <GeolocationControl options={{ float: "left" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComponent;
