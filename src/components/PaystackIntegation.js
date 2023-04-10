import PaystackPop from '@paystack/inline-js'
import { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



// The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  


const PaystackIntegation = () => {
const [email,setEmail] = useState("")
const [amount,setamount] = useState("")
const [firstname,setFirstname] = useState("")
const [lastname,setLastname] = useState("")
const [department,setDepartment] = useState("")
const paywithpaystack = (e) =>{ 
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key:"pk_test_e5b2c9d66ca4d19c15cc03c9579fd175d80ca08a",
        amount:amount * 100,
        email,
        firstname,
        lastname, 
        onSuccess(transaction){
            let message = ` Good Job! Payment Complete! Reference ${transaction.reference}`
            alert(message)
            setEmail("")
            setFirstname("")
            setLastname("")
            setamount("")
            setDepartment("")
            
        },
        onCancel(){
            alert(" You Have Canceled the Transaction")
        }
     })
}

  return (
    <> 
        <Navbar />
    <div className="gloat">
            
    <div className='Main'>
        <div className='Dept'>
            <h3>MAKE PAYMENT.</h3>
        </div>

        
        {/* <span className='spa'>Register and Enjoy the service...</span> */}
        <div className='semi-main'>

        
         <form id="paymentForm" className='dior'>
         
            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} id="email-address" />
            </div>


            <div className="form-group">
              <label for="amount">Amount</label>
                <input type="tel" placeholder='Enter Amount' value={amount} onChange={(e)=>setamount(e.target.value)} id="amount"  />
            </div>



            <div className="form-group">
                <label for="first-name">First Name</label>
                <input type="text" placeholder='Enter FirstName' value={firstname} onChange={(e)=>setFirstname(e.target.value)} id="first-name" />
            </div>



            <div className="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" placeholder='Enter LastName' value={lastname} onChange={(e)=>setLastname(e.target.value)}  id="last-name" />
            </div>



            <div>
                <label for="department">Department</label>
                
                <select placeholder='Enter LastName' value={department} onChange={(e)=>setDepartment(e.target.value)}  id="last-name" className='department'>

                    <option value="" selected disabled hidden > Select Department</option>
                    <option value="Genetic and biotechnology">Genetic and Biotechnology</option>
                
        
                    <option value="biotechnology">Microbiology</option>
                    <option value="Zoology">Zoology and Environmental Biology</option>
                    <option value="Plant science">Plant science</option>
                    <option value="Science laboratory Technology">Science laboratory Technology</option>



                    <option value="Adult Education">Adult Education</option>
                    <option value="Accounting">Accounting</option>

                    <option value="Agric-Economics and Extension">Agric-Economics and Extension</option>

                    <option value="Agricultural Enginneering">Agricultural Engineering</option>

                    <option value="Agriculture">Agriculture</option>

                    <option value="Architecture">Architecture</option>
                    

                    <option value="Animal Science">Animal Science</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Dentistry and Dental Surgery">Dentistry and Dental Surgery</option>
                    <option value="Pharmacy">Pharmacy</option>
                    

                    <option value="Computer Science">Computer Science</option>




                    <option value="Banking & Finance">Banking & Finance</option>
                    <option value="Business Management/Management Science">Business Management/Management Science</option>
                    <option value="Marketing">Marketing</option>

                    <option value="Biochemistry">Biochemistry</option>

                    



                    <option value="Agricultural Education">Agricultural Education</option>
                    <option value="Education and Biology">Education and Biology </option>
                    <option value="Education and Chemistry">Education and Chemistry </option>
                    <option value="Education and Physics">Education and Physics </option>

                    
                    <option value="Business Education">Business Education</option>
                    <option value="Business Studies">Business Studies</option>
                    <option value="Applied Chemistry"> Applied Chemistry</option>




                    <option value="Economics Education"> Economics Education</option>
                    <option value="Education Administration and Planning">Education Administration and Planning</option>
                    <option value="Environmental Education">Environmental Education</option>
                    <option value="Educational Technology">Educational Technology</option>
                    <option value="Elementary Education">Elementary Education</option>
                    <option value="English Education">English Education</option>




                    <option value="French Education">French Education</option>
                    <option value="Education And Religious Studies">Education And Religious Studies</option>
                    <option value="Education And Social Science">Education And Social Science</option>
                    <option value="Education Arts">Education Arts</option>
                    <option value="Education Technology">Education Technology</option>

                    <option value="Mathematics Education">Mathematics Education</option>
                    <option value="Estate Management">Estate Management</option>
                    <option value="Fisheries">Fisheries</option>
                    <option value="Geology">Geology</option>
                    <option value="Human Nutrition And Dietetics">Human Nutrition And Dietetics</option>
                    <option value="Human Anatomy">Human Anatomy</option>
                    <option value="Law">Law</option>

                    <option value="Peace And Conflict Studies">Peace And Conflict Studies</option>
                    <option value="Pharmacology">Pharmacology</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Physical And Health Education">Physical And Health Education</option>
                    <option value="Physics">Physic</option>
                    <option value="Policy And Administrative Studies">Policy And Administrative Studies</option>



                    <option value="Public Administration">Public Administration</option>
                    <option value="Public Health">Public Health</option>
                    <option value="Pure Chemistry">Pure Chemistry</option>
                    <option value="Radiography">Radiography</option>
                    <option value="Religious Studies">Religious Studies</option>
                    <option value="Social Work">Social Work</option>



                    <option value="Sociology">Sociology</option>
                    <option value="Soil Science">Soil Science</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="Statistics">Statistics</option>
                    <option value="Surveying And Geo-Informatics">Surveying And Geo-Informatics</option>
                    <option value="Theatre Arts">Theatre Arts</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Urban And Regional Planning">Urban And Regional Planning</option>


                    {/* <option value=""></option>
                    <option value="Law">Law</option>
                    <option value="Law">Law</option> */}

                    <option value="Music">Music</option>
                    <option value="Nursing/Nursing Science">Nursing/Nursing Science</option>

                    <option value="Medicine And Surgery">Medicine And Surgery</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Mass Communication">Mass Communication</option>
                    <option value="Human Physiology">Human Physiology</option>
                    <option value="Medical Laboratory Science">Medical Laboratory Science</option>
                    <option value="Mathematics/Statistics">Mathematics/Statistics</option>



                    <option value="Home Economics And Education">Home Economics And Education</option>
                    <option value="Guildance And Counselling">Guildance And Counselling</option>
                    <option value="Geography And Environmental Science">Geography And Environmental Science</option>
                    <option value="Food Science And Technology">Food Science And Technology</option>
                    <option value="Geography Education">Geography Education</option>
                    <option value=" Educational / Guidance and Counseling">Educational / Guidance and Counseling</option>
                    <option value="History Education">History Education</option>
                    <option value="Educational Psychology">Educational Psychology</option>
                    <option value="Educational Administration And Planning">Educational Administration And Planning</option>
                    <option value="Human Kinetics and Health Education">Human Kinetics and Health Education</option>


                    <option value="Library and Information Science">Library and Information Science</option>
                    <option value="Mathematics Education">Mathematics Education</option>
                    <option value="Applied GeoPhysics "> Applied GeoPhysics</option>
                    <option value="Political Science Education">Political Science Education</option>
                    <option value="Religious Studies Education">Religious Studies Education</option>
                    <option value="Social Studies">Social Studies</option>



                    <option value="Special Education">Special Education</option>
                    <option value="Agriculture"> Agriculture</option>
                    <option value="Fisheries and Aquaculture">Fisheries and Aquaculture</option>
                    <option value="Forestry and Wildlife Management"> Forestry and Wildlife Management</option>
                    <option value="Environmental Protection & Resource Management">Environmental Protection & Resource Management</option>



                    <option value="Christian Religious Studies">Christian Religious Studies</option>
                    <option value="English and Literary Studies"> English and Literary Studies</option>
                    <option value="French">French</option>
                    <option value="History and International Studies">History and International Studies</option>



                    <option value="Linguistics">Linguistics</option>
                    <option value="Linguistics and Communication Studies">Linguistics and Communication Studies</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Religious and Cultural Studies">Religious and Cultural Studies</option>


                    

                </select>
            </div>
            <div className="form-submit">
             <button type="submit" onClick={paywithpaystack}><Link> Click To Pay</Link> </button>
            
         
            </div>
            </form>
        </div>

    </div>
     
          </div>
          </>
          )
}

export default PaystackIntegation;