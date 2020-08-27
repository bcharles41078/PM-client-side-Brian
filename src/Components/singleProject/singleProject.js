import './singleProject.css'
import TokenService from '../../services/token-service'
const { Component } = require("react")
const React = require('react')
const { Link } = require('react-router-dom')


class SingleProject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myDate: [],
            textColor: ''
        }
    }

    makeMyDate = () => {
        let myDate = new Date(this.props.project.due_date);
        let dd = myDate.getDate();
        let mm = myDate.getMonth() + 1;
        let yyyy = myDate.getFullYear();
        
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
     
        myDate = mm + '-' + dd + '-' + yyyy;
        console.log(myDate)
        return(myDate)
    }

    textColor = () => {
        let curDate = new Date(Date());
        let myDate = this.makeMyDate();
    
        let dd = curDate.getDate();
        let mm = curDate.getMonth() + 1;
        let yyyy = curDate.getFullYear();
    
        if (dd < 10) {
            dd = '0' + dd;
        };
        if (mm < 10) {
            mm = '0' + mm;
        };
    
        curDate = mm + '-' + dd + '-' + yyyy;
        console.log('cur:', curDate, 'my:', myDate)
        if ( curDate > myDate) {
            this.setState({textColor: 'red'});
        } else {
            this.setState({textColor: 'black'});
        };
    };

    componentDidMount() {
        this.makeMyDate()
        this.textColor()
    }

    render() {
        

        return (
            <>
                <div className='detail-box'>
                    <h3 className={this.state.textColor}>{this.props.project.title}</h3>
                    <p className={this.state.textColor}>{this.props.project.project_description}</p>
                    <p className={this.state.textColor}>{this.makeMyDate()}</p>
                </div>
            </>
        )
    }
}

export default SingleProject;