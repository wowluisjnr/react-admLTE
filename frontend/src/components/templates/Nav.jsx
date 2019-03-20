import React from 'react'
import { NavLink} from 'react-router-dom'

export default class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state ={linkIsActive: true}
    }


teste = (match)=> {
    let li = document.getElementsByName(match)
    if(!match){
        //console.log(li)             
        return false                
    }
    console.log(match)   
    
    if(li.item(0)){
        //console.log(li.item(0).className)
        li.item(0).classList.add('active')
    }
    
}

    render(){

        const changeLinkActive = (match) =>{
            if(!match){
                return false
            }
            let li = document.getElementsByName(`${match.path}`)
            let pai
            if(li.item(0)){
                pai =li.item(0).parentNode
                for(var i = 0; i < pai.children.length; i++){
                    pai.children[i].classList.remove('active')                    
                }
                li.item(0).classList.add('active')
            }                        
        }

        
return(
<aside className="main-sidebar">
    <section className="sidebar">
        <ul className="sidebar-menu tree">
            <li className="header">CONTROLE FINANCEIRO</li>
            <li className="" name="/home">
                <NavLink to="/home" isActive={changeLinkActive}>
                    <i className="fa fa-bar-chart"></i>
                    <span>Visão Geral</span>
                </NavLink>
            </li>
            <li className="" name="/despesas">
                <NavLink to="/despesas" isActive={changeLinkActive}>
                    <i className="fa fa-credit-card"></i>
                    <span>Despesas</span>
                </NavLink>
            </li>
            <li>
                <a href="">
                    <i className="fa fa-tags"></i><span>Categorias</span>
                </a>
            </li>
        </ul>
    </section>
</aside>)
}

}