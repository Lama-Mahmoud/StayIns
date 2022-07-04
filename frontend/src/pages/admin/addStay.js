import { useState } from "react";


const AddStay = () => {
    const features=["Villa","Beach","Island" ,"home","Room","Mountain"];
    const [Name,setName]=useState('');
    const [price,setPrice]=useState(0);
    const [rate,setRate]=useState(0);
    const [checked, setChecked] = useState([]);
    const [baseImage, setBaseImage] = useState("");


    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    }

    //assign value
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    }

    // convert from image to base64
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
        });
    }

  const handleClick=(event)=>{
    event.preventDefault();
        console.log(price);
        console.log(rate);
        console.log(Name);
        console.log(checked);
        console.log(baseImage);
    }

    return ( <div>
        <div>
            <label>Name</label><br/>
            <input type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}></input>
        </div> 
        <br/>
        <div>
            <label>Price</label><br/>
            <input type="number" 
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}></input>
        </div> 
        <br/>
        <div>
            <label>rate</label><br/>
            <input type="number" 
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}></input>
        </div> 
        <br/>
        <div className="title">Your CheckList:</div>
            <div className="list-container">
                {features.map((item, index) => (
                <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck}/>
                <span>{item}</span>      
         </div>
         ))}
    </div>
        <br/>
        <div id="images">
            <input type="file" 
            name="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
            uploadImage(e);}}
          />
        </div>
        <br/>
        <img src={baseImage}/>
        <br/>
            <button onClick={handleClick}>Add Stay</button>
    </div> );
}
 
export default AddStay;