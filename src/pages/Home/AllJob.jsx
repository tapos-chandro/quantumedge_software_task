import { useEffect, useState } from 'react';
import Card from './Card';


const AllJob = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:5000/api/jobs')
            .then(res => res.json())
            .then(data => {
            
                setJobs(data.data)
                setLoading(false)
            })
            .catch(err => console.error("Error:", err));
    }, []);

    return (
        <div className='py-10'>
            {
                loading ? <div className='w-full flex justify-center '><span className="loading loading-bars loading-xl text-primary-color"></span></div> :<>
                <h1 className='text-3xl font-bold mb-10 px-5 lg:px-0  '>5 search result(s) found</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:p-0 p-5'>
                {
                    jobs.map(job => <Card key={job?.id} job={job}></Card>)
                }
            </div></>
            }
        </div>
    );
};

export default AllJob;