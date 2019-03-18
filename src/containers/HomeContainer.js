import React from 'react';
import Header from '../components/Header/header';
import DrawerContainer from './DrawerContainer';
import { AST_True } from '../../node_modules/terser';



class HomeContainer extends React.Component{
    render() {
        return(
            <div>
                <Header/>
            </div>
        )
    }
}
export default HomeContainer