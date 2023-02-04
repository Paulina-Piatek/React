import { Navigate } from "react-router-dom"
import { useState } from "react"
export default function About() {
    const [user, setUser] = useState('mario')
    if(!user) {
        return <Navigate to="/" replace = {true}/> }
    return (
        <div className="about">
            <h2> About Us </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis ut tortor at elementum. 
            Phasellus cursus pretium egestas. Nam convallis imperdiet ultrices. Morbi rutrum nunc eget quam pulvinar tincidunt. 
            Sed turpis augue, vulputate et mi ac, posuere cursus ex. In consectetur dictum lectus vel pellentesque. 
            Mauris feugiat, sem vitae sollicitudin scelerisque, orci metus consequat tellus, ac ornare ex dui id ligula. 
            Cras id euismod enim. Vestibulum eu cursus arcu, ultricies interdum magna. 
            Vestibulum mattis rutrum justo, et auctor elit viverra suscipit. </p>
            <p>Aliquam ac felis est. Cras ex metus, mattis sed rutrum quis, laoreet ut lorem. 
            Praesent lacus nulla, pharetra sed iaculis nec, semper id lorem. Aliquam malesuada tempus tortor, at imperdiet leo luctus ut.
            Sed eu nibh neque. In ut enim mi. Mauris sed elit varius, finibus libero ut, commodo lectus. 
            In lacus felis, porta ac risus dignissim, consequat imperdiet lorem. 
            Nam molestie diam ut lorem varius, sit amet rutrum nunc tempor. 
            Nunc vehicula nisi ut massa posuere ultrices. </p>
            <p>Etiam condimentum purus at dui ullamcorper, ut vestibulum ligula pretium. 
            Morbi sed tellus ornare, hendrerit arcu non, accumsan libero. Suspendisse tristique sed lorem nec accumsan.
            Suspendisse non lectus egestas, dapibus turpis et, feugiat erat.
            </p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}