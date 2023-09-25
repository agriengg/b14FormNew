import './App.css';

function App() {
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
                            <input class="" type="text" name="fname" id="Field" placeholder="Enter the field name"/>
                        </div>
                        <div class="child">
                            <label> Customer Email :</label>
                            <input type="email" name="fname" id="email" placeholder="123@gmail.com"/>
                        </div>
                        <label style={{marginbottom: "5px"}}>Vehicle Make:</label>
                        <select name="Vechicle" id="make" style={{paddingright: "50px", margintop: "5px" ,height: "20px", marginbottom: "7px"}}>
                            <option value="" disabled selected hidden>Please Choose...</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Toyota">Toyota</option>
                        </select>
                        
                        <div class="child">
                            <label>Vechicle Year :</label>
                            <input type="text" name="Vechicle" id="Year"/>
                        </div>
                        <div class="child">
                            <label>Part Name :</label>
                            <input type="text" name="part" id="partname"/>
                        </div>
                        
                    </div>
                    <div>
                        <div class="child">
                            <label> Customer Name :</label>
                            <input class="" type="text" name="fname" id="name" placeholder="Enter your name"/>
                        </div>
                        <div class="child">
                            <label> Customer Phone no :</label>
                            <input type="text" id="numericInput" />
                        </div>
                        <label>Vechicle Model :</label>
                        <select name="required" id="Model" style={{paddingright:"50px" ,margintop: "5px", height: "20px",marginbottom: "7px"}}>
                            <option value="" disabled selected hidden>Please Choose...</option>
                            <option value="Impala">Impala</option>
                            <option value="Elevate">Elevate</option>
                            <option value="Camry">Camry</option>
                        </select>
                        
                        <div class="child">
                            <label>Vechicle VIN :</label>
                            <input type="text" name="Vechicle" id="VIN"/>
                        </div>
                        <div class="child">
                            <label>Part Number :</label>
                            <input type="type" name=" identification" id="partnumber"/>
                        </div>
                    </div>
                </div>
                <div class="childs">
                    <label> Quality :</label>
                    <input type="number" name="Quality" id="qualityno"/>
                </div>
                <div class="childs">
                    <label>Shipping Address :</label>
                    <input type="text" name="type" id="address"/>

                </div>
                <div class="childs">
                    <label> Payment Method :</label>
                    <select name="pay" id="PaidMethod" style={{paddingright: "55px", height: "20px" ,marginright: "30px" }}>
                        <option value="" disabled selected hidden>Please Choose...</option>
                        <option value="CASH">CASH</option>
                        <option value="G-PAY">G-PAY</option>
                        <option value="PHONE-PAY">PHONE-PAY</option>
                           
                    </select>
                </div>
                <div class="childs">
                    <label>Notes :</label>
                    <input type="text" id="rough" name="text"/>
                </div>
                
                <div class="">
                    <input  type="checkbox"/>
                    <label>i agree with all terms and conditions and privacy policies of
                        evolko</label>
                </div>
                <div class="children" style={{paddingleft: "150px", margin: "10px"}}>
                    <button onclick="SubmitData()" type="button">Sign up</button>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
