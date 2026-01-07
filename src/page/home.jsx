import React, { useState } from "react";
import { Form } from "../components/userform";
import { List } from "../components/userlist";
import { saveData } from "../Database/local"; 
import { getData } from "../Database/local";

export const Homepage = () => {

    const [list, setList] = useState([])



    function handleform(person){
        saveData(person)
        const people = getData();
        setList(people)
    }

    function handleDelete(data){
        const x = list.filter((a)=>{
                    return(
                        a.Name !== data
                    );
                })
            setList(
               x
            )        
    }

 

    
    

    

    return(
        <section>
        <div className="container">
            <div className="text-6xl font-semibold mb-6">
                  <h1 className="text-left">User Dashboard</h1>
            </div>
            <Form data = {handleform}></Form>

            <h2 className="text-left my-8 text-4xl">List of users</h2>
            <ul className="flex flex-col gap-3">
                {
                    list.map((cur, index) => {
                        return(
                        <List key={index} name={cur.Name} email={cur.Email} tel={cur.Tel} handleDelete={handleDelete} />
                        )
                    }) 
                }
            </ul>
            
           
        </div>
        </section>

    )
}