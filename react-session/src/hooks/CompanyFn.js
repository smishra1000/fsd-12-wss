import {useState} from "react"
function CompanyFn(){
    // const [companyName,setCompanyName] = useState("abc company")
    // const [companyAddress,setCompanyAddress] = useState("Hyd")
    const [company,setCompany] = useState({companyName:"abc company",companyAddress:"HYD"})
    const changeCompnay = ()=>{
        setCompany((prevState)=>{
            return {
                ...prevState,
                companyName:"test1 upadted"
            }
        })
    }
    return(
        <div>
            <h1>company info</h1>
            <h4>company name : {company.companyName}</h4>
            <h4>company address : {company.companyAddress}</h4>
            <button onClick={()=>changeCompnay()}>change company Data</button>
        </div>
    )
}

export default CompanyFn