import { useState } from "react"
const data = [
    {
        name: "india",
        states: [{
            name: "bihar",
            cities: ["patna", "madhubani"]
        },
        {
            name: "telangana",
            cities: ["hyd", "guntur"]
        }
        ]
    },
    {
        name: "USA",
        states: [{
            name: "Texas",
            cities: ["t1", "t1"]
        },
        {
            name: "Newyork",
            cities: ["newjersy"]
        }
        ]
    }
]
function Dropdown() {
    const [countries,setCountries] = useState(data)
    const [selectedCountry,setSelectedCountry] = useState("")

    const [states,setStates] = useState([])
    const [selectedState,setSelectedState] = useState("")

    const [cities,setCities] = useState([])
    const [selectedCity,setSelectedCity] = useState("")
    const onCountryChange = (e)=>{
        let states = countries.find((country)=>{
            return country.name===e.target.value
        })
        setSelectedCountry(e.target.value)
        if(states)
        setStates(states.states)

    }
    const onStateChange = (e)=>{
        let state= states.find((state)=>{
            return state.name===e.target.value
        })
        setSelectedState(e.target.value)
        if(state)
        setCities(state.cities)

    }

    const onCityChange = (e)=>{
        setSelectedCity(e.target.value)
    }

    return (
        <div className="container">
            <h4>dropdown example</h4>
            <div className="row">
                <div className="col-md-4">
                    <select class="form-select form-select-lg mb-3" onChange={(e)=>onCountryChange(e)} value={selectedCountry}>
                        <option selected>Select Country</option>
                        {countries.map((country)=>{
                            return(
                                <option value={country.name}>{country.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-md-4">
                    <select class="form-select form-select-lg mb-3"  onChange={(e)=>onStateChange(e)} value={selectedState}>
                        <option selected>Select State</option>
                        {states?.map((state)=>{
                            return(
                                <option value={state.name}>{state.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-md-4">
                    <select class="form-select form-select-lg mb-3" aria-label="Large select example" value={selectedCity} onChange={(e)=>onCityChange(e)}>
                        <option selected>Select City</option>
                        {cities?.map((city)=>{
                            return(
                                <option value={city}>{city}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Dropdown