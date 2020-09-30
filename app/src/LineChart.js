import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';
import { render } from 'react-dom';


class LineChart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels:  ['9/15','9/16','9/17','9/18','9/19','9/20','9/21','9/22','9/23','9/24','9/25','9/26','9/27','9/28','9/29'],

                datasets:[
                    {
                        label:'Number of Articles',
                        data: ['3','5','5','7','12','12','11','9','4','0','7','6','2','8','10',],
                        backgroundColor: 'black',

                    }
                    
                ]
            }
        }
    }
        
    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom',
        title:'Subject'
    }

    render() {
        return(
          <div className="chart">
              <Line
                data = {this.state.chartData}
                width={600}
                height={400}
                
                options = {{
                    title: {
                        display: this.props.displayTitle,
                        text:'Number of Articles about '+this.props.title,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    },
                    xAxisID:'Date',
                    yAxisID:'Number of Articles'
                }}
              />
            </div>
        )
    }
}


    export default LineChart;