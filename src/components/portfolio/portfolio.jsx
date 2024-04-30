import React, { useState } from 'react';
import { Container, Col, Nav, Row, Tab, TabContainer } from 'react-bootstrap'; // แก้ชื่อคอมโพเนนต์ที่นำเข้ามา

import IMG1 from '../../assets/e1.png';
import IMG2 from '../../assets/Edit.png';
import IMG3 from '../../assets/phon.png';
import IMG4 from '../../assets/tews2.png';
import IMG5 from '../../assets/darshboad.png';
import { FaPlus } from 'react-icons/fa';
import './styles.css'; // import CSS file

import { ProjectCard } from './ProjecCard';
import './projecs.css'
import TrackVisibility from 'react-on-screen';

export const  Projects = () => {

const projects = [
  {
    id: 1,
    image: IMG4,
    title: 'Project overview ',
    description: 'This is a project overview showcases the main features and functionalities of the project.   ',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Web-e commerce ',
    description: 'Our first project focused on developing applications related to online trading and efficient connectivity. By using the Composer module of the Python language to connect and extract data efficiently. This project has been designed to enable users to do business online more conveniently and efficiently.    ',
    description2: 'Programming language in projects : php | python | javascript | css | html  ',
    github: 'https://github.com/tiwpeter/web-ecommerce',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG2,
    title: 'react api/crud/delete  ',
    description: 'This second project focuses on deploying CRUD operations using APIs, which is an important topic in the web application development world. It uses Node.js and Flask for server-side management, along with React, a popular development framework for rendering web applications. The project also includes the ability to upload and edit beautifully and conveniently rendered images.',
    description2: 'This project was developed with : framework :  react | nodejs | flask ',
    github: 'https://github.com/tiwpeter/web-api-restful',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG3,
    title: 'android/ios ',
    description: 'This project is to develop an application on Android and iOS platforms using Dart and Flutter as the main tools. It is an ideal tool for developing robust applications that can run on both platforms. This project is focused on providing the best service and experience for our users on both platforms.',
    github: 'https://github.com/tiwpeter/app-android-ecommerce',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 5,
    image: IMG5,
    title: 'dashboad ',
    description: 'This dashboard project serves as a comprehensive platform for managing various aspects of buy/sell operations, offering functionalities such as adding, displaying, deleting, editing, and categorizing items. Leveraging Next.js and TypeScript, this project ensures robustness and scalability. With intuitive user interfaces and seamless navigation, users can efficiently handle product management tasks. Explore the GitHub repository for a closer look at the codebase and check out the demo to experience the dashboard in action.',
    description2: 'This project uses next js and typescript.    ',
    github: 'https://github.com/tiwpeter/admin-dashboard-Manage-products',
    demo: 'https://dribble.com/Alien_pixels'
  },
];

return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" ></img>
  </section>
)
}