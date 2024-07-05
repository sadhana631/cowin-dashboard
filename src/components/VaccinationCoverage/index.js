import {BaseChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`  
    }
    return number.toString()
  }  
  const {vaccinationCoverageDetails} = props

  return (
    <div className="vaccination-by-coverage-container">
     <h1 className="vaccination-by-coverage-heading">VaccinationCoverage</h1>
     <BarChart
       width={900}
       height={400}
       data={vaccinationCoverageDetails}
       margin={{
         top: 5,
       }}
     >
       <XAxis
         dataKey="vaccineDate"
         tick={{
          stroke: '#6c757d',
          strokeWidth= 1,
          fontSize= 15,
          fontFamily= 'Roboto',
         }}
       />
       <YAxis
         tickFormatter={dataFormatter}
         tick={{
           stroke= '#6c757d' ,
           strokeWidth=0.5,
           fontSize= 15,
           fontFamily= 'Roboto'
         }}
       />
       <Legend
         wrapperStyle={{
          paddingTop=20,
          textAlign='center'
          fontSize=12,
          fontFamily='Roboto',
         }}
       />
       <Bar
         datakEY="dose1"
         name="Dose 1"
         fill="#5a8dee"
         render={[10, 10, 0, 0]}
         backgroundSize="20%"
       />
       <Bar
         dataKey="dose2"
         name="Dose 2"
         fill="#f54394"
         render={[5, 5, 0, 0]}
         backgroundSize="20%"
       />                   
     </BarChart>    
    </div>
  )
}

export default VaccinationCoverage
