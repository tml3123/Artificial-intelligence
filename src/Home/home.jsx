import { Link, NavLink } from 'react-router-dom'; // Remove Outlet
import Nav from '../Header/nav';
import AI from '../assets/ai.png'
import RAI from '../assets/Rtech.png'
import './home.css'
import CAI from '../assets/Cvision.png'
import CAI1 from '../assets/Cvision1.png'
import CAI2 from '../assets/Cvision2.png'
const home = () => {
  return (
<>
<section>
     <article>
            <div className="card">

                    <img src={AI} alt="pro" />
                    <div className="content">
                        <h3>AI is the ultimate goal of the world </h3>
                       
                    </div>
                </div>

                <div className='Contenttext'>
                    <div className='heading'>Artificial Intelligence</div>
                   <div className='textcon'> Artificial intelligence (AI) is the capability of computational systems to perform tasks typically associated with human intelligence, such as learning, reasoning, problem-solving, perception, and decision-making.</div>
                </div>
</article>
</section>
<section>
     <article>
            

                <div className='Contenttext'>
                    <div className='heading1'>Robotics</div>
                   <div className='textcon1'> Artificial Intelligence (AI) in robotics is one of the most groundbreaking technological advancements, revolutionizing how robots perform tasks. What was once a futuristic concept from space operas, the idea of "artificial intelligence robots" is now a reality, shaping industries globally. </div>
                </div>
                <div className="card">

                    <img src={RAI} alt="pro" />
                    <div className="content">
                        <h3>Robotics and artificial intelligence</h3>
                       
                    </div>
                </div>
</article>
</section>
<div>
    <div className='dhead'>
Computer Vision 
    </div>
    <div className='dtext'> 
Computer Vision (CV) is a branch of Artificial Intelligence (AI) that helps computers to interpret and understand visual information much like humans. This tutorial is designed for both beginners and experienced professionals and covers key concepts such as Image Processing, Feature Extraction, Object Detection, Image Segmentation and other core techniques in CV.
    </div>
   
    <div className='dimg'>
      <img src={CAI} alt="" />
      <img src={CAI1} alt="" />
      <img src={CAI2} alt="" />
    </div>
</div>
<div className="container">
      <h1>About Artificial Intelligence</h1>
      <div className="line">On August 18, 2025, at 09:12 AM IST, AI continues to surprise with its rare applications, such as IntelligentX using AI to craft personalized beers based on customer feedback, robotic bees aiding pollination amid declining natural populations, and IBM’s AI creating unique perfumes with Symrise. Other innovations include AI toothbrushes like Kolibree’s Ara that monitor brushing habits, AI uncovering new physics laws at Emory University, Baidu’s smart cat shelters in Beijing, and self-repairing robots demonstrating autonomous maintenance, showcasing AI’s diverse and evolving impact.2s</div>
      <button>Button</button>
      <div className="copyright">Hello techi</div>
    </div>
</>
  );
};

export default home;