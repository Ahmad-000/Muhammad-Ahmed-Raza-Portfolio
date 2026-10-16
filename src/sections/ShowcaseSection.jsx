import React, {useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) =>  {
            gsap.fromTo(
                card,
                {
                    y: 50 , opacity:0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay:0.1 + (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity:1,   duration: 1.5})
    }, []);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                {/*  left side  */}
                    <div className='first-project-wrapper group relative overflow-hidden' ref={project1Ref}>
                        {/* Hover GitHub Button Overlay */}
                        <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center p-4'>
                            <a 
                                href='https://github.com/your-username/k8s-auto-scaler' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-xl'
                            >
                                <FaGithub className='text-xl' /> View on GitHub <FiExternalLink />
                            </a>
                        </div>

                        <div className='image-wrapper'>
                            <img src='/images/project11.jpg' alt='K8s Auto-Scaler' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>
                        </div>
                        <div className='text-content'>
                            <h2>
                                Automated Multi-Cluster Scaling and Health Management with Kubernetes Operator
                            </h2>
                            <p className='text-white-50 md:text-xl'>
                                A cloud-native system built for automated pod distribution, cluster monitoring, and zero-downtime routing.
                            </p>
                        </div>
                    </div>

                {/*  right side  */}
                    <div className='project-list-wrapper overflow-hidden flex flex-col gap-6'>
                        <div className='project group relative overflow-hidden rounded-2xl' ref={project2Ref}>
                            {/* Hover GitHub Button Overlay */}
                            <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center p-4'>
                                <a 
                                    href='https://github.com/your-username/gitops-pipeline-engine' 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className='bg-white text-black px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-xl'
                                >
                                    <FaGithub className='text-lg' /> View on GitHub <FiExternalLink />
                                </a>
                            </div>

                            <div className='image-wrapper bg-[#ffefeb]'>
                                <img src='/images/project22.jpg' alt='GitOps CI/CD Pipeline' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>
                            </div>
                            <h2>
                                GitOps CI/CD Deployment Engine with GitHub Actions & Docker
                            </h2>
                        </div>

                        <div className='project group relative overflow-hidden rounded-2xl' ref={project3Ref}>
                            {/* Hover GitHub Button Overlay */}
                            <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center p-4'>
                                <a 
                                    href='https://github.com/your-username/terraform-cloud-provisioner' 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className='bg-white text-black px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-xl'
                                >
                                    <FaGithub className='text-lg' /> View on GitHub <FiExternalLink />
                                </a>
                            </div>

                            <div className='image-wrapper bg-[#ffe7db]'>
                                <img src='/images/project33.jpg' alt='Terraform Infrastructure' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>
                            </div>
                            <h2>
                                Terraform Cloud Infrastructure Provisioner & IaC Modules
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection