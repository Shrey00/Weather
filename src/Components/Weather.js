import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {  } from '../features/dataSlice';
const Weather = ({ foundCity }) => {
  const icons = {
    1: 'https://developer.accuweather.com/sites/default/files/01-s.png',
    2: 'https://developer.accuweather.com/sites/default/files/02-s.png',
    3: 'https://developer.accuweather.com/sites/default/files/03-s.png',
    4: 'https://developer.accuweather.com/sites/default/files/04-s.png',
    5: 'https://developer.accuweather.com/sites/default/files/05-s.png',
    6: 'https://developer.accuweather.com/sites/default/files/06-s.png',
    7: 'https://developer.accuweather.com/sites/default/files/07-s.png',
    8: 'https://developer.accuweather.com/sites/default/files/08-s.png',
    11: 'https://developer.accuweather.com/sites/default/files/11-s.png',
    12: 'https://developer.accuweather.com/sites/default/files/12-s.png',
    13: 'https://developer.accuweather.com/sites/default/files/13-s.png',
    14: 'https://developer.accuweather.com/sites/default/files/14-s.png',
    15: 'https://developer.accuweather.com/sites/default/files/15-s.png',
    16: 'https://developer.accuweather.com/sites/default/files/16-s.png',
    17: 'https://developer.accuweather.com/sites/default/files/17-s.png',
    18: 'https://developer.accuweather.com/sites/default/files/18-s.png',
    19: 'https://developer.accuweather.com/sites/default/files/19-s.png',
    20: 'https://developer.accuweather.com/sites/default/files/20-s.png',
    21: 'https://developer.accuweather.com/sites/default/files/21-s.png',
    22: 'https://developer.accuweather.com/sites/default/files/22-s.png',
    23: 'https://developer.accuweather.com/sites/default/files/23-s.png',
    24: 'https://developer.accuweather.com/sites/default/files/24-s.png',
    25: 'https://developer.accuweather.com/sites/default/files/25-s.png',
    26: 'https://developer.accuweather.com/sites/default/files/26-s.png',
    29: 'https://developer.accuweather.com/sites/default/files/29-s.png',
    30: 'https://developer.accuweather.com/sites/default/files/30-s.png',
    31: 'https://developer.accuweather.com/sites/default/files/31-s.png',
    32: 'https://developer.accuweather.com/sites/default/files/32-s.png',
    33: 'https://developer.accuweather.com/sites/default/files/33-s.png',
    34: 'https://developer.accuweather.com/sites/default/files/34-s.png',
    35: 'https://developer.accuweather.com/sites/default/files/35-s.png',
    36: 'https://developer.accuweather.com/sites/default/files/36-s.png',
    37: 'https://developer.accuweather.com/sites/default/files/37-s.png',
    38: 'https://developer.accuweather.com/sites/default/files/38-s.png',
    39: 'https://developer.accuweather.com/sites/default/files/39-s.png',
    40: 'https://developer.accuweather.com/sites/default/files/40-s.png',
    41: 'https://developer.accuweather.com/sites/default/files/41-s.png',
    42: 'https://developer.accuweather.com/sites/default/files/42-s.png',
    43: 'https://developer.accuweather.com/sites/default/files/43-s.png',
    44: 'https://developer.accuweather.com/sites/default/files/44-s.png',
  }
  //  const weatherIcon = foundCity.WeatherIcon;
  return (
    foundCity ?
      <div className="min-w-[22rem] w-[27vw] max-w-[29rem] h-fit p-4 bg-[#4FA095] text-[#F6F6C9]  rounded-lg shadow-lg">
        <div>
          {/* section 1 with location name and temprature details  */}
          {/* <div> */}
          <div id="tempratureAndIcon" className="flex justify-between">
            <div>
              <span><img src={icons[foundCity.WeatherIcon]} alt="weather icon" class='h-20 w-auto' /></span>
              <span>{foundCity.Temperature?.Metric?.Value}°{foundCity.Temperature?.Metric?.Unit}</span>
              <p>{foundCity.WeatherText}</p>
            </div>
            <div>
              <p>Real Feel</p>
              <p>{foundCity.RealFeelTemperature?.Metric?.Value}°{foundCity.RealFeelTemperature?.Metric?.Unit}</p>
              <p className="text-xs">{foundCity.RealFeelTemperature?.Metric?.Phrase}</p>
              {/* <p className="text-xs">{}</p> */}
            </div>

          </div>
          {/* </div> */}
          <div>
            <div className="flex justify-between p-2">
              <p>Local Date Time</p>
              <p>{foundCity.LocalObservationDateTime}</p>
            </div>
            <div>
              <div className="flex justify-between p-2">
                <span>Humidity</span>
                <span>{foundCity.RelativeHumidity}</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Visibility</span>
                <span>{foundCity.Visibility?.Metric?.Value}{foundCity.Visibility?.Metric?.Unit}</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Cloud Cover</span>
                <span>{foundCity.CloudCover}</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Cloud Ceiling</span>
                <span>{foundCity.Ceiling?.Metric?.Value}{foundCity.Ceiling?.Metric?.Unit}</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Pressure</span>
                <span>{foundCity.Pressure?.Metric?.Value}{foundCity.Pressure?.Metric?.Unit}</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Wind</span>
                <span>{foundCity.Wind.Speed?.Metric?.Value}{foundCity.Wind.Speed?.Metric?.Unit}</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Wind Gusts</span>
                <span>{foundCity.WindGust.Speed?.Metric?.Value}{foundCity.WindGust.Speed?.Metric?.Unit}</span>
              </div>
            </div>
          </div>
        </div>
      </div> :
      <></>
  )
}

export default Weather;