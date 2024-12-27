//import Cards from '../../cards/Cards'
import BarChart from '../../objects/card/barchart'
import PieChart from '../../objects/card/piechart'
import Card from '../../objects/card/card'
import './Dashboard.css'

const Dashboard =() =>{
    return(
        <div className="Dashboard">
            <h1>Dashboard</h1>
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

export default Dashboard