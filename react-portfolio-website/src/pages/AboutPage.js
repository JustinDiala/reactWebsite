import React from 'react';
import Hero from "../components/Hero";
import Content from '../components/Content';

function AboutPage(props) {

    return(

        <div>
            <Hero title={props.title}/>

            <Content>
                <p>Greetings! My name is Justin Diala and Welcome to my portfolio Website. Here you can see my projects on my Github, Resume, and Contact information.</p>

                <p>I have experience in low level programming (Assemby/MIPs, C, and C++) from my studies as a Computer Engineering student. I have industry experience with
                .NET web development (.NET framework and some experience with .NET Core), C#, python, Javascript, HTML/CSS, Computer Networks (Pub/Sub model), Test Automation with both UI
                and Computer Networks using Robot Framework, Sikulix, and Squish framework.</p>
                
                <p>My professional work experience include being a Application Analyst/Full-stack developer for the School District making financial applications related to Accounting and as
                Software Developer for General Dynamics Mission Systems aiding in the development of various military equipment using Computer Networks</p>

                <p>I am very passionate about Computer/Software Engineering and always up for the challenge! I am constantly trying to learn new things and just recently I am learning ReactJs
                and AngularJs to make cool web applications like this website.</p>
                
                <p>My latest projects that I am currently working on and supporting on is a Offline capable server able to provide Syncing information to a server when a user goes offline and reconnects
                    with the server. We are using Ngrx, Typescript, Offline-Db, Dexi.db
                </p>

            </Content>

        </div>

    );
}

export default AboutPage