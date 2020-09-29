import React, {Component} from 'react'
import ReactWordcloud from 'react-wordcloud';

class WordCloud extends Component {

    constructor(props) {
        super(props)
        //this.words = props.words;
    }

    options = {
        //colors = [],
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;',
        fontStyle: 'bold, 400, 700',
        padding: 5,
        fontSize: [32, 144]

    }

    words = [
        {
          text: 'trump',
          value: 200,
        },
        {
            text: 'wow',
            value: 150,
        },
        {
            text: 'lmao',
            value: 130,
        },
        {
            text: 'sick',
            value: 50,
        },
        {
            text: 'tesla',
            value: 30,
        },
        {
            text: 'alt-right',
            value: 20,
        },
        {
          text: 'butt',
          value: 11,
        },
        {
          text: 'thought',
          value: 16,
        },
        {
          text: 'bad',
          value: 17,
        },
      ]


    render() {
        return ( 
        
        <div className="Widget-WordCloud">
            <h3 className="Widget-header">Hot Terms in the News</h3>
            <ReactWordcloud words={this.words} minSize={[300, 300]} options={this.options} />
        </div>
        )
    }


}

export default WordCloud