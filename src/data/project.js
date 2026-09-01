// The Portfolio currently features a single project. Add more objects here
// (and update the components that read this file) once more work exists.
import homeImage from '../assets/images/portfolio1/Home Page - Desktop.png'
import adminDashboardImage from '../assets/images/portfolio1/Admin Dashboard_Overview (desktop).png'
import profileImage from '../assets/images/portfolio1/Dashboard Profile Desktop.png'
import useCaseDiagram from '../assets/images/portfolio1/d__JSD_JSD Group project_Atilier_de_flora_02.use case diagram_Use-case-diagram and ER diagram.png'
import erDiagram from '../assets/images/portfolio1/d__JSD_JSD Group project_Atilier_de_flora_03.ER diagram_er-diagram-flower-shop.png'

const project = {
  id: 'atelier-de-flora',
  title: 'Atelier de Flora',
  category: 'E-Commerce Web Application',
  status: 'In Development',
  type: 'Bootcamp Group Project',
  shortDescription:
    'Atelier de Flora is an E-commerce web application currently being developed as part of my software development bootcamp.',
  description:
    "Atelier de Flora is an E-commerce web application for a flower shop, designed to support product browsing, customized bouquet creation, shopping cart and order management, customer accounts, and an administrative dashboard.",
  technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  github: '[ADD GITHUB URL]',
  images: {
    home: { src: homeImage, alt: 'Atelier de Flora home page, showing the bouquet customization tool and shop sections.' },
    adminDashboard: { src: adminDashboardImage, alt: 'Atelier de Flora admin dashboard overview with sales, orders, and product data.' },
    profile: { src: profileImage, alt: 'Atelier de Flora customer account page with profile and order details.' },
    useCaseDiagram: { src: useCaseDiagram, alt: 'Use case diagram mapping customer and admin interactions for Atelier de Flora.' },
    erDiagram: { src: erDiagram, alt: 'Entity-relationship diagram of the Atelier de Flora MongoDB data model.' },
  },
}

export default project
