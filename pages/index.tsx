import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Savoir from "../components/Savoir"
import Mom from "../components/Mom"
import Experience from "../components/Experience"
import Formation from "../components/Formation"
import Project from "../components/Project"
import ContactMe from "../components/ContactMe"
import { Experiences, Formations, Personal, Projects, Social } from "../typings"
// import { fetchExperiences } from "../utils/fetchExperiences"
// import { fetchProjects } from "../utils/fetchProjects"
// import { fetchSkills } from "../utils/fetchSkills"
// import { fetchFormations } from "../utils/fetchFormation"
// import { fetchSocial } from "../utils/fetchSocial"
// type Props = {
//   personal: Personal[]
//   experiences: Experience[]
//   formations: Formation[]
//   projects: Project[]
//   social: Social[]
// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Isake Neut</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      {/* header */}
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}
