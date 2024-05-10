import Header from "../components/Header"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    
    <Header/>
    <HomeCards/>
    <JobListings isHome = {true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage