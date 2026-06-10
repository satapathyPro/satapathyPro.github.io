import styles from '../styles/About.module.css';
import about from '../data/about.json';
import user from '../data/user.json';
import { getAssetPath } from '../lib/utils';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Text Section with more growth on flex-grow */}
      <div className={styles.textSection}>
        <p><span style={{ color: '#2c9ffe' }}>{'<h3>'}</span> A Little Bit About Me <span style={{ color: '#2c9ffe' }}>{'</h3>'}</span></p>
        <br/>
        {about.bio.map((paragraph, index) => (
          <div key={index}>
            <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
            <p style={{ marginLeft: '20px' }}>{paragraph}</p>
            <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>
            {index < about.bio.length - 1 && <br/>}
          </div>
        ))}

        <br/>
        <p><span style={{ color: '#2c9ffe' }}>&lt;p</span> <span style={{ color: 'lightskyblue' }}>class</span>=<span style={{ color: 'orange' }}>"interests"</span><span style={{ color: '#2c9ffe' }}>&gt;</span></p>
        <p style={{ marginLeft: '20px' }}>
          Outside of shipping production systems, I'm drawn to {about.interests.slice(0, -1).join(', ')}, and {about.interests[about.interests.length - 1]}.
          I'm always happy to connect with fellow engineers and collaborate on projects that turn
          hard infrastructure and AI problems into real, measurable impact.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>
      </div>


      {/* Image Section with less growth on flex-grow */}
      <div className={styles.imageSection}>
        <img src={getAssetPath(user.avatarUrl)} alt={user.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
