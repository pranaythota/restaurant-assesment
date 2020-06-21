import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {getRestuarents} from '../actions/RestuarentActions'
import CardList from '../components/Card/card-list-component'
import EmptyData from '../components/EmptyData/empty-data'

class Restuarents extends React.Component{
    componentDidMount(){
        this.props.getRestuarents()
    }
    render(){
        const {restuarents} = this.props;
        return(
            <Fragment>
                {restuarents.length > 0 ?  <CardList restaurants={restuarents}/> : <EmptyData message="Resturantes Not Found"/>}
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    const {restuarents} = state;
    return {restuarents};
}

export default connect(mapStateToProps,{getRestuarents})(Restuarents)