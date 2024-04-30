import React, { useState } from 'react';
import IMG1 from '../../assets/e1.png';
import IMG2 from '../../assets/Edit.png';
import IMG3 from '../../assets/phon.png';
import IMG4 from '../../assets/tews2.png';
import './styles.css'; // import CSS file
import IMG5 from '../../assets/darshboad.png';
import { FaPlus } from 'react-icons/fa'; // Import Plus icon from react-icons library

const data = [
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

function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);

    return (
    <section id='portfolio' className="bg-gray-100 py-8">
      <div>
        <button>react</button>
        <h1>All</h1>
      </div>
      <div className="container mx-auto px-4 flex space-x-4">
        <div
          className={`bg-white shadow-md rounded-lg p-4 ${isHovered ? 'hovered' : ''}`}
          style={{
            background: "#1d1836", // กำหนดสีพื้นหลัง
            color: "#fff", // กำหนดสีข้อความ
            borderRadius: "8px", // กำหนดขอบโค้งของกรอบ
            maxWidth: "200px", // กำหนดความกว้างสูงสุด
            margin: "0 0.5rem", // กำหนด margin ระหว่าง div
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={IMG5}
            className=''
            alt="Portfolio Image" // เพิ่ม attribute alt เพื่อให้รู้จักกรอบ
          />
          <p>fff</p>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>

        <div
          className="bg-white shadow-md rounded-lg p-4"
          style={{
            background: "#1d1836", // กำหนดสีพื้นหลัง
            color: "#fff", // กำหนดสีข้อความ
            borderRadius: "8px", // กำหนดขอบโค้งของกรอบ
            maxWidth: "200px", // กำหนดความกว้างสูงสุด
            margin: "0 0.5rem" // กำหนด margin ระหว่าง div
          }}
        >
          <img
            src={IMG5}
            className=''
            alt="Portfolio Image" // เพิ่ม attribute alt เพื่อให้รู้จักกรอบ
          />
          <p>fff</p>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
