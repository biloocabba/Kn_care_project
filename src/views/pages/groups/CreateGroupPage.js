/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from  "react-redux";
import {createGroup} from "actions/groups"
//import {user_initialState} from "../../../mock-data/employees"
import AsyncSelect from 'react-select/async';
import SelectMemberPaginate from "./SelectMemberPaginate";
import AddMemberPanel from "./AddMemberPanel.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import GroupHeader from "components/Headers/GroupHeader.js";
import Select from 'react-select';

function CreateGroupPage() {


  // const initialGroupState = {
  //   id: null,
  //   name: "",
  //   description: "",
  //   members: []
  // }

  // const [group, setGroup] = useState(initialGroupState)

  const [groupName, setGroupName] = useState('')
  const [groupDescription, setGroupDescription] = useState('')
  const saveGroup = (e) => {
    e.preventDefault();
  }
  /*

  const [submitted, setSubmitted] = useState(false);

  const optionsRegion = [
    { value: "EE", label: 'Estonia' },
    { value: "FI" ,label:"Finland"},
   
];
    const [region, setRegion] = useState(optionsRegion[0]);
    const [currentCountry, setCurrentCountry] = useState(null);

    const onchangeSelect = (item) => {
    setCurrentCountry(null);
    setRegion(item);
};

  const handleInputChange = event => {
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  };

  const saveGroup = (e) => {
    e.preventDefault();
    const {name, description} = group;
    dispatch(createGroup(name, description))
      .then(data => {
        setGroup({
          id: Math.floor(Math.random() * 10000),
          name: data.name,
          description: data.description,
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  
  }

  const newGroup = () => {
    setSubmitted(false);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  let options = []

  const [members, setMembers] = useState([])
  const [inputValMembers, setInputValMembers] = useState(null)

  const handleChangeMembers = (e) => {
    setMembers(Array.isArray(e) ? e.map(x => x.value) : []);
  }
   

  const getMembers = () =>{
  //  user_initialState.map(user => options.push( {value: user.id, label: `${user.firstName} ${user.lastName}`}))
  }

  const filterMembers = (inputValMembers) => {
    return options.filter(i =>
      i.label.toLowerCase().includes(inputValMembers.toLowerCase())
    );
  };
*/

  //temporary before being able to make query with search parameter

  // const promiseOptions = inputValMembers =>
  // new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(filterMembers(inputValMembers));
  //   }, 1000);
  // });

  // useEffect(() => {
  //   getMembers()
  // }, []);
  

  

  return (
    <>
      
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "100px",        
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />

      </div>

      <Container className="mt--6" fluid>
        <Row>
     
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Group</h3>
                  </Col>                
                </Row>
              </CardHeader>
              <CardBody>
              {/* {submitted ? (
                 <div>
                 <h4>You submitted successfully!</h4>
                 <button className="btn btn-success" onClick={newGroup}>
                   Add
                 </button>
               </div>
             ) : ( */}
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Group information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                       <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            Group Name
                          </label>
                          <Input
                            name="name"
                            value={groupName}
                            required
                            id="input-group-name"
                            placeholder="Group name"
                            type="text"
                            onChange={e => setGroupName(e.target.value)}  
                          />
                        </FormGroup>
                      </Col>                    
                    </Row>
                  
                    <Row>
                       <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="description"
                          >
                            Group Description (optional)
                          </label>
                          <Input
                          name="description"
                            id="description"
                            placeholder="A few words about the group"
                            rows="4"
                            type="textarea" 
                            onChange={e =>  setGroupDescription(e.target.value)}  
                            alue={groupDescription}                         
                          />
                        </FormGroup>
                      </Col>                    
                    </Row>

                    <Row>
                       <Col lg="10">
                       
                       <AddMemberPanel 
                          onchangeRole={ (e) => console.log(e)}
                          onchangeCountry={(e) => console.log(e)}
                          onchangeBunit={(e) => console.log(e)}
                          onSelectCareMember={(e) => console.log(e)}                        
                        />

                       {/* <Row>

                       <Col lg="2">
                       <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="members"
                          >
                            Care Role
                          </label>
                          <Select
                                  value={region}
                                  onChange={onchangeSelect}
                                  options={optionsRegion}
                                  getOptionValue={(option) => option.value}
                                  getOptionLabel={(option) => option.value}
                              />

                          </FormGroup>
                       </Col> 
                       <Col lg="2">
                       <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="members"
                          >
                            Country
                          </label>
                          <Select
                                  value={region}
                                  onChange={onchangeSelect}
                                  options={optionsRegion}
                                  getOptionValue={(option) => option.value}
                                  getOptionLabel={(option) => option.value}
                              />

                          </FormGroup>
                       </Col>   
                       <Col lg="2">
                       <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="members"
                          >
                            Business Unit
                          </label>
                          <Select
                                  value={region}
                                  onChange={onchangeSelect}
                                  options={optionsRegion}
                                  getOptionValue={(option) => option.value}
                                  getOptionLabel={(option) => option.value}
                              />

                          </FormGroup>
                       </Col>  
                       <Col lg="6">
                       <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="members"
                          >
                            Add members
                          </label>
                          <Select
                                  isMulti
                                  value={region}
                                  onChange={onchangeSelect}
                                  options={optionsRegion}
                                  getOptionValue={(option) => option.value}
                                  getOptionLabel={(option) => option.value}
                              />

                          </FormGroup>
                       </Col> 
                       </Row>*/}
                     
                            </Col> 
                        </Row>           
                      </div>
                
              
              


               
                      
     
                 
                  <div className="pl-lg-4">
                   
                   <button onClick={saveGroup} className="btn btn-success"> Submit </button>
                 </div>
                </Form>

             {/* )} */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateGroupPage;
