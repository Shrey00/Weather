// import logo from './logo.svsg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Weather from './Components/Weather';
import { useSelector } from 'react-redux';
import { selectfoundCity } from './features/dataSlice';
function App() {
  const foundCityArr = useSelector(selectfoundCity);
  // console.log(foundCityArr)
  return (
    <div className="App bg-[#F6F6C9] min-h-[100vh] h-[100%]">
      <Header />
      <Search />
      <div className="flex flex-wrap justify-start w-[90vw] min-h-[70vh] h-[100%] m-auto ">
        {
          foundCityArr?.map((foundCity, i) => {
            return <div key={i} className="p-4">
              <Weather foundCity={foundCity} />
            </div>
          })
        }
      </div>


    </div>
  );
}

export default App;
