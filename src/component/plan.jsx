import React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setSignupData} from "../redux/signup_redux/signup_action";
import "./style.css";

function Plan({setSignupData,profileData}){

    let history=useHistory();

    const [planValue,setPlan]=React.useState({
        plan:"0"
     });
 
     function handlePlan(event){
         var {name,value}=event.target;
         setPlan(()=>{
             return{
                 [name]:value
             }  
         });
     }

     function submitValue(event){
        event.preventDefault();
        var arr=[];
        arr[0]=profileData;
        arr[1]=planValue;
        setSignupData(arr);
        if(planValue.plan!=="0"){
            history.push("/signup/plan/payment");
        }

        else{
            history.push("/signup/plan/interest");
        }
        
    }
    
    return(
        <div>
            <h5 className="mb-0">Choose the plan that’s right for you.</h5>
            <small className="mb-3">Downgrade or upgrade at any time.</small>
            <Form onSubmit={submitValue}>
                <Table>
                    <thead>
                        <tr>
                            <th>
                            <h5>Plan</h5>
                            </th>
                            <th>
                                <h5>Basic</h5>
                            </th>
                            <th>
                                <h5>Standard</h5>
                            </th>
                            <th>
                                <h5>Premium</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <p>Quality</p>
                        </td>
                        <td>
                            <p>Basic HD</p>
                        </td>
                        <td>
                            <p>Full HD</p>
                        </td>
                        <td>
                            <p>Premium 4K</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Premium  Video Availability</p>
                        </td>
                        <td>
                            <p>&#10060;</p>
                        </td>
                        <td>
                            <p>&#10004;</p>
                        </td>
                        <td>
                            <p>&#10004;</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Screens you can watch on at the same time</p>
                        </td>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <p>2</p>
                        </td>
                        <td>
                            <p>5</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Unlimited movies and TV shows</p>
                        </td>
                        <td>
                            <p>&#10060;</p>
                        </td>
                        <td>
                            <p>&#10004;</p>
                        </td>
                        <td>
                            <p>&#10004;</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Price</p>
                        </td>
                        <td>
                            <p>0</p>
                        </td>
                        <td>
                            <p>199</p>
                        </td>
                        <td>
                            <p>499</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <p>Choose Plan</p>
                        </td>
                        <td>
                            <Form.Check type="radio" onChange={handlePlan} name="plan" value={0} />
                        </td>
                        <td>
                            <Form.Check type="radio"  onChange={handlePlan} name="plan" value={199} />
                        </td>
                        <td>
                            <Form.Check type="radio"  onChange={handlePlan} name="plan" value={499} />
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <hr/>
                
                <div >
                    <small>HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.</small>
                </div>
                <div className="center mt">
                    
                    <Button variant="outline-primary"  type="submit">Next</Button>
                  
                </div>
            </Form>
        </div>
    );
}

const mapStateToProps=(state)=>({
    profileData:state.profileData.signupData
})

const mapDispatchToProps=dispatch=>({
    setSignupData:profileData=>dispatch(setSignupData(profileData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Plan);