import React ,{Component }from 'react'
import {Bar,  Pie} from 'react-chartjs-2';

class ChartList extends Component {    
  
    state = {
      ChartData : {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Cycle Charging Status',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }    
    
    render() {
      return (        
        <div className="chartStyle"><div className="container" >
            <div className ="charts" > 
                <div className="card z-depth-4 ">
                    <Bar className='barGraph'
                    data={this.state.ChartData}
                    options={{}}
                    />
                </div>
            </div>
            <div className ="charts" > 
                <div className="card z-depth-4 ">
                    <Pie
                    data={this.state.ChartData}
                    options={{}}
                    />
                </div>
            </div>
        </div></div>
      )
    }
  }



export default ChartList
