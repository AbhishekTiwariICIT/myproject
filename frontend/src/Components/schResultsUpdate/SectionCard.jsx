import React from "react";
import styles from '../../css/schResultsUpdate/sectioncard.module.css';

const Section = ({ data }) => {
    
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        <span>{data.title}</span>
      </div>
      <div className={styles.grid}>
        {data.boxes.map((box)=>(
            <div key={box.id} className={styles.box}>
              <span className={styles.linkspan}>
            <a href={box.link}>
              {box.className} Entrance Exam Results 2025 </a>
              </span>
            {box.isNew && <span className={box.isNew ? styles.blinkLink : ""}> New</span>}
            </div>
        ))}
         
      </div>
    </div>
  );
};


export default Section;