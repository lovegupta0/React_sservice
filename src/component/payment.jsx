import React from "react";
import {Button,Form,Table} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setSignupData} from "../redux/signup_redux/signup_action";


function Payment({setSignupData,profileData}){
    let history=useHistory();
    const [paymentData,setPaymentData]=React.useState({
        cardname:"",
        cardnumber:"",
        expdate:"",
        cvv:""
    })
    function handlePayment(event){

        var {name,value}=event.target;
        setPaymentData( prevValue=>{
             return{
                 ...prevValue,
                [name]:value
            }
           
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        var arr=profileData;
        arr[2]=paymentData;
        setSignupData(arr);
        history.push("/signup/plan/payment/interest");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <h3 className="mb">Payment</h3>
            <label className="mr" >Accepted Cards:</label>
           <img src="/card.jpg" alt="img" />
            <Table className="mt">
                <tbody>
                    <tr>
                        <td>
                        <Form.Label >Name on Card:</Form.Label>
                        </td>
                        <td>
                        <Form.Control type="text" id="cname" name="cardname" onChange={handlePayment}  placeholder="John More Doe" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Label >Credit card number:</Form.Label>
                        </td>
                        <td>
                            <Form.Control type="text" id="ccnum" name="cardnumber"  onChange={handlePayment} placeholder="1111-2222-3333-4444" />  
                        </td>
                    </tr>
                    <tr>
                            <td>
                                <Form.Label >Exp Date:</Form.Label>
                            </td>
                            <td>
                                <Form.Control type="text" id="expdate" name="expdate"  onChange={handlePayment}  placeholder="MM/YYYY" />
                            </td>
                    </tr>
                    
                    <tr>
                            <td>
                                <Form.Label >CVV:</Form.Label>
                            </td>
                            <td>
                                <Form.Control type="text" id="cvv" name="cvv"  onChange={handlePayment} placeholder="352" />
                            </td>
                    </tr>
                </tbody>
            </Table>
            <hr/>
            <div className="mt center">
              
                <Button variant="outline-primary" type="submit">Next</Button>
                
            </div>

        </Form>
    );
}

const mapStateToProps=(state)=>({
    profileData:state.profileData.signupData
})

const mapDispatchToProps=dispatch=>({
    setSignupData:profileData=>dispatch(setSignupData(profileData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Payment);