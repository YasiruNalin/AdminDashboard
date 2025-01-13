import { useEffect, useState } from 'react'
import BarChart from '../../objects/card/barchart'
import PieChart from '../../objects/card/piechart'
import Card from '../../objects/card/card'
import './Scenario.css'
import { AxiosResponse } from 'axios'
import api from '../../../api'

const Scenario = ({ selectedSubMenu, selectedSubSubMenu}: { selectedSubMenu: number | null; selectedSubSubMenu: number | null; }) => {
    const [dbscenario, setDbscenario] = useState<{ name: string }[]>([]); // Define type for dbscenario
    const [isChecked, setIsChecked] = useState(false);

    const fetchDbscenario = async (): Promise<void> => {
        try {
            const response: AxiosResponse<{ scenarios: { name: string }[] }> = await api.get('/scenarios');
            setDbscenario(response.data.scenarios); // Access the scenarios array
        } catch (error) {
            console.error("Error fetching Data", error);
        }
    };

    useEffect((): void => {
        fetchDbscenario();
    }, []); // Add an empty dependency array to prevent infinite re-fetching

    function handleCheckboxChange(){
        setIsChecked(!isChecked);
    }

    if(selectedSubMenu ===1 ){
        if(selectedSubSubMenu ===0){
            return(
                <div className="Scenario">
                    <h1>Farm Carbon Footprint</h1>
                    <div className="CardContainer">
        
                        <Card
                            title="Farm Carbon"
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
        else if(selectedSubSubMenu ===1){
            return(
                <div className="Scenario">
                    <h1>Farm Carbon Footprint</h1>
                    <div className="CardContainer">
                        <form>
                            <h2>Select Carbon Metrics</h2>
                            <label htmlFor="0">
                                <input type="checkbox" name="Farm Carbon" value="Farm Carbon" id="0" onChange={handleCheckboxChange} />
                                Farm Carbon
                            </label>
                            <br />
                        </form>
                    </div>


                    <div className="CardContainer">
                        
                        {isChecked ? (
                            <>
                                <Card
                                    title="Checked Farm Carbon"
                                    value={12000}
                                    chart={<BarChart />}
                                />
                                <Card
                                    title="Checked Proposion of Emission"
                                    value={2700}
                                    chart={<PieChart />}
                                />
                                <Card
                                    title="Checked Net Carbon"
                                    value={12000}
                                    chart={<BarChart />}
                                />
                            </>
                        ) : null}
                        
                    </div>
                    
                </div>
            )
        }
        
    }
    else if(selectedSubMenu ===2){
        return(
            <div className="Scenario">
                <h1>Product Carbon Footprint</h1>
                
                {dbscenario &&
                    dbscenario.map((record, index) => {
                        return (
                            <div className="box" key={index}>
                                {record.name}
                            </div>
                        );
                    })}
                
            </div>
        )
    }

    else{
        return(
            <div className="Scenario">
                <h1>Scenario</h1>
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
    
}

export default Scenario