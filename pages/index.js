// pages/index.js

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* INTRODUCTION / ANSWERS SECTION */}
        <p>
          Hello! I am a budding developer passionate about building modern web applications. 
          Below are my thoughts on web development:
        </p>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li style={{ marginBottom: '15px' }}>
            <strong>1. UI/UX vs. Logic:</strong><br />
            I am more drawn to <em>how a website looks and feels (UI/UX)</em>. While the backend logic is the engine, the interface is the steering wheel. I love the immediate visual feedback of writing CSS and creating fluid layouts. Understanding how to guide a user's eye and create a seamless experience feels like a blend of psychology and engineering that I find really engaging.
          </li>
          
          <li style={{ marginBottom: '15px' }}>
            <strong>2. Technologies I'm eager to learn:</strong><br />
            I am specifically eager to deepen my knowledge of <em>Next.js</em> for its routing capabilities and <em>Tailwind CSS</em>. I've heard how Tailwind speeds up the styling process significantly, and I want to master Server-Side Rendering (SSR) in Next.js to make applications faster and SEO-friendly.
          </li>

          <li style={{ marginBottom: '15px' }}>
            <strong>3. A feature I wonder how to build:</strong><br />
            I have always wondered how to build a <em>Dark Mode toggle</em> that persists across page reloads and checks system preferences. Seeing a website seamlessly switch themes without flickering seems like a small detail, but I know there is interesting logic behind managing that state.
          </li>
        </ul>

        {/* REQUIRED TEXT - DO NOT DELETE */}
        <p>
          (This is a sample website - you’ll be building a site like this on our{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}