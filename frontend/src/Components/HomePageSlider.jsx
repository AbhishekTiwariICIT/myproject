import styles from '../css/HomePageSlider.module.css';
import { useState, useEffect } from 'react';
import Message from './MessageCard/Message';
import Carousel from './Carousel';
import SectionCard from '../Components/schResultsUpdate/SectionCard.jsx';
import { Homepagemessage } from './Homepagmessage';
import Bouncetemp from './Bounncetem';
import pic1 from '../assets/Images/pic1.jpg';
import pic2 from '../assets/Images/pic2.jpg';
import pic3 from '../assets/Images/pic3.jpg';
import pic4 from '../assets/Images/pic4.jpg';
import messageimg from '../assets/Images/img.jpeg';
import TopperStd from './schResultsUpdate/TopperStd.jsx';

export default function HomePageSlider() {

    /* const boxes = [
        { id: 1, titleName: "1st PHASE ENTRANCE EXAM RESULTS 2025" },
        { id: 2, titleName: "2nd PHASE ENTRANCE EXAM RESULTS 2025" },
        { id: 3, titleName: "3rd PHASE ENTRANCE EXAM RESULTS 2025" },
        { id: 4, titleName: "4th PHASE ENTRANCE EXAM RESULTS 2025" }
    ]; */

    const sections = [
  {
    id: 1,
    title: <>1<sup>st</sup> PHASE ENTRANCE EXAM RESULTS 2025</>,
    boxes: [
      { id: 1, className: "Class VI", link: "/vi-result-1", isNew: true },
      { id: 2, className: "Class VII", link: "/vii-result-1", isNew: false },
      { id: 3, className: "Class VIII", link: "/viii-result-1", isNew: true },
      { id: 4, className: "Class IX", link: "/ix-result-1", isNew: false }
    ]
  },
  {
    id: 2,
    title: <>2<sup>nd</sup> PHASE ENTRANCE EXAM RESULTS 2025</>,
    boxes: [
      { id: 1, className: "Class VI", link: "/vi-result-2", isNew: false },
      { id: 2, className: "Class VII", link: "/vii-result-2", isNew: true },
      { id: 3, className: "Class VIII", link: "/viii-result-2", isNew: false },
      { id: 4, className: "Class IX", link: "/ix-result-2", isNew: false }
    ]
  },
  {
    id: 3,
    title: <>3<sup>rd</sup> PHASE ENTRANCE EXAM RESULTS 2025</>,
    boxes: [
      { id: 1, className: "Class VI", link: "/vi-result-3", isNew: false },
      { id: 2, className: "Class VII", link: "/vii-result-3", isNew: false },
      { id: 3, className: "Class VIII", link: "/viii-result-3", isNew: true },
      { id: 4, className: "Class IX", link: "/ix-result-3", isNew: false }
    ]
  },
  {
    id: 4,
    title: <>4<sup>th</sup> PHASE ENTRANCE EXAM RESULTS 2025</>,
    boxes: [
      { id: 1, className: "Class VI", link: "/vi-result-4", isNew: false },
      { id: 2, className: "Class VII", link: "/vii-result-4", isNew: false },
      { id: 3, className: "Class VIII", link: "/viii-result-4", isNew: false },
      { id: 4, className: "Class IX", link: "/ix-result-4", isNew: true }
    ]
  }
];

const topperStdData=[
    {
        Id:1,
        
        SubTitle:"Intermediate Topper",
        Name:"Sakshi",
        Per:"96",
        RollNo:" ",
        CollegeRank:"01",
        DistrictRank:"03"


    },
    {
        Id:2,
        
        SubTitle:"High School Topper",
        Name:"KHUSHI SAHU",
        Per:"95",
        RollNo:" ",
        CollegeRank:"01",
        DistrictRank:"01"


    }
]

    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        setShowPopup(true);
    }, []); // Empty dependency array = run only once


    const handleClosePopup = () => {
        setShowPopup(false);
    };


    return (
        <>
            {showPopup && (
                <>

                    <Bouncetemp onClose={handleClosePopup} />

                </>
            )}
            <div className={styles.heroSection}>
                <Carousel>
                    <img src={pic1} alt="image 1 not found" />
                    <img src={pic2} alt="image 2 not found" />
                    <img src={pic3} alt="image 3 not found" />
                    <img src={pic4} alt="image 4 not found" />
                </Carousel>

                {/* <Homepagemessage messageimg={`${messageimg} `}/> */}
                <Message />


            </div>

            {sections.map((item) => (
                <SectionCard key={item.id} data={item} />
            ))}
            

            
         {/*    {topperStdData.map((item)=>(

            <TopperStd key={item.Id} data={item}/>
            ))} */}

            <TopperStd data={topperStdData} />
        </>


    );
}
