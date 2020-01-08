import React, { Component } from 'react';
import Navbar from './Components/layouts/Navbar';
import DatePicker from 'react-datepicker';
import Moment from 'react-moment';
import './App.css';
import {Container,Table,Input,Button,Label,Form,FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
 
import "react-datepicker/dist/react-datepicker.css";
class Expenses extends Component {

    emptyItem={
        id:'103',
        expenseDate: new Date(),
        descript:'',
        location:'',
        category:{id:1,name:'Travel'}
    }
    constructor(props){

        super(props);
        this.state = {
            date:new Date(),
            isLoading:true,
            Expenses:[],
            Categories:[],
            item:this.emptyItem
              }
              this.handleSubmit = this.handleSubmit.bind(this);
              this.handleChange = this.handleChange.bind(this);
              this.handleDateChange = this.handleDateChange.bind(this);
    }

    async handleSubmit(event){       
        const {item} = this.state.item;
        await fetch('/api/expenses',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item),

        });
        event.preventDefault();
        this.props.history.push("/expenses");
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item ={...this.state.item};
        item[name] =value;
        this.setState({item});
        console.log(this.state);
    }
    handleDateChange(date){
        let item={...this.state.item};
        item.expenseDate = date;
        this.setState({item});
    }
    async remove(id){
        await fetch('/api/expenses/${id}',
        {
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i =>i.id !==id);
            this.setState({Expenses:updatedExpenses});
        });
    }
    async componentDidMount(){
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories:body,isLoading:false});

        const responseExp = await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expenses:bodyExp,isLoading:false});

    }
    render() { 
        const title = <h3>Add Expense</h3>
        const {Categories} = this.state;
        const {Expenses,isLoading} = this.state;
        if(isLoading)
             return(<div>Loading....</div>)

        let optionList   = 
            Categories.map(category =>
            <option id={category.id} key={category.id}>
                {category.name}
            </option>)
        let rows = 
        Expenses.map( expense=>
            <tr key={expense.id}>
                <td>{expense.id}</td>
                <td><Moment date={expense.expenseDate} format="YYYY/MM/DD"></Moment></td>
                <td>{expense.descript}</td>
                <td>{expense.location}</td>
                
                
                <td><Button size="sm" color="danger" onClick={() =>this.remove(expense.id)}>Delete</Button></td>
            </tr>
            )
        return ( 
        
        <div>
        <Navbar/>
        <Container>
        {title}
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <label for="title">Title</label>
                    <br/>
                    <input type="text" name="title" id="title" onChange={this.handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <select>
                        {optionList}
                    </select>
                     
                    <br/>
                </FormGroup>
                <FormGroup>
                    <label for="expenseDate">Expense Date</label>
                    <br/>
                    <DatePicker selected={this.state.item.expenseDate} onChange={this.handleDateChange}/>
                </FormGroup>
                <FormGroup >
                    <label for="location">Location</label>
                    <br/>
                    <input type="text" name="location" id="location" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
        {''}
        <Container>
            <h3>Expense List</h3>
            <Table className="mt-4">
<thead>
    <tr>
        <th width="20%">IdNumber</th>
        <th width="10%">ExpressDate</th>
        <th>Description</th>
        <th width="10%">Location</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
    {rows}
</tbody>
            </Table>
        </Container>
        </div> );
    }
}
 
export default Expenses;



