import { useState } from 'react';
import './App.css';

function App() {
    const [Field , setField ] = useState("");
    const [customerName , setcustomerName] = useState("");
    const [email , setemail] = useState("");
    const [Phoneno , setPhoneno] = useState("");
    const [vechicalMake , setvechicalMake] = useState("");
    const [vechicalModel , setvechicalModel] = useState("");
    const [vechicalYear , setvechicalYear] = useState("");
    const [vechicleVIN , setvechicleVIN] = useState("");
    const [partName , setpartName] = useState("");
    const [partNumber , setpartNumber] = useState("");
    const [Quality , setQuality] = useState("");
    const [shippingAddress , setshippingAddress] = useState("");
    const [paymentMethod , setpaymentMethod] = useState("");
    const [notes , setnotes] = useState("")

    function handleSubmit(){
        // debugger
        let field = Field
        let customer_name = customerName
        let customer_email = email
        let customer_Phoneno = Phoneno
        let vechical_Make = vechicalMake 
        let vechical_Model = vechicalModel
        let vechical_Year = vechicalYear
        let vechicle_VIN = vechicleVIN
        let part_Name = partName
        let part_Number = partNumber
        let vechical_Quality = Quality
        let shipping_Address = shippingAddress
        let payment_Method = paymentMethod
        let empty_notes = notes

        let output= [{
            Field:field, 
            customername :customer_name, 
            customeremail :customer_email, 
            customerPhoneno:customer_Phoneno, 
            vechicalMake:vechical_Make ,
            vechicalModel:vechical_Model, 
            vechicalYear:vechical_Year ,
            vechicleVIN:vechicle_VIN ,
            partName:part_Name ,
            partNumber:part_Number, 
            vechicalQuality:vechical_Quality,
            shippingAddress:shipping_Address ,
            paymentMethod:payment_Method ,
            emptynotes:empty_notes ,
            
        }] 


        console.log(output);

    }
    let number =[0-9]
  return (
    <div class="container">
        <div class="container_one">
            <div class="content">
                <div class="contents">
                    <div class="little_box flex">
                        <img src="https://seeklogo.com/images/C/chevrolet-logo-D352AD8FCA-seeklogo.com.png" width="30px" height="20px" alt='Chevrolet logo'/>

                    </div>
                    <div>
                        <div class="texth1">Chevrolet</div>
                        <div class="paragraph ">Chevrolet Impala, dolor sit amet <br/>consectetur adipisicing elit. <br/>Fugiat
                            ullam at qui eligendi
                            <br/>quisquam, natus sed impedit <br/> voluptas repellendus quasi sint <br/> optio! Laboriosam
                            at corporis
                        </div>
                    </div>
                </div>
                <div class="contents">
                    <div class="little_box flex">
                        <img src="https://www.vippng.com/png/full/432-4329536_cropped-hyundai-logo-hyundai-logo-hyundai-logo.png"
                            width="30px" height="20px" alt='Hyundai logo'/>
                    </div>
                    <div>
                        <div class="texth1">Hyundai</div>
                        <div class="paragraph ">Honda Elevate, The Elevate was <br/>unveiled in India on 6 June 2023 <br/>Fugiat
                            ullam at qui eligendi
                            <br/>quisquam, natus sed impedit <br/> voluptas repellendus quasi sint
                        </div>
                    </div>
                </div>
                <div class="contents">
                    <div class="little_box flex">
                        <img src="https://seeklogo.com/images/T/toyota-logo-BE11A14C6B-seeklogo.com.png" width="30px" height="20px" alt='Toyota logo'/>
                    </div>
                    <div>
                        <div class="texth1">Toyota</div>
                        <div class="paragraph ">Toyota Camry, dolor sit amet <br/>consectetur adipisicing elit. <br/>Fugiat
                            ullam at qui eligendi
                            <br/>quisquam, natus sed impedit <br/> voluptas repellendus quasi sint <br/> optio! Laboriosam
                            at corporis
                        </div>
                    </div>
                </div>
            </div>
            <div class="Login">
                <div class="title child">Register Here</div>
                <div class="cnt">
                    <div>
                        <div class="child">
                            <label>Field :</label>
                            <input onChange = {function(e){
                                setField(e.target.value)

                            }}class="" type="text" name="fname" id="Field" placeholder="Enter the field name"/>
                        <span>{Field.length == 0 ? "Please type the fieldname" :""}</span>
                        </div>
                        <div class="child">
                            <label> Customer Email :</label>
                            <input onChange = {function(e){
                                setemail(e.target.value)

                            }}type="email" name="fname" id="email" placeholder="123@gmail.com"/>
                            
                        <span>{email.length == 0 ? "Please type the email" : (!email.includes("@") || !email.includes(".")) ? "Please type the valid email" : ""}</span>
                        </div>
                        <label style={{marginbottom: "5px"}}>Vehicle Make:</label>
                        <select onChange = {function(e){
                                setvechicalMake(e.target.value)

                            }} name="Vechicle" id="make" style={{paddingright: "50px", margintop: "5px" ,height: "20px", marginbottom: "7px"}}>
                            <option value="" disabled selected hidden>Please Choose...</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Toyota">Toyota</option>
                        </select>
                        <span>{vechicalMake.length == 0 ? "Please choose the vechical make" : ""}</span>
                        <div class="child">
                            <label>Vechicle Year :</label>
                            <input onChange = {function(e){
                                setvechicalYear(e.target.value)

                            }}type="text" name="Vechicle" id="Year"/>
                        <span>{vechicalYear.length == 0 ? "Please type the year" : isNaN(vechicalYear.split("")[vechicalYear.length -1])? "remove letter":""}</span>
                        </div>
                        <div class="child">
                            <label>Part Name :</label>
                            <input onChange = {function(e){
                                setpartName(e.target.value)

                            }}type="text" name="part" id="partname"/>
                        <span>{partName.length == 0 ? "Please type the partname" :""}</span>
                        </div>
                        
                    </div>
                    <div>
                        <div class="child">
                            <label> Customer Name :</label>
                            <input  onChange = {function(e){
                                setcustomerName(e.target.value)

                            }} type="text" name="fname" id="name" placeholder="Enter your name"/>
                            <span>{customerName.length == 0 ? "Please type the name" : !isNaN(customerName.split("")[customerName.length -1])? "remove number":"" }</span>
                        </div>
                        <div class="child">
                            <label> Customer Phone no :</label>
                            <input onChange = {function(e){
                                setPhoneno(e.target.value)
                                
                            }}type="text" id="numericInput" />
                            <span>{Phoneno.length == 0 ? "Please type the number" : isNaN(Phoneno.split("")[Phoneno.length -1])? "remove letter":"" }</span>
                        </div>
                        <label>Vechicle Model :</label>
                        <select onChange = {function(e){
                                setvechicalModel(e.target.value)

                            }}name="required" id="Model" style={{paddingright:"50px" ,margintop: "5px", height: "20px",marginbottom: "7px"}}>
                            <option value="" disabled selected hidden>Please Choose...</option>
                            <option value="Impala">Impala</option>
                            <option value="Elevate">Elevate</option>
                            <option value="Camry">Camry</option>
                        </select>
                        <span>{vechicalModel.length == 0 ? "Please choose the model" : ""}</span>
                        
                        <div class="child">
                            <label>Vechicle VIN :</label>
                            <input onChange = {function(e){
                                setvechicleVIN(e.target.value)

                            }}type="text" name="Vechicle" id="VIN"/>
                        <span>{vechicleVIN.length == 0 ? "Please type the vechicleVIN" :""}</span>
                        </div>
                        <div class="child">
                            <label>Part Number :</label>
                            <input onChange = {function(e){
                                setpartNumber(e.target.value)
                            }} type="type" name=" identification" id="partnumber"/>
                        <span>{partNumber.length == 0 ? "Please type the partNumber" :""}</span>
                        </div>
                    </div>
                </div>
                <div class="childs">
                    <label> Quality :</label>
                    <input onChange = {function(e){
                                setQuality(e.target.value)

                            }} type="number" name="Quality" id="qualityno"/>
                <span>{Quality.length == 0 ? "Please type the qulityno" : isNaN(Quality.split("")[Quality.length -1])? "remove letter":""}</span>
                </div>
                <span>{}</span>
                <div class="childs">
                    <label>Shipping Address :</label>
                    <input onChange = {function(e){
                                setshippingAddress(e.target.value)

                            }} type="text" name="type" id="address"/>
                <span>{shippingAddress.length == 0 ? "Please type the Address" :""}</span>
                </div>
                <div class="childs">
                    <label> Payment Method :</label>
                    <select onChange = {function(e){
                                setpaymentMethod(e.target.value)

                            }}name="pay" id="PaidMethod" style={{paddingright: "55px", height: "20px" ,marginright: "30px" }}>
                        <option value="" disabled selected hidden>Please Choose...</option>
                        <option value="CASH">CASH</option>
                        <option value="G-PAY">G-PAY</option>
                        <option value="PHONE-PAY">PHONE-PAY</option>      
                    </select>
                    <span>{paymentMethod.length == 0 ? "Please choose the paymentMethod" : ""}</span>
                
                </div>
                <div class="childs">
                    <label>Notes :</label>
                    <input onChange = {function(e){
                                setnotes(e.target.value)

                            }}type="text" id="rough" name="text"/>

                <span>{notes.length == 0 ? "Please type the notes" :""}</span>
                </div>
                
                <div class="">
                    <input  type="checkbox"/>
                    <label>i agree with all terms and conditions and privacy policies of
                        evolko</label>
                </div>


                <div class="children" style={{paddingleft: "150px", margin: "10px"}}>
                    <button onClick={handleSubmit} type="button">Sign up</button>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
