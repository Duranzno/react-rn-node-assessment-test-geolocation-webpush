//@ts-nocheck
import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null,
    }),
    {
      onMapClick: ({ isMarkerShown }) => (e) => {
        console.log(JSON.stringify({ isMarkerShown, e }))
        return {
          markerPosition: e.latLng,
          isMarkerShown: true,
        }
      },
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
))

export class MapMarker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}
