//import Cards from '../../cards/Cards'
import BarChart from '../../objects/card/barchart'
import PieChart from '../../objects/card/piechart'
import Card from '../../objects/card/card'
import './Organization.css'

const Organization =() =>{
    return(
        <div className="Organization">
            <h1>Organization</h1>
            <div className="CardContainer">

                <Card
                    title="Net Carbon"
                    value= {12000}
                    chart={<BarChart />}
                />
                <Card
                    title="Proposion of Emission"
                    value={2700}
                    chart={<PieChart/>}
                />
                <Card
                    title="Net Carbon"
                    value= {12000}
                    chart={<BarChart />}
                />
            </div>
            
        </div>
    )
}

export default Organization