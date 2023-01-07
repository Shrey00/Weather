import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    cities: [],          //{cityName,countryName,locationKey}
    foundCity: [],
}

export const reqCities = createAsyncThunk('req/city', async (searchTerm) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=TjZzaACT8BOQT8KxIcjjvFz9FpYwMsxJ&q=${searchTerm}&language=en-US`);
    //response[0].EnglishName;
    // .Key
    // .Country.EnglishName
    //.AdministrativeArea.EnglishName
    const citiesList = response.data.map((city) => {
        return {
            key: city.Key,
            city: city.EnglishName,
            state: city.AdministrativeArea.EnglishName,
            country: city.Country.EnglishName
        }
    })
    // console.log('ye hai response of cities : ' + JSON.stringify(response.data));
    return citiesList;
})

export const reqWeather = createAsyncThunk('reqWeather/city', async (key) => {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=%09TjZzaACT8BOQT8KxIcjjvFz9FpYwMsxJ&details=true`);
    return response.data[0];
   
    // const weatherDetails = {
    //     foundCity.WeatherText,
    //     foundCity.WeatherIcon,
    //     foundCity.RelativeHumidity,
    //     foundCity.Temprature.Metric.Value,
    //     foundCity.Temprature.Metric.Unit,
    //     foundCity.RealFeelTemperature.Metric.Value,
    //     foundCity.RealFeelTemperature.Metric.Unit,
    //     foundCity.RealFeelTemperature.Metric.Phrase,
    //     foundCity.Temprature,
    //     foundCity.LocalObservationDateTime,
    //     foundCity.Wind.Speed.Metric.Value,
    //     foundCity.Wind.Speed.Metric.Unit,
    //     foundCity.WindGust.Speed.Metric.Value,
    //     foundCity.WindGust.Speed.Metric.Unit,
    //     foundCity.Visibility.Metric.Value,
    //     foundCity.Visibility.Metric.Unit,
    //     foundCity.CloudCover,
    //     foundCity.Ceiling.Metric.Value,
    //     foundCity.Ceiling.Metric.Unit,
    //     foundCity.RelativeHumidity,
    //     foundCity.Pressure.Metric.Value,
    //     foundCity.Pressure.Metric.Unit,
    // }
    

})

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getCities: (state) => {
            return state.cities;
        },
        getFoundCity: (state) => {
            return state.foundCity;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(reqCities.fulfilled, (state, action) => {
                console.log(JSON.stringify(action.payload));
                state.cities = action.payload;
            })
            .addCase(reqWeather.fulfilled, (state, action) => {
             
                state.foundCity.push(action.payload); 
                  console.log(JSON.stringify(state.foundCity));
            })
    }
})

export const { getCities, getFoundCity } = dataSlice.actions;
export const selectCities = (state) => state.data.cities;
export const selectfoundCity = (state) => state.data.foundCity;
export default dataSlice.reducer;



